import React from "react";
import pic1 from "../../../../../../assets/GoGirl.png";
const GoGirl = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <img src={pic1} alt="" className="w-full"/>
      <div className="mx-auto w-3/4">
        

        <p className="mt-20 text-justify">
          Go Girl Go campaign has been launched as an initiative by the
          Department of Sports and Youth Services of Maharashtra to strengthen
          and empower girls across the state through sports. "Go Girl Go"
          campaign and has been initiated with Khelo India Youth Games 2020 and
          304 girls from Maharashtra participated in it.
        </p>
        <p className="text-justify">
          The campaign envisions to foster an environment for girls where they
          can be actively involved in physical and sports activities at school,
          gain confidence to choose a career in sports and built the right
          nutritional habits for a healthy life.{" "}
        </p>
        <p className="text-justify">
          {" "}
          This campaign focuses on nutrition, physical fitness and participation
          in sports for girls. We aim to give them the right knowledge for a
          healthy future and target to overcome challenges faced by girls to
          participate in sports activities.
        </p>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Facts</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-5 text-justify">
              When a girl is educated and shown the right way, she influences a
              whole family when she grows up. There are 1.2 Crore girls in
              Maharashtra, consequently, they can positively impact 1.2 crore
              families. 
            </p>

            <p>This is a platform to help athletes connect with
              mentors.</p>

            <p className=" list-disc">
              <li className="mt-5">
                As an athlete you may get help in the area of training,
                sponsorship and guidance.
              </li>
              <li>
                Those who would like to encourage women in sports can help the
                aspirants by providing them guidance and sponsorship.
              </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGirl;
