import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";
import "./Camera.css"
import debounce from "lodash/debounce";
function Camera() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const [hip, setHip] = useState(false);
  const [kneeAngles, setKneeAngles] = useState([]);
  const [count, setCount] = useState(0); 
  const [squatQuality, setSquatQuality] = useState("");


  const detectSquats = () => {
    const thresholdAngle = 90; // Adjust as needed
    let isInSquat = false;
  
    for (let i = 0; i < kneeAngles.length; i++) {
      const angle = kneeAngles[i];
  
      if (angle < thresholdAngle && !isInSquat) {
        isInSquat = true;
        setCount((prevCount) => prevCount + 1);
        console.log("Squat No.", count);
      }
  
      if (angle >= thresholdAngle && isInSquat) {
        isInSquat = false;
      }
    }
  };

  const debouncedDetectSquats = debounce(detectSquats, 1000);

  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 320, height: 240  },
      scale: 0.5,
    });
   
    setInterval(() => {
      detect(net);
      debouncedDetectSquats(net);
    }, 500);
  };


  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
  
      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
  
      // Make Detections
      const pose = await net.estimateSinglePose(video);
      //console.log(pose);
  


    const leftHip = pose.keypoints.find((keypoint) => keypoint.part === "leftHip").position;
    const rightHip = pose.keypoints.find((keypoint) => keypoint.part === "rightHip").position;

    const referencePoint = {
      x: (leftHip.x + rightHip.x) / 2,
      y: (leftHip.y + rightHip.y) / 2,
    };

    const hipAngle = calculateAngle(leftHip, referencePoint, rightHip);

    const hipAngleThreshold = 90
    if (hipAngle <= hipAngleThreshold) {
    setHip(true)
    } else {
      setHip(false)
    }
  

  const leftKnee = pose.keypoints.find((keypoint) => keypoint.part === "leftKnee").position;
  const leftAnkle = pose.keypoints.find((keypoint) => keypoint.part === "leftAnkle").position;
  const leftKneeAngle = calculateAngle(leftHip, leftKnee, leftAnkle);  
  setKneeAngles((prevAngles) => [...prevAngles, leftKneeAngle]);
  
  const evaluateSquat = (hipAngle, kneeAngle) => {
    const hipAngleThreshold = 90; // Adjust as needed
    const kneeAngleThreshold = 120; // Adjust as needed
  
    if (hipAngle <= hipAngleThreshold && kneeAngle >= kneeAngleThreshold) {
      return "Perfect Squat";
    } else {
      return "Not Perfect";
    }
  };
  
  const squatQuality = evaluateSquat(hipAngle, leftKneeAngle);
  setSquatQuality(squatQuality);

  // Calling the squat counting function
      detectSquats();

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);  
      tf.disposeVariables();    
    }
  
  };
  
  const calculateAngle = (pointA, pointB, pointC) => {
    //  between three points (pointA, pointB, pointC).
    const radians = Math.atan2(pointC.y - pointB.y, pointC.x - pointB.x) -
                    Math.atan2(pointA.y - pointB.y, pointA.x - pointB.x);
  
    // Convert radians to degrees.
    const degrees = (radians * 180) / Math.PI;
  
    return degrees;
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.6, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };
  useEffect(() => {
    runPosenet();
  }, []);

     return (
    <div>
  <header className="App-header">
  <Webcam
    ref={webcamRef}
    style={{
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",
      zindex: 9,
      width: "90%",
      height: "100%",
    }}
  />

  <canvas
    ref={canvasRef}
    style={{
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",
      zindex: 9,
      width: "90%",
      height: "100%",
    }}
  />
</header>

<div className="info-area">  
      <h3> {`squat count is${count}`}</h3>  
      <h3>{`Squat Quality: ${squatQuality}`}</h3>   
</div>

    </div>
  )
}

export default Camera
