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

  return (
    <main className=" relative text-center bg-black w-full h-screen flex items-center justify-center flex-col gap-3 text-[2rem] px-4">
      <ParticlesComponent/>
      <Link href="/" className="w-9/12 fixed left-4 top-10 text-left">
        <h1 className="text-white text-[1.3rem]">HOME</h1>
      </Link>
      <div className="absolute z-10 flex items-center justify-center flex-col gap-5 text-[2rem] px-4">
        <h1 className="welcome brightness-150">LEVEL 1</h1>
        <p className="text-white text-[1.5rem]">KNOW ABOUT ME</p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setShowModal(true)}
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
                className="fixed top-0 right-2 text-red-500"
              >
                X
              </button>
              <section className="">
                <h1 className="welcome brightness-150 lg:text-[3rem] text-[1.5rem]">
                  I&aposm Anthony Sá
                </h1>
              </section>
              <section className="flex items-center justify-center lg:flex-row flex-col gap-10 lg:px-20 px-10">
                <Image
                  src={bordaImagem}
                  alt="bordaImagem"
                  className="object-cover object-center w-[300px] lg:mt-0 mt-10"
                />
                <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-4/12 lg:px-10">
                  College student passionate about software development,
                  enrolled in Computer Engineering. I am constantly seeking
                  opportunities to learn, grow, and contribute, while applying
                  my curiosity and passion to tackle challenges in the world of
                  technology.
                </p>
              </section>
              <Link
                href="/skills"
                className="bg-[#402f5c]  text-black py-2 px-4 rounded-lg lg:text-[1.2rem] text-[.8rem] shadow hover:brightness-200 duration-300 my-10"
              >
                <h1 className="welcome brightness-200">NEXT LEVEL</h1>
              </Link>
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
