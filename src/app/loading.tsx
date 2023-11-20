import React from "react";
import { ImSpinner6 } from "react-icons/im";

export default function Loading() {
  return (
    <main className=" relativetext-center bg-black w-full h-screen flex items-center justify-center flex-col gap-3 text-[2rem] px-4">
  
      <div className="absolute z-10 flex items-center justify-center flex-col gap-3 text-[2rem] px-4">
        <h1 className="welcome  brightness-150">inicializando</h1>
        <h1 className="welcome brightness-150"> mundo</h1>
        <ImSpinner6 className="animate-spin" color="pink" />
      </div>
    </main>
  );
}
