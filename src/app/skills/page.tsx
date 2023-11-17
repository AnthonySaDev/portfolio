"use client";
import { useState, useRef } from "react";
import chao from "../../../public/images/chao.png";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Image from "next/image";
import return1 from "../../../public/images/return1.png";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import bordaSkills from "../../../public/images/bordaSkills.png";
import back from "../../../public/images/back.png";
import next from "../../../public/images/next.png";
import { FaReact, FaDatabase, FaStar } from "react-icons/fa";
import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandCSharp,
} from "react-icons/tb";
import { DiDotnet } from "react-icons/di";
import { TbBrandDingtalk, TbBrandMongodb } from "react-icons/tb";
import { FcWorkflow } from "react-icons/fc";
import { PiLampFill, PiBooksFill, PiMaskHappyLight } from "react-icons/pi";
import { ParticlesComponent } from "@/Particles/particles";

export default function Skills() {
  const [showModal, setShowModal] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState(false);

  return (
    <main className=" relative text-center bg-black w-full h-screen flex items-center justify-center flex-col gap-3 text-[2rem] px-4">
      <ParticlesComponent />

      <Link href="/about" className="w-9/12 fixed left-0 top-10">
        <Image
          src={return1}
          alt="return1"
          className="sm:w-[200px] w-[150px] "
        />
      </Link>
      <div className="absolute z-10 flex items-center justify-center flex-col gap-5 text-[2rem] px-4">
        <h1 className="welcome brightness-150">LEVEL 2</h1>
        <p className="text-white text-[1.5rem]">EXPLORE MY SKILLS</p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#402f5c]  text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300"
          >
            <h1 className="welcome brightness-200">START</h1>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="bg-gradient-to-t from-pink-400 to-[#9439b5] fixed inset-0 z-20 flex items-center justify-around modal">
          <button
            onClick={() => setShowModal(false)}
            className="fixed top-0 right-2 text-red-500"
          >
            X
          </button>
          <div className="w-full flex itens-center justify-center">
            <div className="z-30  absolute left-1/2 -translate-x-1/2 flex items-center justify-around flex-col h-full w-full  top-0">
              <h1 className="welcome brightness-150 sm:text-[3rem] text-[1.5rem]  sm:my-10">
                CHARACTER SKILLS
              </h1>
              <>
                <Swiper
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  slidesPerView={1}
                  onInit={() => setInit(true)}
                  modules={[Navigation]}
                  className=" h-fit sm:h-[500px] lg:w-5/12 w-9/12 flex itens-center justify-center "
                >
                  <SwiperSlide className="flex itens-center justify-center">
                    <Image
                      src={bordaSkills}
                      alt="bordaSkills"
                      className="object-fill sm:h-full h-[200px] w-full sm:relative sm:top-0 sm:left-0 sm:-translate-x-0 sm:-translate-y-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="w-full sm:h-full h-[200px] absolute sm:top-0 top-1 flex flex-row itens-center justify-center sm:divide-x-8 divide-x divide-black  sm:text-[1.2rem] text-[.5rem] sm:leading-10">
                      <section className="text-left flex flex-col itens-center justify-center lg:gap-5 gap-3 w-1/2 pl-4 lg:pl-10">
                        <div className="flex items-center gap-4">
                          <FaReact color="blue" />
                          <h1>ReactJS</h1>
                        </div>
                        <div className="flex items-center gap-4 pr-2">
                          <TbBrandReactNative color="blue" />
                          <h1>React Native</h1>
                        </div>
                        <div className="flex items-center gap-4">
                          <TbBrandNextjs />
                          <h1>NextJs</h1>
                        </div>
                        <div className="flex items-center gap-4">
                          <TbBrandCSharp color="blue" />
                          <h1>CSHARP</h1>
                        </div>
                        <div className="flex items-center gap-4">
                          <DiDotnet color="purple" />
                          <h1>.NET</h1>
                        </div>
                        <div className="flex items-center gap-4">
                          <FaDatabase color="green" />
                          <h1>DATABASE</h1>
                        </div>
                      </section>
                      <section className="lg:px-20 text-left flex flex-col itens-center justify-center gap-4 lg:gap-8 px-2 w-1/2">
                        <h1>theses skills are constantly being upgraded</h1>
                        <h1 className="text-purple-600">
                          TIP: INCREASE SKILLS WITH CONSTANT LEARNING
                        </h1>
                      </section>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex itens-center justify-center">
                    <Image
                      src={bordaSkills}
                      alt="bordaSkills"
                      className="object-fill sm:h-full h-[200px] w-full"
                    />
                    <div className="w-full sm:h-full h-[200px] absolute sm:top-0 top-1 flex flex-row itens-center justify-center sm:divide-x-8 divide-x divide-black sm:text-[1.1rem] text-[.5rem] sm:leading-10">
                      <section className="text-left flex flex-col itens-center justify-center lg:gap-5 gap-3 w-1/2 pl-4  lg:pl-10">
                        <div className="flex items-center gap-1">
                          <FcWorkflow />
                          <h1>Teamwork</h1>
                        </div>
                        <div className="flex items-center gap-1">
                          <TbBrandDingtalk />
                          <h1>Communication</h1>
                        </div>
                        <div className="flex items-center gap-1">
                          <PiLampFill color="yellow" />
                          <h1>Proactivity</h1>
                        </div>
                        <div className="flex items-center gap-1">
                          <PiBooksFill color="brown" />
                          <h1>Commitment</h1>
                        </div>
                        <div className="flex items-center gap-1">
                          <PiMaskHappyLight color="red" />
                          <h1>Enthusiasm</h1>
                        </div>
                        <div className="flex items-center gap-1">
                          <TbBrandMongodb color="green" />
                          <h1>Adaptability</h1>
                        </div>
                      </section>
                      <section className="lg:px-20 text-left flex flex-col itens-center justify-center gap-4 md:gap-8 px-2 w-1/2">
                        <h1>
                          Highly necessary skills for advancing in one&aposs career.
                        </h1>
                        <h1 className="text-purple-600">
                          TIP: Always be humble and sociable.
                        </h1>
                      </section>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex itens-center justify-center">
                    <div className="w-full h-full absolute top-0 flex flex-col itens-center bg-[#402f5c] bg-opacity-70 shadow sm:p-8 rounded-lg justify-center sm:text-[1.9rem] text-[1.1rem]">
                      <section className="text-center flex flex-col itens-center justify-center">
                        <h1 className="welcome brightness-150">
                          LEVEl CLEARED
                        </h1>
                        <div className="flex items-center gap-4 justify-center">
                          <FaStar color="yellow" />
                          <FaStar color="yellow" />
                          <FaStar color="yellow" />
                          <FaStar color="yellow" />
                          <FaStar color="yellow" />
                        </div>
                      </section>
                      <Link
                        href="/projects"
                        className="bg-[#402f5c] w-fit mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 my-10"
                      >
                        <h1 className="welcome brightness-200">NEXT LEVEL</h1>
                      </Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </>
              <div></div>
              <button
                ref={prevRef}
                className="cursor-pointer absolute top-1/2  sm:left-10 left-0 z-10"
              >
                <Image
                  src={back}
                  alt="back"
                  className="lg:w-[80px] sm:w-[40px] w-[25px]"
                />
              </button>
              <button
                ref={nextRef}
                className="cursor-pointer absolute top-1/2  sm:right-10 right-0 z-10"
              >
                <Image
                  src={next}
                  alt="next"
                  className="lg:w-[80px] sm:w-[40px] w-[25px]"
                />
              </button>

              <Image
                src={chao}
                alt="chao"
                className="w-full fixed bottom-0 sm:object-fill object-cover sm:h-[100px] "
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
