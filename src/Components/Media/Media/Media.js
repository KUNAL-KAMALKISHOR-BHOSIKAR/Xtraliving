import React, { useRef } from "react";
import "./Media.css";
import event1 from "../../../../../assets/event-1.png";
import event2 from "../../../../../assets/event-2.png";
import event3 from "../../../../../assets/event-3.png";
import event4 from "../../../../../assets/event-4.png";
import media1 from "../../../../../assets/media-1.1.png";
import media2 from "../../../../../assets/media-2.1.png";
import media3 from "../../../../../assets/media-3.1.jpg";
import media4 from "../../../../../assets/media-4.1.png";
import blogArrow from "../../../../../assets/blog-arrow.png";
import mediaHeader from "../../../../../assets/media-header.png";
import left from "../../../../../assets/left.png";
import right from "../../../../../assets/right.png";
import line from "../../../../../assets/line.png";
import slider1 from "../../../../../assets/media-slider-1.png";
import slider2 from "../../../../../assets/media-slider-2.png";
import slider3 from "../../../../../assets/media-slider-3.png";
import slider4 from "../../../../../assets/media-slider-4.png";
import slider5 from "../../../../../assets/media-slider-5.png";
import slider6 from "../../../../../assets/media-slider-6.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Media = () => {
  const sliderRef = useRef();
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="bg-media">
      <div className="bg-white pt-24 pb-20 lg:px-24 px-12">
        <Slider {...settings} ref={sliderRef}>
          <div className="">
            <div className="flex flex-col lg:flex-row">
              <img
                src={slider1}
                alt=""
                className="lg:w-96 md:w-64 w-44 mx-auto"
              />
              <div
                tabIndex={0}
                className="collapse collapse-open bg-white lg:mt-16 md:mt-10 mt-10 lg:px-16 md:px-16 px-4"
              >
                <div className="collapse-title text-xl font-medium">
                  <div className="border-left flex items-center font-bold">
                    <p className="ml-3 text-[#000000] lg:text-xl md:text-xl text-sm">
                      Xtraliving transforming health solution by focusing on
                      movement, nutrition, sleep and stress.
                    </p>
                  </div>
                </div>
                <div className="collapse-content"></div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col lg:flex-row">
              <img
                src={slider2}
                alt=""
                className="lg:w-80 h-16 md:w-64 w-44 mx-auto lg:mt-16"
              />
              <div
                tabIndex={0}
                className="collapse collapse-open bg-white lg:mt-16 md:mt-10 mt-10 lg:px-16 md:px-16 px-4"
              >
                <div className="collapse-title text-xl font-medium">
                  <div className="border-left flex items-center font-bold">
                    <p className="ml-3 text-[#000000] lg:text-xl md:text-xl text-sm">
                      Xtraliving building health solution specific for corporate
                      employees by focusing on their lifestyle.
                    </p>
                  </div>
                </div>
                <div className="collapse-content"></div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col lg:flex-row">
              <img
                src={slider3}
                alt=""
                className="lg:w-80 h-32 md:w-64 w-44 mx-auto lg:mt-9"
              />
              <div
                tabIndex={0}
                className="collapse collapse-open bg-white lg:mt-16 md:mt-10 mt-10 lg:px-20 md:px-16 px-4"
              >
                <div className="collapse-title text-xl font-medium">
                  <div className="border-left flex items-center font-bold">
                    <p className="ml-3 text-[#000000] lg:text-xl md:text-xl text-sm">
                      Fitness company building deep tech solution using their
                      training expertise and understanding of market.
                    </p>
                  </div>
                </div>
                <div className="collapse-content"></div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col lg:flex-row">
              <img
                src={slider4}
                alt=""
                className="lg:w-96 h-24 md:w-64 w-44 mx-auto lg:mt-9"
              />
              <div
                tabIndex={0}
                className="collapse collapse-open bg-white lg:mt-16 md:mt-10 mt-10 lg:px-20 md:px-16 px-4"
              >
                <div className="collapse-title text-xl font-medium">
                  <div className="border-left flex items-center font-bold">
                    <p className="ml-3 text-[#000000] lg:text-xl md:text-xl text-sm">
                      Xtraliving collaborate with Govt. of Maharashtra to spread
                      awareness among 12 million students about health. "
                    </p>
                  </div>
                </div>
                <div className="collapse-content"></div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col lg:flex-row">
              <img
                src={slider5}
                alt=""
                className="lg:w-72 h-32 md:w-64 w-44 mx-auto lg:mt-8"
              />
              <div
                tabIndex={0}
                className="collapse collapse-open bg-white lg:mt-16 md:mt-10 mt-10 lg:pr-52 lg:px-16 md:px-16 px-4"
              >
                <div className="collapse-title text-xl font-medium">
                  <div className="border-left flex items-center font-bold">
                    <p className="ml-3 text-[#000000] lg:text-xl md:text-xl text-sm">
                      Xtraliving collaborates with NCC and Sports Dept of
                      Maharashtra to encourage girl students to participate in
                      sports.
                    </p>
                  </div>
                </div>
                <div className="collapse-content"></div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col lg:flex-row">
              <img
                src={slider6}
                alt=""
                className="lg:w-80 lg:h-16 md:w-64 w-52 h-10 mx-auto lg:mt-16"
              />
              <div
                tabIndex={0}
                className="collapse collapse-open bg-white lg:mt-16 md:mt-10 mt-10 lg:px-12 md:px-16 px-4"
              >
                <div className="collapse-title text-xl font-medium">
                  <div className="border-left flex items-center font-bold">
                    <p className="ml-3 text-[#000000] lg:text-xl md:text-xl text-sm">
                      Xtraliving collaborate with Govt. of Maharashtra to spread
                      awareness among 12 million students about health.
                    </p>
                  </div>
                </div>
                <div className="collapse-content"></div>
              </div>
            </div>
          </div>
        </Slider>

        <div style={{ textAlign: "center" }} className="flex justify-center">
          <button className="button" onClick={handlePrev}>
            <img src={left} className="w-10" alt="" />
          </button>
          <div>
            <img src={line} alt="" className="mt-5 ml-3 mr-3" />
          </div>
          <button className="button " onClick={handleNext}>
            <img src={right} alt="" className="w-10" />
          </button>
        </div>
      </div>

      {/* previous width w-[72%] */}
      <div className="mx-auto w-10/12">
        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold ml-7">
              <p className="ml-3 text-[#000000]">Events</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ml-7 mt-5">
              <Link to={"/quizCompetition"}>
                <div>
                  <img src={event1} alt="" className="rounded-[16px]" />
                  <h1 className="mt-3 font-bold">eNERGIZE Quiz Competition</h1>
                </div>
              </Link>
              <Link to={"/goGirl"}>
                <div>
                  <img src={event2} alt="" className="rounded-[16px]" />
                  <h1 className="mt-3  font-bold">Go Girl Go campaign</h1>
                </div>
              </Link>
              <Link to={"/fitnessChampionship"}>
                <div>
                  <img src={event3} alt="" className="rounded-[16px]" />
                  <h1 className="mt-3  font-bold">
                    eNERGIZE fitness championship
                  </h1>
                </div>
              </Link>

              <Link to={"/bootcamp"}>
                <div>
                  <img src={event4} alt="" className="rounded-[16px]" />
                  <h1 className="mt-3 font-bold">eNERGIZE Bootcamp</h1>
                </div>
              </Link>
            </div>

            <div className="mt-5 text-right mr-4">
              <Link to={"/events"}>
                <button className="">
                  <img src={blogArrow} alt="" className="w-24" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold ml-7">
              <p className="ml-3 text-[#000000]">Media</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ml-7 mt-5 gap-5">
              <div>
                <img src={media1} alt="" className="" />
                <h1 className="mt-3 font-bold ">India Today</h1>
              </div>
              <div>
                <img src={media2} alt="" className="" />
                <h1 className="mt-3 font-bold">Times of India</h1>
              </div>
              <div>
                <img src={media3} alt="" className="" />
                <h1 className="mt-3 font-bold">The New Indian Express</h1>
              </div>
              <div>
                <img src={media4} alt="" className="" />
                <h1 className="mt-3 font-bold">Money Control</h1>
              </div>
            </div>
            <div className="mt-5 text-right mr-4">
              <Link to={"/allMedia"}>
                <button className="">
                  <img src={blogArrow} alt="" className="w-24" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
