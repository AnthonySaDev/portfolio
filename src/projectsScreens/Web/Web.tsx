import Project from "@/components/ProjectWeb/ProjectWeb";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bordaSkills from "../../../public/images/bordaSkills.png";
import back from "../../../public/images/back.png";
import next from "../../../public/images/next.png";
import typegame from "../../../public/images/type.png";
import starship from "../../../public/images/starship.png";
import impresilk from "../../../public/images/impresilk.png";
import larDasVelhinhas from "../../../public/images/larDasVelhinhas.png";
import chao from "../../../public/images/chao.png";
import chamados from "../../../public/images/chamados.png";
import pizzaria from "../../../public/images/pizzaria.png";
import { RedirectButton } from "@/components/RedirectButton/RedirectButton";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface CloseProps {
  onClick: () => void;
}
export function Web({
  onClick,
}: CloseProps) {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState(false);

  return (
    <div className="bg-gradient-to-t from-pink-400 to-[#9439b5] fixed inset-0 z-20 flex items-center justify-around modal">
      <button
        onClick={onClick}
        className="fixed top-0 right-2 text-red-500 z-50"
      >
        X
      </button>
      <div className="w-full flex items-center justify-center ">
        <div className="z-30  absolute left-1/2 -translate-x-1/2 flex items-center justify-around flex-col h-full w-full  top-0">
          <h1 className="welcome brightness-150 sm:text-[3rem] text-[1.5rem]  sm:my-10">
            projetos do personagem
          </h1>
          <>
            <Swiper
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              slidesPerView={1}
              onInit={() => {
                setInit(true);
              }}
              modules={[Navigation]}
              className=" sm:h-[400px] h-[200px] lg:w-5/12 w-9/12 flex items-center justify-center"
              onSlideChange={(swiper) => {
                setDisabledPrev(swiper.activeIndex === 0);
                setDisabledNext(swiper.activeIndex === 6);
              }}
            >
                            <SwiperSlide className="flex items-center justify-center">
                <Image
                  src={bordaSkills}
                  alt="bordaSkills"
                  className="object-fill sm:h-[400px] h-[200px] w-full sm:relative sm:top-0 sm:left-0 sm:-translate-x-0 sm:-translate-y-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Project
                  title="Lar das Velhinhas"
                  image={larDasVelhinhas}
                  description="Explore o site dedicado a apoiar uma ONG que presta
        assistência a idosos."
                  link="https://lardasvelhinhas.com.br/"
                />
              </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <Image
                  src={bordaSkills}
                  alt="bordaSkills"
                  className="object-fill sm:h-[400px] h-[200px] w-full sm:relative sm:top-0 sm:left-0 sm:-translate-x-0 sm:-translate-y-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Project
                  title="Lar das Velhinhas"
                  image={starship}
                  description="Solução proposta para o desafio de criar um sistema delivery intergalático."
                  link="https://starship-delivery.vercel.app/"
                />
              </SwiperSlide>
 
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src={bordaSkills}
                  alt="bordaSkills"
                  className="object-fill sm:h-[400px] h-[200px] w-full sm:relative sm:top-0 sm:left-0 sm:-translate-x-0 sm:-translate-y-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Project
                  title="Lar das Velhinhas"
                  image={typegame}
                  description="Jogo de digitação para treinar e aprimorar sua velocidade no teclado"
                  link="https://type-game-adventure.vercel.app/"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src={bordaSkills}
                  alt="bordaSkills"
                  className="object-fill sm:h-full h-[200px] w-full sm:relative sm:top-0 sm:left-0 sm:-translate-x-0 sm:-translate-y-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Project
                  description="Site de vendas: produtos para sublimação, acrílicos e
                          mais."
                  image={impresilk}
                  link="https://impresilk.com.br"
                  title="impresilk"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src={bordaSkills}
                  alt="bordaSkills"
                  className="object-fill sm:h-full h-[200px] w-full sm:relative sm:top-0 sm:left-0 sm:-translate-x-0 sm:-translate-y-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Project
                  description=" Sistema fullStack de gerenciamento de
                          estabelecimentos."
                  image={pizzaria}
                  link="https://github.com/AnthonySaDev/ProjetoPizzaria"
                  title="pizzaria"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src={bordaSkills}
                  alt="bordaSkills"
                  className="object-fill sm:h-full h-[200px] w-full sm:relative sm:top-0 sm:left-0 sm:-translate-x-0 sm:-translate-y-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Project
                  description=" Sistema de gerenciamento de chamados para um
                          escritório de contabilidade."
                  image={chamados}
                  title="chamados"
                  link="https://github.com/AnthonySaDev/SistemaChamados"
                />
              </SwiperSlide>

              <SwiperSlide className="flex items-center justify-center">
                <div className="w-full h-full absolute top-0 flex flex-col items-center bg-[#402f5c] bg-opacity-70 shadow sm:p-8 rounded-lg justify-center sm:text-[1.9rem] text-[1.1rem]">
                  <section className="text-center flex flex-col items-center justify-center">
                    <h1 className="welcome brightness-150">Nível concluído</h1>
                    <div className="flex items-center gap-4 justify-center">
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                    </div>
                  </section>
                  <RedirectButton
                    href="/finish"
                    title="Próximo nível"
                    className="bg-[#402f5c] w-fit mx-auto mt-10 text-black py-4 px-6 rounded-sm sm:text-[1.9rem] text-[1rem] shadow hover:brightness-200 duration-300 my-10"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </>
          <div></div>
          <button
            ref={prevRef}
            className={`cursor-pointer absolute top-1/2 sm:left-10 left-0 z-10 ${
              disabledPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image
              src={back}
              alt="back"
              className="lg:w-[80px] sm:w-[40px] w-[25px]"
            />
          </button>
          <button
            ref={nextRef}
            className={`cursor-pointer absolute top-1/2 sm:right-10 right-0 z-10 ${
              disabledNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
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
  );
}
