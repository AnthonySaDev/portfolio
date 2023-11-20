"use client";
import React from "react";
import Link from "next/link";
import { ParticlesComponent } from "@/Particles/particles";

export default function Finish() {
  return (
    <main className=" relative text-center bg-black w-full h-[110vh] sm:h-screen flex items-center justify-center flex-col gap-3 text-[2rem] px-4">
      <ParticlesComponent />

      <div className="absolute z-10 flex items-center justify-center flex-col gap-5 text-[1.2rem] sm:text-[1.6rem] px-4">
        <h1 className="welcome brightness-150">parabéns</h1>
        <p className="text-white text-[1.1rem] sm:text-[1.6rem]">
          Você concluiu todas as fases até o momento... 🚀🚀
        </p>
        <p className="text-white text-[1.1rem] sm:text-[1.6rem]">
          você pode voltar para qualquer nível que quiser
        </p>
        <p className="text-white text-[1.1rem] sm:text-[1.6rem]">
          ou entre em contato comigo para trabalharmos ou talvez possamos tomar um pouco de café e discutir sobre mais jogos🚀🚀
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="https://wa.me/5538999337788?text=Olá,%20vim%20pelo%20site%20portfolio%20e%20gostaria%20de%20conversar:%20"
            className="bg-[#402f5c]  text-black py-4 px-6 rounded-lg lg:text-[2rem] text-[1rem] shadow hover:brightness-200 duration-300"
          >
            <h1 className="welcome brightness-200">Entrar em contato</h1>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-left gap-5 sm:gap-10 my-5">
          <Link href={"/"} className="">
            <h1 className="text-white text-[.8rem] sm:text-[1.5rem] ">HOME</h1>
          </Link>
          <Link href={"/about"} className="">
            <h1 className="text-white text-[.75rem] sm:text-[1.5rem]">
              level 1
            </h1>
          </Link>
          <Link href={"/skills"} className="">
            <h1 className="text-white text-[.75rem] sm:text-[1.5rem]">
              level 2
            </h1>
          </Link>
          <Link href={"/projects"} className="">
            <h1 className="text-white text-[.75rem] sm:text-[1.5rem]">
              level 3
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
