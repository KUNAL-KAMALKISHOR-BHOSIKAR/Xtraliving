import React from "react";
import pic1 from "../../../../../../assets/Reducing-the-risk-of-injury.png";
const ReducingTheRiskOfInjury = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <img src={pic1} alt="" />

        <div>
          <h2 className="text-center mt-6 font-bold text-[#000000]">
          Dr Romanov
          </h2>
          <p className="text-center mt-5 lg:px-80 md:px-32 px-0 text-[#3A3A3A]">
          Seniors sports scientist in US. Author of many top selling books including “Running Revolution”
          </p>
        </div>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                Dr. Nicholas Romanov is a developer of the Pose Method®️ and
                world-renowned sports scientist.
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-16 text-justify">
              Over the last several decades, the Pose Method®️ has been utilized
              at an institutional level with large organizations including the
              United States Military, CrossFit, and professional sports programs
              including the National Triathlon teams of Great Britain, United
              States, Mexico and Russia. Dr. Romanov also works with medical
              professionals including physical therapists, podiatrists and
              orthopedic surgeons. He travels around the world conducting
              research, consulting professional sports organizations, and as an
              educational speaker.
            </p>

            <p className="mt-5">
              A 2-time Olympic Coach, author, world-renowned sports scientist
              with a career spanning over forty years, Dr. Romanov specializes
              in:
            </p>

            <p className="list-disc">
              <li className="mt-5">Sport biomechanics</li>
              <li>Sport specific technique</li>
              <li>
                {" "}
                Kinesiology Sport training theory and physical education{" "}
              </li>
              <li>
                Training program development from elite to amateur athletes
                exercise physiology{" "}
              </li>
              <li> Injury diagnosis, prevention and exercise rehabilitation</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReducingTheRiskOfInjury;
