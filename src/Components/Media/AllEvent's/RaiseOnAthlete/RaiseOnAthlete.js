import React from "react";
import "./RaiseOnAthlete.css";

import pic1 from "../../../../../../assets/raiseOnAthlete-2.png";

const RaiseOnAthlete = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
         <img src={pic1} alt="" className="w-full"/>
      <div className="mx-auto w-3/4">
        <p className="mt-10 text-justify">
          Sports has become incredibly demanding. Today, talent alone is not
          enough to be among the best. This requires huge amounts of work and
          many sacrifices. As a parent/guardian, you are the greatest mentor for
          your child. If you do not follow the advice you give yourself – your
          child probably won’t either. And you won’t be able to raise an elite
          athlete.⠀
        </p>

        <p className="mt-5 text-justify">
          This session is for parents/guardian of athletes.
        </p>

        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Agenda</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-4">- Priorities for athletes</p>

            <p className="text-justify mt-4">
              -Role we play in helping them improve their performance
            </p>

            <p className="text-justify mt-4">
              -Family habits and lifestyle which can influence them
            </p>
            <p className="text-justify mt-4">
              -Developing right environment ⠀⠀
            </p>

            <p className="mt-6 font-bold">Date: 11th July, 2020</p>
            <p className="mt-6 font-bold">Time: 11AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseOnAthlete;
