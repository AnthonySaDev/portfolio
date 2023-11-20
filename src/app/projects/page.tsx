"use client";
import { useState } from "react";
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
        <p className="text-white text-[1.5rem]">EXPLORE Meus projetos</p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#402f5c]  text-black py-4 px-6 rounded-lg lg:text-[2rem] text-[1rem] shadow hover:brightness-200 duration-300"
          >
            <h1 className="welcome brightness-200">começar</h1>
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
          <h1 className="sm:text-[1.9rem] text-[1rem] px-10">
          Para explorar meus projetos, precisaremos fazer uma mudança de estilo. Nós vamos nos afastar do estilo 8 bits por um tempo (mas prometo que vamos voltar, haha).
          </h1>
          <h1 className="sm:text-[1.9rem] text-[1rem]">
            Você está pronto?
          </h1>
          <Link
            href="/projects/future"
            className="bg-[#402f5c] w-fit mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 my-10"
          >
            <h1 className="welcome brightness-200 animate-pulse">JOGAR</h1>
          </Link>{" "}
        </div>
      )}
    </main>
  );
}
