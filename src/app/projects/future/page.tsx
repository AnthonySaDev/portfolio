"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";

const Slider: React.FC = () => {
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
    <div className="flex flex-col bg-gradient-to-t from-zinc-600 to-zinc-900 h-screen overflow-y-hidden flex flex-col justify-between sm:justify-around p-4">
      <h1 className="text-center  text-xl font-serif font-bold text-white">
        My Work
      </h1>
      <div className="overflow-hidden">
        <div className="container">
          <div id="slide">
            <div className="item larDasVelhinhas">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Anthony Sá </div>
                  <div className="des">
                  Explore the website dedicated to support a ong that provides assistance for senior citizens
                  </div>
                  <Link className="bg-gradient" target="_blank" href={"https://github.com/AnthonySaDev/lardasvelhinhas"}>See more</Link>
                </div>
              </div>
            </div>
            <div className="item impresilk">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Anthony Sá </div>
                  <div className="des">Website showcasing products for sublimation, acrylics, and more.</div>
                  <Link className="bg-gradient" target="_blank" href={"https://github.com/AnthonySaDev/impresilkLocalWeb"}>See more</Link>
                </div>
              </div>
            </div>
            <div className="item neofamily">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Anthony Sá </div>
                  <div className="des">Attractive website for dentists, complete with an engaging blog section</div>
                  <Link className="bg-gradient" target="_blank" href={"https://github.com/AnthonySaDev/repositorioneofamily"}>See more</Link>
                </div>
              </div>
            </div>
            <div className="item dotcom">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Anthony Sá </div>
                  <div className="des">Captivating website unveiling cutting-edge plans from forward-thinking company.</div>
                  <Link className="bg-gradient" target="_blank" href={"https://github.com/AnthonySaDev/dotcom"}>See more</Link>
                </div>
              </div>
            </div>
            <div className="item archcad">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Anthony Sá </div>
                  <div className="des">Browse Our Selection of Premier Properties on Our Real Estate Website.</div>
                  <Link className="bg-gradient" target="_blank" href={"https://github.com/AnthonySaDev/archicad"}>See more</Link>
                </div>
              </div>
            </div>
            <div className="item ctcmp">
              <div className="content">
                <div className="contentArea">
                  <div className="name">Anthony Sá</div>
                  <div className="des">Discover Our State-of-the-Art Gym Facilities and Personalized Training Programs on Our Gym{"'"}s Website.</div>
                  <Link className="bg-gradient" target="_blank" href={"https://github.com/AnthonySaDev/ctcmp"}>See more</Link>
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
          Next Level
        </h1>
      </Link>
    </div>
  );
};

export default Slider;
