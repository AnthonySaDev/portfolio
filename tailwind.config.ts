import { url } from 'inspector'
import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lardasvelhinhas' : "url('./public/images/larDasVelhinhas.png')",
        'lardasvelhinhasMobile' : "url('./public/images/larDasVelhinhasMobile.jpg')",
        'impresilk' : "url('./public/images/impresilk.png')",
        'impresilkMobile' : "url('./public/images/impresilkMobile.jpg')",
        'neofamily' : "url('./public/images/neofamily.png')",
        'neofamilyMobile' : "url('./public/images/neofamilyMobile.jpg')",
        'dotcom' : "url('./public/images/dotcom.png')",
        'dotcomMobile' : "url('./public/images/dotcomMobile.jpg')",
        'ctcmp' : "url('./public/images/ctcmp.png')",
        'ctcmpMobile' : "url('./public/images/ctcmpMobile.jpg')",
        'archicad' : "url('./public/images/archicad.png')",
        'archicadMobile' : "url('./public/images/archicadMobile.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
