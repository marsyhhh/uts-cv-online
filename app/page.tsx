"use client"

import { useState } from "react"
import FavColor from "./components/favColor"
import Hero from "./components/hero"
import PersonalInfoSection from "./components/info"
import RiwayatPendidikan from "./components/riwayatPendidikan"
import SkillsSection from "./components/skill"
import Color from "./components/theme"
import MyGallery from "./components/hobby"
import ContactPage from "./components/contact"

export default function Gallery() {
  const [warna, setWarna] = useState("dark")

  return (
    <section
      className={`min-h-screen p-4 transition-colors duration-300 ${
        warna === "dark"
          ? "bg-black text-white"
          : warna === "light"
          ? "bg-white text-black"
          : "bg-gray-300 text-gray-900"
      }`}
    >
      <Hero />
      <RiwayatPendidikan />
      {/* <FavColor /> */}
      <SkillsSection />
      <PersonalInfoSection />
      <MyGallery />
      <ContactPage />
      <Color setWarna={setWarna} />
    </section>
  )
}
