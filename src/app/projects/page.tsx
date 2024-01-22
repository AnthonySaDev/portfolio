"use client";
import { useState } from "react";
import Image from "next/image";
import return2 from "../../../public/images/return2.png";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { FaMobile } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { ParticlesComponent } from "@/Particles/particles";
import { Web } from "@/projectsScreens/Web/Web";
import { Mobile } from "@/projectsScreens/Mobile/Mobile";

type modality = {
  name: string | null;
};
export default function Skills() {
  const [showModal, setShowModal] = useState(false);
  const [showModality, setShowModality] = useState<modality>({ name: null });

  return (
    <main className="relative text-center bg-black w-full h-screen flex items-center justify-center flex-col gap-3 text-[2rem] px-4">
      <ParticlesComponent />

      <Link href="/skills" className="w-9/12 fixed left-0 top-10">
        <Image
          src={return2}
          alt="return2"
          className="sm:w-[200px] w-[150px] "
        />
      </Link>
      {showModality.name === null && (
        <div className="absolute z-10 flex items-center justify-center flex-col gap-5 text-[2rem] px-4">
          <h1 className="welcome brightness-150">LEVEL 3</h1>
          <p className="text-white text-[1.5rem]">EXPLORE MEUS PROJETOS</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setShowModal(!showModal)}
              className="bg-[#402f5c]  text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300"
            >
              <h1 className="welcome brightness-200">Começar</h1>
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="bg-gradient-to-t from-pink-800 to-[#9439b5] fixed inset-0 z-20 flex flex-col items-center justify-center gap-20 modal">
          <button
            onClick={() => setShowModal(!showModal)}
            className="fixed top-0 right-2 text-red-500 z-50"
          >
            X
          </button>
          <h1 className="welcome brightness-150 text-center md:text-[2rem] text-xl">
            Selecione a modalidade:
          </h1>
          <section className="flex md:flex-row flex-col items-center justify-center gap-5 mt-10 ">
            <button
              className="flex flex-col items-center justify-center gap-4 bg-zinc-200 bg-opacity-50 rounded w-[250px] py-4"
              onClick={() => setShowModality({ name: "Mobile" })}
            >
              <p className="md:text-[2rem] text-xl">Mobile</p>
              <FaMobile className="text-[5rem] text-blue-900" />
            </button>
            <button
              className="flex flex-col items-center justify-center gap-4 bg-zinc-200 bg-opacity-50 rounded w-[250px] py-4"
              onClick={() => setShowModality({ name: "Web" })}
            >
              <p className="md:text-[2rem] text-xl">Web</p>
              <RiComputerFill className="text-[5rem] text-zinc-600" />
            </button>
          </section>
        </div>
      )}
      {showModality?.name === "Mobile" && (
        <Mobile
          onClick={() => {
            setShowModality({ name: null });
          }}
        />
      )}
      {showModality?.name === "Web" && (
        <Web
          onClick={() => {
            setShowModality({ name: null });
          }}
        />
      )}
    </main>
  );
}
