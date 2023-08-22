import React from "react";
import img1 from "../../../../../assets/media-1.png";
import img2 from "../../../../../assets/media-2.png";
import img3 from "../../../../../assets/media-3.png";
import img4 from "../../../../../assets/media-4.png";
import img5 from "../../../../../assets/media-5.png";
import img6 from "../../../../../assets/media-6.png";
import img7 from "../../../../../assets/media-7.png";
import img8 from "../../../../../assets/media-8.png";
import img9 from "../../../../../assets/media-9.png";
import img10 from "../../../../../assets/media-10.png";
import img11 from "../../../../../assets/media-11.png";
import img12 from "../../../../../assets/media-12.png";
import img13 from "../../../../../assets/media-13.png";
import img14 from "../../../../../assets/media-14.png";
import img15 from "../../../../../assets/media-15.png";
import img16 from "../../../../../assets/media-16.png";
import img17 from "../../../../../assets/media-17.png";
import img18 from "../../../../../assets/media-18.png";
import img19 from "../../../../../assets/media-19.png";
import img20 from "../../../../../assets/media-20.png";
import img21 from "../../../../../assets/media-21.png";
import img22 from "../../../../../assets/media-22.png";
import img23 from "../../../../../assets/media-23.png";
import img24 from "../../../../../assets/media-24.png";
import img25 from "../../../../../assets/media-25.png";
import img26 from "../../../../../assets/media-26.png";
import img27 from "../../../../../assets/media-27.png";
import img28 from "../../../../../assets/media-28.png";
import img29 from "../../../../../assets/media-29.png";
import img30 from "../../../../../assets/media-30.png";
import img31 from "../../../../../assets/media-31.png";
import img32 from "../../../../../assets/media-32.png";
import img33 from "../../../../../assets/media-33.png";
import img34 from "../../../../../assets/media-34.png";
import img35 from "../../../../../assets/media-35.png";
import img36 from "../../../../../assets/media-36.png";
import img37 from "../../../../../assets/media-37.png";
import img38 from "../../../../../assets/media-38.png";
import img39 from "../../../../../assets/media-39.png";
import img40 from "../../../../../assets/media-40.png";
import img41 from '../../../../../assets/media-1.1.png'
import img42 from '../../../../../assets/media-2.1.png'
import img43 from '../../../../../assets/media-3.1.jpg'
import img44 from '../../../../../assets/media-4.1.png'
import img45 from '../../../../../assets/media-5.1.png'
import img46 from '../../../../../assets/media-6.1.png'
import img47 from '../../../../../assets/media-7.1.png'
import img48 from '../../../../../assets/media-8.1.png'
import img49 from '../../../../../assets/media-9.1.png'
import img50 from '../../../../../assets/media-10.1.png'
import img51 from '../../../../../assets/media-11.1.png'
import img52 from '../../../../../assets/media-12.1.png'
import img53 from '../../../../../assets/media-13.1.png'
import img54 from '../../../../../assets/media-14.1.png'
import img55 from '../../../../../assets/media-15.1.png'
import img56 from '../../../../../assets/media-16.1.png'
import img57 from '../../../../../assets/media-17.1.png'
import img58 from '../../../../../assets/media-18.1.png'
import img59 from '../../../../../assets/media-19.1.png'
import img60 from '../../../../../assets/media-20.1.png'
import img61 from '../../../../../assets/media-21.1.png'
import img62 from '../../../../../assets/media-22.1.png'
import img63 from '../../../../../assets/media-23.1.png'
import img64 from '../../../../../assets/media-24.1.png'
import img65 from '../../../../../assets/media-25.1.png'
import img66 from '../../../../../assets/media-26.1.png'
import img67 from '../../../../../assets/media-27.1.png'
import img68 from '../../../../../assets/media-3.1.jpg'
import img69 from '../../../../../assets/media-29.1.png'
import img70 from '../../../../../assets/media-30.1.png'
import img71 from '../../../../../assets/media-31.1.png'
import img72 from '../../../../../assets/media-32.1.png'
import img73 from '../../../../../assets/media-33.1.png'
import img74 from '../../../../../assets/media-34.1.png'
import img75 from '../../../../../assets/media-35.1.png'
import img76 from '../../../../../assets/media-36.1.png'
import img77 from '../../../../../assets/media-37.1.png'
import img78 from '../../../../../assets/media-38.1.png'
import img79 from '../../../../../assets/media-39.1.png'
import img80 from '../../../../../assets/media-40.1.png'

