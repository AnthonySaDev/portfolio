"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import larDasVelhinhasImage from "../../../../public/images/larDasVelhinhas.png";

const Slider: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const nextButton = document.getElementById("next") as HTMLButtonElement;
    const prevButton = document.getElementById("prev") as HTMLButtonElement;

    nextButton.onclick = function () {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide")!.appendChild(lists[0]);
    };

    prevButton.onclick = function () {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide")!.prepend(lists[lists.length - 1]);
    };
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-t from-zinc-600 to-zinc-900 h-screen overflow-y-hidden flex flex-col justify-between py-2 sm:py-10">
      <h1 className="text-center text-2xl font-serif font-bold text-white">
        Meus Trabalhos
      </h1>
      <div className="overflow-hidden">
        <div className="container">
          <div id="slide">
            <div className="item larDasVelhinhas">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Lar Das Velhinhas </div>
                  <div className="des">
                    Explore o site dedicado a apoiar uma ONG que presta
                    assistência a idosos.{" "}
                  </div>
                  <Link
                    className="bg-gradient"
                    target="_blank"
                    href={"https://github.com/AnthonySaDev/lardasvelhinhas"}
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="item impresilk">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Impresilk </div>
                  <div className="des">
                    Site apresentando produtos para sublimação, acrílicos e
                    mais.
                  </div>
                  <Link
                    className="bg-gradient"
                    target="_blank"
                    href={"https://github.com/AnthonySaDev/impresilkLocalWeb"}
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="item neofamily">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Neofamily </div>
                  <div className="des">
                    Site desenvolvido para dentistas, completo com um envolvente
                    seção do blog
                  </div>
                  <Link
                    className="bg-gradient"
                    target="_blank"
                    href={
                      "https://github.com/AnthonySaDev/repositorioneofamily"
                    }
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="item dotcom">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Dotcom</div>
                  <div className="des">
                    Site cativante revelando planos de ponta de empresa com
                    visão de futuro.
                  </div>
                  <Link
                    className="bg-gradient"
                    target="_blank"
                    href={"https://github.com/AnthonySaDev/dotcom"}
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="item archcad">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Archicad</div>
                  <div className="des">
                    Navegue pela nossa seleção de propriedades de primeira linha
                    em nosso Real Site imobiliário.
                  </div>
                  <Link
                    className="bg-gradient"
                    target="_blank"
                    href={"https://github.com/AnthonySaDev/archicad"}
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="item ctcmp">
              <div className="content">
                <div className="contentArea">
                  <div className="name">CTCMP</div>
                  <div className="des">
                    Descubra nossas instalações fitness de última geração e
                    Programas de treinamento personalizados no site da nossa
                    academia.
                  </div>
                  <Link
                    className="bg-gradient"
                    target="_blank"
                    href={"https://github.com/AnthonySaDev/ctcmp"}
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button id="prev">
              <FaChevronLeft size={20} />
            </button>
            <button id="next">
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <Link href="/finish">
        <h1 className="text-center mt-10 text-xl font-serif font-bold text-white bg-gradient w-fit p-2 mx-auto">
          Próximo Nível
        </h1>
      </Link>
    </div>
  );
};

export default Slider;
