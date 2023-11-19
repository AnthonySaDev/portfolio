"use client";
import { useState, useEffect } from "react";
import chao from "../../../public/images/chao.png";
import bordaImagem from "../../../public/images/bordaImagem.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import return2 from "../../../public/images/return2.png";
import { ParticlesComponent } from "@/Particles/particles";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className=" relative text-center bg-black w-full h-screen flex items-center justify-center flex-col gap-3 text-[2rem] px-4">
      <ParticlesComponent />
      <Link href="/skills" className="w-9/12 fixed left-0 top-10">
        <Image
          src={return2}
          alt="return2"
          className="sm:w-[200px] w-[150px] "
        />
      </Link>
      <div className="absolute z-10 flex items-center justify-center flex-col gap-5 text-[2rem] px-4">
        <h1 className="welcome brightness-150">LEVEL 3</h1>
        <p className="text-white text-[1.5rem]">EXPLORE MY PROJECTS</p>
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
        <div className="bg-gradient-to-t from-pink-400 to-[#9439b5] fixed inset-0 z-20 flex items-center justify-center gap-5 flex-col modal text-white overflow-y-auto">
          <button
            onClick={() => setShowModal(false)}
            className="fixed top-0 right-2 text-red-500"
          >
            X
          </button>
          <h1 className="sm:text-[1.9rem] text-[1rem]">
            To explore my codes, we{"'"}ll need to make a style change. We{"'"}ll step
            away from 8-bit for a while (but I promise it will come back, haha).
          </h1>
          <h1 className="sm:text-[1.9rem] text-[1rem]">
            Are you ready?.
          </h1>
          <Link
            href="/projects/future"
            className="bg-[#402f5c] w-fit mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 my-10"
          >
            <h1 className="welcome brightness-200 animate-pulse">LET{"'"}S GO</h1>
          </Link>{" "}
        </div>
      )}
    </main>
  );
}
