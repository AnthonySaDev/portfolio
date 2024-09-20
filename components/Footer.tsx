import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Pronto pra levar <span className="text-purple">sua</span> presença
          digital para o próximo nível?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Entre em contato comigo hoje e vamos discutir como eu posso te ajudar
          a alcançar seus objetivos.
        </p>
        <div className="flex md:gap-5 gap-3 flex-col md:flex-row">
          <a href="mailto:anthonysareis11@gmail.com">
            <MagicButton
              title="Vamos nos conectar"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href="https://wa.me/5538999337788"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Entre em contato"
              icon={<FaWhatsapp />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Anthony Sá Reis
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
