import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";
import "./Camera.css"
function Camera() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const [leftArm, setLeftArm] = useState("")
  const [rightArm, setRightArm] = useState("")


  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width:  640, height: 480  },
      scale: 0.8,
    });
   
    setInterval(() => {
      detect(net);
    }, 100);
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
     // console.log(pose);
  
      const rightShoulder = pose.keypoints.find((keypoint) => keypoint.part === "rightShoulder").position;
      const rightElbow = pose.keypoints.find((keypoint) => keypoint.part === "rightElbow").position;
      const rightWrist = pose.keypoints.find((keypoint) => keypoint.part === "rightWrist").position;
  
      //  positions for the left arm keypoints
      const leftShoulder = pose.keypoints.find((keypoint) => keypoint.part === "leftShoulder").position;
      const leftElbow = pose.keypoints.find((keypoint) => keypoint.part === "leftElbow").position;
      const leftWrist = pose.keypoints.find((keypoint) => keypoint.part === "leftWrist").position;
  
      const leftArmAngle = calculateAngle(leftShoulder, leftElbow, leftWrist);
      const rightArmAngle = calculateAngle(rightShoulder, rightElbow, rightWrist);
  
      // console.log(`Left Arm Angle (degrees): ${leftArmAngle}`);
      // console.log(`Right Arm Angle (degrees): ${rightArmAngle}`);
      
      setLeftArm(`Left Arm Angle (degrees): ${leftArmAngle}`);
      setRightArm(`Right Arm Angle (degrees): ${rightArmAngle}`);
      
      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
    }
  };
  
  const calculateAngle = (pointA, pointB, pointC) => {
    // Calculate the angle between three points (pointA, pointB, pointC).
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
  runPosenet();
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
 <h3>{rightArm}</h3> <br/>
 <h3>{leftArm}</h3> 
 <h3>Left Knee</h3>
 <h3>Right Knee</h3>
</div>

    </div>
  )
}

export default Camera
// {score: 0.31534247883759875, keypoints: Array(17)}
// keypoints
// : 
// Array(17)
// 0
// : 
// part
// : 
// "nose"
// position
// : 
// {x: 386.991730450468, y: 295.1570621101871}
// score
// : 
// 0.9629470109939575
// [[Prototype]]
// : 
// Object
// 1
// : 
// {score: 0.9907873272895813, part: 'leftEye', position: {…}}
// 2
// : 
// {score: 0.9951254725456238, part: 'rightEye', position: {…}}
// 3
// : 
// {score: 0.21000520884990692, part: 'leftEar', position: {…}}
// 4
// : 
// {score: 0.9742039442062378, part: 'rightEar', position: {…}}
// 5
// : 
// {score: 0.09970144927501678, part: 'leftShoulder', position: {…}}
// 6
// : 
// {score: 0.465686172246933, part: 'rightShoulder', position: {…}}
// 7
// : 
// {score: 0.0074429986998438835, part: 'leftElbow', position: {…}}
// 8
// : 
// {score: 0.01254657655954361, part: 'rightElbow', position: {…}}
// 9
// : 
// {score: 0.3241625130176544, part: 'leftWrist', position: {…}}
// 10
// : 
// {score: 0.2491542249917984, part: 'rightWrist', position: {…}}
// 11
// : 
// {score: 0.012237735