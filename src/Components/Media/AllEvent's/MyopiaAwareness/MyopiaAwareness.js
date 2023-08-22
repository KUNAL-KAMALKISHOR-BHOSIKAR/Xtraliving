import React from "react";
import "./MyopiaAwareness.css";

import pic1 from "../../../../../../assets/myopiaAwareness.png";
import pic2 from "../../../../../../assets/myopia-pic-1.png";

import speaker1 from "../../../../../../assets/myopia-speaker-1.png";
import speaker2 from "../../../../../../assets/myopia-speaker-2.png";
import speaker3 from "../../../../../../assets/myopia-speaker-3.png";

const MyopiaAwareness = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <img src={pic1} alt="" className="w-full" />
      <div className="mx-auto w-3/4">
        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-20 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                How do we keep our kids’ eyes healthy in a digital world?​
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-6 font-bold text-[#000000]">Date: 4th July, 2020</p>
            <p className="mt-6 font-bold text-[#000000]">Time: 4PM</p>

            <p className="text-justify mt-32">
              Agenda of this interactive online program:
            </p>
            <p className="mt-4">
              1. Storytelling from book 1 of “The Plano Adventures” series,
              Trouble in Murk town
            </p>
            <p>
              2. Learn about the anatomy of the eye and why some people get
              blurry vision: a science-filled education session about the vision
              and excessive screen time.
            </p>
            <p>3. Quizzes, prizes, and exclusive offers for participants</p>

            <p className="mt-4">This programme was for kids aged 4 to 12.</p>
          </div>
        </div>

        <div className="flex gap-10 mt-8 lg:flex-row md:flex-row flex-col">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <img src={pic2} alt="" />
          </div>
          <div className="lg:w-9/12 md:w-9/12 w-full">
            <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0]">
              <div className="collapse-title text-xl font-medium">
                <div className="border-left flex items-center font-bold">
                  <p className="ml-3 text-[#000000]">
                    About Trouble in Murk town
                  </p>
                </div>
              </div>
              <div className="collapse-content">
                <p className="text-justify mt-10">
                  Lord Myopic is determined to cover Murk town in fog, and take
                  control of its people with his bottle-bottle screens. Only
                  Professor Plano knows how to defeat him! On his way to the
                  Crystal Clear Vision Academy, he accidentally ends up in the
                  backyard of a certain pair of twins! Little does he know, this
                  is the exact place he needs to be to succeed.
                </p>

                <p className="mt-16 text-justify">
                  1.5 billion people suffer from myopia, also known as
                  short-sightedness. This number will rise to 5 billion by 2050,
                  and 1 billion will develop high myopia, which can lead to
                  blindness. Studies have shown that excessive smart device use
                  is a key contributing factor. There has been a recent and
                  dramatic increase in the amount of time that people spend on
                  using smart devices, with each person spending an average of 6
                  hours each day using the internet on smart devices. This is
                  equivalent to each person spending 2,190 hours or 3 months of
                  every year, looking at device screens. Adding the amount of
                  time people spend in school or work into the equation, it is
                  therefore not surprising that a majority of people experience
                  a sense that there is simply not enough time in the day. As
                  people get too engrossed in their digital lives, most of them
                  do not stop to monitor and calculate the amount of time that
                  they spend on devices and do not realize how much of their
                  lives they irreversibly waste on the cycle of internet and
                  device addiction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-28">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">About Plano</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-10">
              Plano is a Singapore-based health technology company that
              specializes in the management of myopia (short-sightedness) and
              smart device use through education and awareness and science-based
              technological interventions. Plano’s main product, the planoApp,
              is the only science-based parental control application that helps
              monitor your child’s device use and eye health. Find out more at
              plano.co.
            </p>
          </div>
        </div>

        <h1 className="myopia-title text-center mt-12">Speakers</h1>

        <div className="flex justify-center mx-8 mt-8">
          <div className="flex lg:gap-10 gap-8 items-center flex-col lg:flex-row">
            <div>
              <img src={speaker1} alt="" className="w-52 mx-auto" />
              <h3 className="speaker-name mb-2">Mr. Kevin Tay</h3>
              <p className="text-justify">
                Kevin is Plano’s Chief Operating Officer who is passionate about
                the company’s vision: “Keeping all eyes healthy in a digitized
                world”. Kevin is an MBA graduate from the Nanyang Business
                School, with a Master’s in Strategy and International Management
                from the University of St. Gallen, Switzerland. He also has a
                Bachelor’s in Chemical Engineering from the National University
                of Singapore (NUS).
              </p>
            </div>

            <div>
              <img src={speaker2} alt="" className="w-52 mx-auto" />
              <h3 className="speaker-name mb-2">Mr. Arief Tjitra Salim</h3>
              <p className="text-justify">
                Arief is a Senior Research Scientist at Plano Pte Ltd. Arief
                graduated from Nanyang Technological University (NTU) was
                amongst the top 5% of his cohort. To date, he has conducted over
                60 eye health talks, reaching out to more than 50,000 primary
                school children and teachers across Singapore and abroad. He has
                also authored three universal reports concerning parental
                awareness and knowledge about myopia, as well as digital eye
                strain in both adults and children.
              </p>
            </div>

            <div>
              <img src={speaker3} alt="" className="w-52 mx-auto" />
              <h3 className="speaker-name mb-2">Dr. Anitha D Praveen</h3>
              <p className="text-justify">
                Anitha is a Senior Research Scientist at Plano Pte Ltd. Having
                majored in Biomedical Engineering, she has more than 10 years of
                research expertise. Being a recipient of the Singapore
                University of Technology and Design (SUTD) scholarship, she
                successfully completed her PhD from SUTD with over 5 high-impact
                journal articles published as the first author. Prior to her
                doctorate studies, she also graduated with her Bachelors and
                Masters of Engineering from National University of Singapore
                (NUS).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyopiaAwareness;
