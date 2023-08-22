import React from "react";
import "./GymnasticsInIndia.css";
import pic1 from "../../../../../../assets/GymnasticsInIndia.png";
const GymnasticsInIndia = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <img src={pic1} alt="" />

        <div>
          <h2 className="text-center mt-6 font-bold text-[#000000]">
          Mr Sudhir Mital
          </h2>
          <p className="text-center mt-5 text-[#636363]">
          President, Gymnastics Federation of India.
          </p>
        </div>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                Gymnastic is the mother of all games
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-5 text-justify">
              It helps in creating coordination and effective muscle memory that
              lasts a lifetime.
            </p>
            <p className="mt-5 text-justify">
              Know all about Gymnastics In India from Mr Sudhir Mital,
              President, Gymnastics Federation of India.
            </p>

            <p className="mt-5 text-justify">
              Mr Mital, a retired IAS officer of Punjab cadre, was a former
              president and served as GFI chief from 2003 to 2007. He served as
              chairman of Competition Commission of India in 2018 after joining
              the organisation in 2014 as a member.
            </p>
            <p className="mt-6 font-bold">Date: 4th July, 2020</p>
            <p className="mt-6 font-bold">Time: 4PM</p>

            <p className="mt-7 text-justify">
              Event organized in collaboration with Directorate Of Sports and
              Youth Services, Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymnasticsInIndia;
