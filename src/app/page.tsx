import Image from "next/image";
import React from "react";
import backgroundHome from "../../public/images/backgroundHome1.png";
import seta from "../../public/images/seta.png";
import facebook from "../../public/images/facebook.png";
import instagram from "../../public/images/instagram.png";
import linkedin from "../../public/images/linkedin.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen w-full relative bg-gradient-to-t from-[#dd8bd0] to-[#9439b5] flex items-center justify-center text-center">
      <Image
        src={backgroundHome}
        alt="backgroundHome"
        className="w-full h-full object-fill opacity-25 brightness-50"
      />
      <section className="absolute top-7 lg:top-20 flex items-start  justify-center z-10  flex flex-col gap-10 text-white  w-full items-center h-4/5 justify-evenly">
        <div className="lg:text-[3rem] text-[2rem] text-center">
          <h1 className="welcome brightness-150">Bem-vindo </h1>
          <h1 className="welcome brightness-150"> jogador 1</h1>
        </div>

        <div className="lg:text-[2rem] text-[1rem]">
          <p>
            Pressione jogar para <br></br>entrar no modo campanha
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="bg-[#402f5c] ml-20 text-black py-4 px-6 rounded-lg lg:text-[2rem] text-[1rem] shadow hover:brightness-200 duration-300"
          >
            <h1 className="welcome brightness-200">jogar</h1>
          </Link>
          <Image
            src={seta}
            alt="seta"
            className="brightness-[2.5] arrow-animation w-2/12"
          />
        </div>

        <div className="lg:text-[2rem] text-[1rem] text-center flex flex-col gap-5 itens-center ">
          <h1>
            me siga <br></br> em
          </h1>
          <div className="flex items-center justify-center gap-5 mt-10">
            <Link
              href={"https://www.facebook.com/anthonysareis"}
              target="_blank"
            >
              <Image
                src={facebook}
                alt="facebook"
                className="brightness-[1.4] w-10 hover:brightness-200 duration-300"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/anthonysa.dev"}
              target="_blank"
            >
              <Image
                src={instagram}
                alt="instagram"
                className="brightness-[1.4] w-10 hover:brightness-200 duration-300"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/anthony-sa-reis/"}
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="linkedin"
                className="brightness-[1.4] w-10 hover:brightness-200 duration-300"
              />
            </Link>
          </div>
          <Link className="mt-10 text-[1.2rem]" target="_blank" href={"https://docs.google.com/document/d/1H3VR3CQji52f831PasHBAlEotIkFR_lwiOTJ6VvHz9Q/edit?usp=sharing"}>Currículo</Link>
        </div>
      </section>
    </div>
  );
}
