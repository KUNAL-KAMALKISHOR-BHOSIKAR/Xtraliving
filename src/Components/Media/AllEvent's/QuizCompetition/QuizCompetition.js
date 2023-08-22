import React from "react";
import pic1 from "../../../../../../assets/eNERGIZEQuizCompetition.png";
import "./QuizCompetition.css";
const QuizCompetition = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
          <img src={pic1} alt="" className="w-full"/>
      <div className="mx-auto w-3/4">
    
        {/* <div className="flex justify-center mt-10">
          <a href="#" target="blank" className="">
            <button className="fill-btn-1 ">APP LINK</button>
          </a>
        </div> */}
        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Event Format</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-5 text-justify">
              Round 1: On 26th Jan 2021, 35,631 young athletes have participated
              in the quiz. Winners have been selected based on their responses.
              Top 2,500 students have been selected for Round 2 from each age
              group. Results were declared in the App at 6 PM on 28th Jan.
            </p>

            <p className="mt-5 text-justify">
              Round 2: On 30th Jan 2021 all the winners of round 1 were sent a
              link to an event, and a quiz link had been given at the end of the
              event. Top 500 students from each age group were qualify for round
              3. A total of 15,634 were selected for the Round 3.
            </p>

            <p className="mt-5 text-justify">
              Round 3: On 6th Feb 2021, Top 500 students from each age group
              participated in round 3. A total of 1,716 were selected for the
              next round.
            </p>
            <p className="mt-5 text-justify">
              Round 4: On 10th Feb 2021, a total of 150 students from each age
              group have competed in round 4.
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">School Trophy</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-5 text-justify">
              You need to know your limits. It’s important to know when to stop.
              Don’t exert so much that it starts hurting. Movement is essential
              but it’s essential to move in very small movements. If small
              movements also hurt consider moving passively. This means that
              don’t try to walk, instead, use your hand to gently move your
              feet. MovTop 50: Top 50 active school from each age group have
              received an appreciation certificate and special recommendation.
              The list had been shared with all schools and students.
            </p>

            <p className="mt-5 text-justify">
              Top 5: Top 5 schools from each age group received trophy and
              letter of recommendation from Directorate of Sports, Maharashtra.
            </p>

            <p className="mt-5 text-justify">
              Winning school: The winning school from each age group received
              the winning trophy and the certificate with special appreciation
              from Directorate of Sports, Maharashtra.
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Student Trophy</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-5 text-justify">
              Top 500: Top 500 young athletes from each age group received an
              appreciation certificate and special recommendation. The list had
              been shared with all schools and students.
            </p>

            <p className="mt-5 text-justify">
              Top 5: Top 5 students from each age group received trophy and
              letter of recommendation from Directorate of Sports, Maharashtra.
            </p>
          </div>
        </div>


        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Winner</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-5 text-justify">
            The winning student from each age group received the winning trophy and a certificate with special appreciation from Directorate of Sports, Maharashtra.
            </p>

            <p className="lg:text-center mt-28 lg:px-32 px-0 text-justify font-semibold text-[#000000]">**Thank you for spreading the word.**eNERGIZE Quiz Competition is an initiative of Directorate of sports, Maharashtra in collaboration with Xtraliving. We will organize more events and seminars to promote fitness and sports nationally.</p>

            <p className="mt-10 text-center font-bold text-[#000000]">"We help kids build sustainable healthy habits for enduring vitality. Join our vibrant Athletic Community. "</p>

            <p className="text-center mt-4 text-[#000000]">-Rishikesh Kumar, Founder and CEO, Xtraliving</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCompetition;
