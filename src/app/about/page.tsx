"use client";
import { useState } from "react";
import chao from "../../../public/images/chao.png";
import bordaImagem from "../../../public/images/bordaImagem.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ParticlesComponent } from "@/Particles/particles";
import { Button } from "@/components/Button/Button";
import { RedirectButton } from "@/components/RedirectButton/RedirectButton";

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
          <Button
            title="Começar"
            className="bg-[#402f5c] text-black py-4 px-6 rounded-lg lg:text-[2rem] text-[1rem] shadow hover:brightness-200 duration-300"
            onClick={() => {
              setShowModal(true);
              setMode(-1);
            }}
          />
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
                <h1 className="welcome brightness-150 lg:text-[3rem] text-[1.2rem]">
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
                      <Button
                        className="bg-[#402f5c] w-[140px] sm:w-[230px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                        title="Fácil"
                        onClick={() => setMode(0)}
                      />
                      <Button
                        className="bg-[#402f5c] w-[140px] sm:w-[230px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                        title="Normal"
                        onClick={() => setMode(1)}
                      />
                      <Button
                        className="bg-[#402f5c] w-[140px] sm:w-[230px] mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 text-white"
                        title="Difícil"
                        onClick={() => setMode(2)}
                      />
                    </div>
                  </section>
                )}

                {mode === 0 && (
                  <>
                    <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-5/12 lg:px-10 slide-about bg-black bg-opacity-25 px-2 py-4 rounded">
                      Um jovem desenvolvedor apaixonado por criar software e
                      atualmente matriculado em Engenharia da Computação 🚀.
                      <br></br>
                      Estou constantemente em busca de oportunidades para
                      aprender, crescer e contribuir, aplicando minha
                      curiosidade e paixão para superar desafios no vasto mundo
                      da tecnologia 🔎.
                    </p>
                  </>
                )}
                {mode === 1 && (
                  <>
                    <p className="text-white text-[1rem] lg:w-6/12 lg:px-10 slide-about bg-black bg-opacity-25 px-2 py-4 rounded">
                      Desenvolvedor web apaixonado por 💻 desenvolvimento de
                      software, atualmente cursando Engenharia da Computação 🚀.
                      Ansioso para aprender, crescer e contribuir no mundo
                      dinâmico da tecnologia 🌐.<br></br>
                      Eu possuo conhecimento avançado em ReactJS ⚛️, um ano de
                      experiência com React Native 📱, e estou me tornando um
                      desenvolvedor full-stack com Java ☕, uma tecnologia que
                      descobri e me apaixonei durante meus anos de faculdade.{" "}
                      <br></br>Eu adquiri experiência prática na Nobilis
                      Marketing, trabalhando em projetos de desenvolvimento web.
                      Além disso, eu uso Java e Kotlin em meus projetos
                      acadêmicos, criando APIs e aplicações android. Estou
                      animado para aplicar minhas habilidades e contribuir para
                      a área de desenvolvimento de software. 🚀
                    </p>
                  </>
                )}
                {mode === 2 && (
                  <>
                    <p className="text-white lg:text-[1.2rem] text-[1rem] lg:w-7/12 lg:px-10 slide-about bg-black bg-opacity-25 px-2 py-4 rounded">
                      Desenvolvedor Web apaixonado por 💻 desenvolvimento de
                      software, atualmente cursando Engenharia de Computação 🚀.
                      Eu sou dedicado ao aprendizado contínuo, buscando
                      oportunidades para crescer e contribuir enquanto aplico
                      minha curiosidade e paixão por superar desafios em um
                      campo em constante evolução de tecnologia. Além de minhas
                      atividades acadêmicas, possuo experiência prática do meu
                      tempo na Nobilis Marketing, onde atuei em projetos de
                      desenvolvimento web. Esta experiência prática aprimorou
                      minhas habilidades e me forneceu informações valiosas
                      sobre a aplicação real de princípios de desenvolvimento de
                      software. Minha jornada em desenvolvimento foi marcada por
                      um foco em ReactJS ⚛️, com proficiência avançada e um ano
                      de estudo dedicado em React Native 📱. Também estou no
                      processo de expandir meu conjunto de habilidades para me
                      tornar um desenvolvedor full-stack com Java, uma
                      tecnologia que conheci durante meus estudos
                      universitários. Neste ambiente acadêmico, uso ativamente o
                      Java para criar APIs 🚀 e aplicações Android, aprofundando
                      ainda mais minha compreensão e aplicação desta poderosa
                      tecnologia. Estou animado com a perspectiva de combinar
                      minha experiência acadêmica, conhecimento e experiência
                      prática para contribuir significativamente para o campo de
                      desenvolvimento de software. 🚀
                    </p>
                  </>
                )}
              </section>
              {mode >= 0 && (
                <div className="flex md:flex-row flex-col items-center justify-center mt-10 gap-10">
                  <RedirectButton
                    href="/skills"
                    title="Próximo nível"
                    className="bg-[#402f5c]  text-black text-[1rem] py-4 px-7 rounded-lg shadow hover:brightness-200 duration-300"
                  />
                  <Button
                    title="Trocar Dificuldade"
                    onClick={() => setMode(-1)}
                    className="bg-[#402f5c]  text-black text-[.8rem] py-4 px-6 rounded-lg shadow hover:brightness-200 duration-300"
                  />
                </div>
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