import Slider from "react-slick";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AllMedia = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] pt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Media</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
              <div>
                <PhotoProvider>
                  <PhotoView src={img41}>
                    <img src={img41} alt="" className="cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">India Today</p>
                <p className="text-justify">
                  India Today features Rishikesh Kumar's authored article on
                  Improving Children's Health amidst the pandemic
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img42}>
                    <img src={img42} alt="" className="cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">Times of India</p>
                <p className="text-justify">
                  eNERGIZE - National Level Online Athletic Fitness Championship
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img43}>
                    <img src={img43} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">The New Indian Express</p>
                <p className="text-justify">
                  Work-out from home is the new normal
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img44}>
                    <img src={img44} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">Money Control</p>
                <p className="text-justify">
                  Technology provoking Indians to stay fit amid Covid-19
                  lockdown
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img45}>
                    <img src={img45} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">ET Healthworld</p>
                <p className="text-justify">
                  India Today features Rishikesh Kumar's authored article on
                  Improving Children's Health amidst the pandemic
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img46}>
                    <img src={img46} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Newsd</p>
                <p className="text-justify">
                  National Level Online Fitness Athletic Championship expected
                  to witness more than 1,00,000 participants
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img47}>
                    <img src={img47} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Jhalak</p>
                <p className="text-justify">
                  News coverage dedicated to eNERGIZE
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img48}>
                    <img src={img48} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">News Patrolling</p>
                <p className="text-justify">
                  Xtraliving, Sports Authority of India and Directorate of
                  Sports and Youth services of Maharashtra join hands to host
                  eNERGIZE
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img49}>
                    <img src={img49} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">IANS Life</p>
                <p className="text-justify">
                  Xtraliving all set for National Level Online Fitness Athletic
                  Championship
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img50}>
                    <img src={img50} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Telangana Today</p>
                <p className="text-justify">X60 Crossfit in Headlines</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img51}>
                    <img src={img51} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Healthwire</p>
                <p className="text-justify">Boosting your immune system</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img52}>
                    <img src={img52} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">News Karnataka</p>
                <p className="text-justify">
                  Hunt for 'fastest girl in Maharashtra' begins
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img53}>
                    <img src={img53} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Edex Live</p>
                <p className="text-justify">
                  Go Girl Go campaign winners affiliate with Xtraliving as
                  ambassadors
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img54}>
                    <img src={img54} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">MSN</p>
                <p className="text-justify">
                  Maharashtra Government launches Go Girl Go Campaign
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img55}>
                    <img src={img55} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The New Indian Express</p>
                <p className="text-justify">
                  Why people feel depressed in winters?
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img56}>
                    <img src={img56} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The Sunday Standard</p>
                <p className="text-justify">
                  Crossing the path to fitness by X60 Crossfit
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img57}>
                    <img src={img57} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The News Now</p>
                <p className="text-justify">
                  Uddhav Thackeray gives thumbs up for Go Girl Go campaign
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img58}>
                    <img src={img58} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The Bridge</p>
                <p className="text-justify">
                  Maharashtra Govt launches campaign to raise women
                  participation
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img59}>
                    <img src={img59} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">IANS Life</p>
                <p className="text-justify">Crossfit for life</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img60}>
                    <img src={img60} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">India Today</p>
                <p className="text-justify">
                  Functional is the way for fitness
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img61}>
                    <img src={img61} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Outlook</p>
                <p className="text-justify">
                  How corporate life can cause hinderance in maintaining a
                  healthy lifestyle
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img62}>
                    <img src={img62} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Vanitha</p>
                <p className="text-justify">
                  New fitness trends in Hindi magazine
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img63}>
                    <img src={img63} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">This Week India</p>
                <p className="text-justify">
                  Xtraliving, first official Indian representative to
                  collaborate with Precision Nutrition
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img64}>
                    <img src={img64} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">APN News</p>
                <p className="text-justify">
                  Shri Uddhav Thackeray supports Go Girl Go Campaign
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img65}>
                    <img src={img65} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Hans India</p>
                <p className="text-justify">
                  Crossfit Games to Overcome Sadness
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img66}>
                    <img src={img66} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The Tribune</p>
                <p className="text-justify">
                  Rishikesh Kumar, Xtraliving founder and CEO headlines The
                  Tribune - motivates towards having a career in the fitness
                  industry
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img67}>
                    <img src={img67} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">iDiva</p>
                <p className="text-justify">
                  Inculcating healthy habits at home in Hindi
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img68}>
                    <img src={img68} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The New Indian Express</p>
                <p className="text-justify">
                  Xtraliving provides workout at home courses amid the pandemic
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img69}>
                    <img src={img69} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The New Indian Express</p>
                <p className="text-justify">
                  Xtraliving stepping up with their virtual/digital services
                  during COVID-19 lockdown
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img70}>
                    <img src={img70} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Socialnews.xyz</p>
                <p className="text-justify">
                  Xtraliving provides support for Olympics to women in strength
                  training, conditioning and nutrition
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img71}>
                    <img src={img71} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Enadu</p>
                <p className="text-justify">X60 Crossfit Games</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img72}>
                    <img src={img72} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Hyderabad Today</p>
                <p className="text-justify">X60 Crossfit in Headlines</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img73}>
                    <img src={img73} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Exchange 4 Media</p>
                <p className="text-justify">
                  Xtraliving smoothly shifts towards 'work-out from home'
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img74}>
                    <img src={img74} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Exchange 4 Media</p>
                <p className="text-justify">X60 Crossfit</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img75}>
                    <img src={img75} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Hans India</p>
                <p className="text-justify">X60 Crossfit games</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img76}>
                    <img src={img76} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">AndraJyothi</p>
                <p className="text-justify">
                  Crossfit games at X60 Crossfit studio
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img77}>
                    <img src={img77} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Sakshi</p>
                <p className="text-justify">X60 Crossfit Media Coverage</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img78}>
                    <img src={img78} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">PopXo</p>
                <p className="text-justify">Self-isolation tips in hindi</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img79}>
                    <img src={img79} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Sakshi</p>
                <p className="text-justify">X60 Media Coverage</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img80}>
                    <img src={img80} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">AndraPrabha</p>
                <p className="text-justify">Crossfit games</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMedia;
