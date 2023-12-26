import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import larDasVelhinhas from '../../../public/images/larDasVelhinhas.png'

interface ProjectProps {
    title: string
    description: string
    image: StaticImageData
    link: string
}

export default function Project({ title, description, image, link }: ProjectProps) {
  return (
    <div className="w-full sm:h-[400px] h-[200px] absolute sm:top-0 top-1 flex flex-row itens-center justify-center sm:divide-x-8 divide-x divide-black text-[.55rem] md:text-lg sm:leading-10">
    <section className="flex flex-col items-center justify-center lg:gap-5 gap-3 w-1/2  relative">
      <div className="flex items-center justify-center">
        <div className="mx-auto w-[95%] h-full">
          <Image
            src={image}
            alt={title}
            className="mx-1 object-cover"
            priority
          />
        </div>
      </div>
    </section>

    <section className="text-center flex flex-col itens-center justify-center gap-4 lg:gap-8 p-2 w-1/2">
      <h1>
        {description}
      </h1>
      <Link
        href={link}
        target="_blank"
        className="w-fit mx-auto"
      >
        <button className="bg-[#402f5c]  text-black py-4 px-6 rounded-sm  shadow hover:brightness-200 duration-300">
          <h1 className="welcome brightness-200">Visitar</h1>
        </button>
      </Link>
    </section>
  </div>
  )
}

