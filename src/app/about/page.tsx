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
        <p className="text-white text-[1.5rem]">Sobre mim</p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              setShowModal(true);
              setMode(-1);
            }}
            className="bg-[#402f5c]  text-black py-4 px-6 rounded-lg lg:text-[2rem] text-[1rem] shadow hover:brightness-200 duration-300"
          >
            <h1 className="welcome brightness-200">começar</h1>
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
                  Eu sou o Anthony Sá
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
                    <h1 className="text-center">Selecionar dificuldade</h1>
                    <div className="flex flex-col itens-center justify-center ">
                      <button
                        onClick={() => setMode(0)}
                        className="bg-[#402f5c] w-[140px] sm:w-[230px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                      >
                        <h1 className="welcome brightness-200">fácil</h1>
                      </button>
                      <button
                        onClick={() => setMode(1)}
                        className="bg-[#402f5c] w-[140px] sm:w-[230px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                      >
                        <h1 className="welcome brightness-200">normal</h1>
                      </button>
                      <button
                        onClick={() => setMode(2)}
                        className="bg-[#402f5c] w-[140px] sm:w-[230px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                      >
                        <h1 className="welcome brightness-200">difícil</h1>
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
                      <h1 className="welcome brightness-200">
                        Mudar dificuldade
                      </h1>
                    </button>

                    <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-5/12 lg:px-10 slide-about bg-black bg-opacity-40 px-2 py-4 rounded">
                      Desenvolvedor Web apaixonado por desenvolvimento de
                      software, matriculado em Engenharia da Computação. Estou
                      constantemente buscando oportunidades de aprender, crescer
                      e contribuir, enquanto aplicando minha curiosidade e
                      paixão para enfrentar desafios em o mundo da tecnologia.
                    </p>
                  </>
                )}
                {mode === 1 && (
                  <>
                    <button
                      onClick={() => setMode(-1)}
                      className="bg-[#402f5c]  text-black py-2 px-4 rounded-lg lg:text-[1.2rem] text-[.8rem] shadow hover:brightness-200 duration-300"
                    >
                      <h1 className="welcome brightness-200">
                        mudar dificuldade
                      </h1>
                    </button>
                    <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-5/12 lg:px-10 slide-about bg-black bg-opacity-40 px-2 py-4 rounded">
                      Desenvolvedor web apaixonado por desenvolvimento de
                      software, atualmente cursando Engenharia da Computação.
                      Ansioso para aprender, crescer e contribuir no mundo
                      dinâmico da tecnologia. EU possuo conhecimento avançado em
                      ReactJS, um ano de experiência com React Native, e estou
                      no caminho para me tornar um desenvolvedor full-stack com
                      .NET, uma tecnologia que descobri e me apaixonei durante
                      meus anos de faculdade. Eu adquiri experiência prática na
                      Nobilis Marketing, trabalhando em projetos de
                      desenvolvimento web. Além disso, eu uso .NET em meus
                      projetos acadêmicos, criando APIs e aplicações Windows.
                      Estou animado para aplicar minhas habilidades e contribuir
                      para a área de desenvolvimento de software
                    </p>
                  </>
                )}
                {mode === 2 && (
                  <>
                    <button
                      onClick={() => setMode(-1)}
                      className="bg-[#402f5c]  text-black py-2 px-4 rounded-lg lg:text-[1.2rem] text-[.8rem] shadow hover:brightness-200 duration-300"
                    >
                      <h1 className="welcome brightness-200">
                        mudar dificuldade
                      </h1>
                    </button>

                    <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-5/12 lg:px-10 slide-about bg-black bg-opacity-40 px-2 py-4 rounded">
                      Desenvolvedor Web apaixonado por desenvolvimento de
                      software, atualmente cursando Engenharia de Computação. Eu
                      sou dedicado ao aprendizado contínuo, buscando
                      oportunidades para crescer e contribuir enquanto aplico
                      minha curiosidade e paixão por superar desafios em um
                      campo em constante evolução de tecnologia. Além de minhas
                      atividades acadêmicas, possuo experiência prática do meu
                      tempo na Nobilis Marketing, onde atuei em projetos de
                      desenvolvimento web. Esta experiência prática aprimorou
                      minhas habilidades e me forneceu informações valiosas
                      sobre o mundo real aplicação de princípios de
                      desenvolvimento de software. Minha jornada em
                      desenvolvimento foi marcado por um foco em ReactJS, com
                      proficiência avançada e um ano de estudo dedicado em React
                      Native. Também estou no processo de expandir meu conjunto
                      de habilidades para se tornar um desenvolvedor full-stack
                      com .NET, um tecnologia que conheci durante meus estudos
                      universitários. Neste ambiente acadêmico, uso ativamente o
                      .NET para criar APIs e aplicações Windows, aprofundando
                      ainda mais minha compreensão e aplicação desta poderosa
                      tecnologia. Estou animado com a perspectiva de combinar
                      minha experiência acadêmica conhecimento e experiência
                      prática para contribuir significativamente para o campo de
                      desenvolvimento de software
                    </p>
                  </>
                )}
              </section>
              {mode >= 0 && (
                <Link
                  href="/skills"
                  className="bg-[#402f5c]  text-black py-2 px-4 rounded-lg lg:text-[1.2rem] text-[.8rem] shadow hover:brightness-200 duration-300 my-10"
                >
                  <h1 className="welcome brightness-200">Proxímo nível</h1>
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
