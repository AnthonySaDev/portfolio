"use client";
import { useState } from "react";
import chao from "../../../public/images/chao.png";
import bordaImagem from "../../../public/images/bordaImagem.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ParticlesComponent } from "@/Particles/particles";

export default function About() {
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState(-1);

  return (
    <main className=" relative text-center bg-black w-full h-screen flex items-center justify-center flex-col gap-3 text-[2rem] px-4">
      <ParticlesComponent />
      <Link href="/" className="w-9/12 fixed left-4 top-10 text-left">
        <h1 className="text-white text-[1.3rem]">HOME</h1>
      </Link>
      <div className="absolute z-10 flex items-center justify-center flex-col gap-5 text-[2rem] px-4">
        <h1 className="welcome brightness-150">LEVEL 1</h1>
        <p className="text-white text-[1.5rem]">KNOW ABOUT ME</p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => 
              {setShowModal(true) 
              setMode(-1)}}
            className="bg-[#402f5c]  text-black py-4 px-6 rounded-lg lg:text-[2rem] text-[1rem] shadow hover:brightness-200 duration-300"
          >
            <h1 className="welcome brightness-200">START</h1>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="bg-gradient-to-t from-pink-400 to-[#9439b5] fixed inset-0 z-20 flex items-center justify-center modal">
          <div className="w-full ">
            <div className="z-10  h-full top-0 fixed"></div>
            <div className="z-30 absolute flex items-center justify-between flex-col pt-20 h-full w-full top-0">
              <button
                onClick={() => setShowModal(false)}
                className="fixed top-0 right-5 text-red-500"
              >
                X
              </button>
              <section className="">
                <h1 className="welcome brightness-150 lg:text-[3rem] text-[1.5rem]">
                  I{"'"}m Anthony Sá
                </h1>
              </section>
              <section className="flex items-center justify-center flex-col gap-5 lg:px-20 px-10 text-left">
                <Image
                  src={bordaImagem}
                  alt="bordaImagem"
                  className="object-contain w-[250px] lg:mt-0 mt-10"
                />
                {mode < 0 && (
                  <section className="flex flex-col gap-2 text-white">
                    <h1 className="text-center">select difficulty</h1>
                    <div className="flex flex-col itens-center justify-center ">
                      <button
                        onClick={() => setMode(0)}
                        className="bg-[#402f5c] w-[120px] sm:w-[200px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                      >
                        <h1 className="welcome brightness-200">easy</h1>
                      </button>
                      <button
                        onClick={() => setMode(1)}
                        className="bg-[#402f5c] w-[120px] sm:w-[200px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                      >
                        <h1 className="welcome brightness-200">normal</h1>
                      </button>
                      <button
                        onClick={() => setMode(2)}
                        className="bg-[#402f5c] w-[120px] sm:w-[200px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                      >
                        <h1 className="welcome brightness-200">hard</h1>
                      </button>
                    </div>
                  </section>
                )}

                {mode === 0 && (
                  <>
                        <button
                        onClick={() => setMode(-1)}
                        className="bg-[#402f5c]  text-black py-2 px-4 rounded-lg lg:text-[1.2rem] text-[.8rem] shadow hover:brightness-200 duration-300"
                        >
                        <h1 className="welcome brightness-200">change difficulty</h1>
                      </button>

                    <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-5/12 lg:px-10 slide-about bg-black bg-opacity-40 px-2 py-4 rounded">
                      College student passionate about software development,
                      enrolled in Computer Engineering. I am constantly seeking
                      opportunities to learn, grow, and contribute, while
                      applying my curiosity and passion to tackle challenges in
                      the world of technology.
                    </p>
                  </>
                )}
                {mode === 1 && (
                  <>
                        <button
                        onClick={() => setMode(-1)}
                        className="bg-[#402f5c]  text-black py-2 px-4 rounded-lg lg:text-[1.2rem] text-[.8rem] shadow hover:brightness-200 duration-300"
                        >
                        <h1 className="welcome brightness-200">change difficulty</h1>
                      </button>
                      <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-5/12 lg:px-10 slide-about bg-black bg-opacity-40 px-2 py-4 rounded">
                      College student passionate about software development,
                      currently studying Computer Engineering. Eager to learn,
                      grow, and contribute in the dynamic world of technology. I
                      have advanced knowledge in ReactJS, a year of experience
                      with React Native, and I{"'"}m on the path to becoming a
                      full-stack developer with .NET, a technology I discovered
                      and fell in love with during my college years. I{"'"}ve also
                      gained practical experience at Nobilis Marketing, working
                      on web development projects. Additionally, I use .NET in
                      my academic projects, creating APIs and Windows
                      applications. Excited to apply my skills and contribute to
                      the field of software development
                    </p>
                  </>
                )}
                {mode === 2 && (
                  <>
                         <button
                        onClick={() => setMode(-1)}
                        className="bg-[#402f5c]  text-black py-2 px-4 rounded-lg lg:text-[1.2rem] text-[.8rem] shadow hover:brightness-200 duration-300"
                        >
                        <h1 className="welcome brightness-200">change difficulty</h1>
                      </button>

                      <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-5/12 lg:px-10 slide-about bg-black bg-opacity-40 px-2 py-4 rounded">
                      College student passionate about software development,
                      currently pursuing a degree in Computer Engineering. I am
                      dedicated to continuous learning, seeking opportunities to
                      grow and contribute while applying my curiosity and
                      passion to overcome challenges in the ever-evolving field
                      of technology. In addition to my academic pursuits, I
                      bring practical experience from my time at Nobilis
                      Marketing, where I worked on web development projects.
                      This hands-on experience has enhanced my skills and
                      provided me with valuable insights into the real-world
                      application of software development principles. My journey
                      into development has been marked by a focus on ReactJS,
                      with advanced proficiency, and a year of dedicated study
                      in React Native. I am also in the process of expanding my
                      skill set to become a full-stack developer with .NET, a
                      technology I was introduced to during my college studies.
                      In this academic setting, I actively use .NET to create
                      APIs and Windows applications, further deepening my
                      understanding and application of this powerful technology.
                      I am excited about the prospect of combining my academic
                      knowledge and practical experience to contribute
                      meaningfully to the field of software development
                    </p>
                  </>
                )}
              </section>
              {mode >= 0 && (
                <Link
                  href="/skills"
                  className="bg-[#402f5c]  text-black py-2 px-4 rounded-lg lg:text-[1.2rem] text-[.8rem] shadow hover:brightness-200 duration-300 my-10"
                >
                  <h1 className="welcome brightness-200">NEXT LEVEL</h1>
                </Link>
              )}
              <Image
                src={chao}
                alt="chao"
                className="w-full object-fill  h-1/4"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
