import React from "react";
import "./EyeHealthSeminar.css";

import pic1 from "../../../../../../assets/eye-health-seminer-cover.png";

const EyeHealthSeminar = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <img src={pic1} alt="" />

        <div>
          <h2 className="text-center mt-6 font-bold text-[#000000]">
            Dr Akshay Badakere
          </h2>
          <p className="text-center mt-5 lg:px-64 md:px-32 px-0 text-[#3A3A3A]">
            Neuro Ophthalmologist, Hyderabad. MBBS, DOMS, Fellowship in
            Pediatric Ophthalmology, Strabismus and Neuro Ophthalmology
          </p>
        </div>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                Seminar on Eye Health, Movement, Nutrition and Recovery for Kids
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-16">The focus of the session was arround</p>
            <p className=" list-disc">
              <li className="mt-5">
                growing concern of increasing screen time
              </li>
              <li>precaution to be taken during the pandemic</li>
              <li> things we can do to improve kid’s eye health</li>
              <li>20-20-20 rule for better eye health</li>
              <li> Long lasting vitality for Kids</li>
              <li>Movement, Nutrition and Recovery</li>
            </p>

            <p className="mt-5 text-justify">
              Dr Akshay Badakere has completed fellowship in comprehensive
              ophthalmology followed by a specialized training in pediatric
              ophthalmology, strabismus and neuroophthalmological from LV Prasad
              eye institute. His special interests are pediatric cataract,
              pediatric neuroophthalmological and ocular genetics. LV Prasad Eye
              Institute is considered to be one of the best Eye Hospital in the
              world.
            </p>
            <p className="mt-6 font-bold">Date: 12th August, 2020</p>
            <p className="mt-6 font-bold">Time: 12:30-1.30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeHealthSeminar;
