"use client";

import { useEffect, useState } from "react";
import { Camera, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryPage() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-8 py-4 bg-black/20 backdrop-blur-sm">

        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl justify-self-start"
        >
          ☰
        </button>

        <a href="/" className="flex justify-center">
          <img
            src="/logo.png"
            alt="Ottoman Logo"
            className="h-16 object-contain"
          />
        </a>

        <div className="justify-self-end">
          <a
            href="https://wa.me/628978242070"
            target="_blank"
            className="border border-white px-5 py-2 rounded-full text-sm hover:bg-[#B89B5E] hover:text-black transition"
          >
            RESERVE
          </a>
        </div>

      </nav>

      {/* MENU OVERLAY */}
{menuOpen && (
  <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center px-12">

    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-8 left-8 text-4xl"
    >
      ×
    </button>

    <div className="flex flex-col gap-6">

      <div>
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-serif text-[#B89B5E] hover:text-white transition"
        >
          Home
        </a>

        <p className="text-sm text-gray-500 mt-1">
          Return to Ottoman main page
        </p>
      </div>

      <div>
        <a
          href="/menus"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-serif text-[#B89B5E] hover:text-white transition"
        >
          Menus
        </a>

        <p className="text-sm text-gray-500 mt-1">
          Curated flavors from artisan coffee to premium dining
        </p>
      </div>

      <div>
        <a
          href="/ambience"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-serif text-[#B89B5E] hover:text-white transition"
        >
          Ambience
        </a>

        <p className="text-sm text-gray-500 mt-1">
          Indoor dining, VIP room, and lakeside terrace
        </p>
      </div>

      <div>
        <a
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-serif text-[#B89B5E] hover:text-white transition"
        >
          About Us
        </a>

        <p className="text-sm text-gray-500 mt-1">
          The story and philosophy behind Ottoman
        </p>
      </div>

      <div>
        <a
          href="/gallery"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-serif text-[#B89B5E] hover:text-white transition"
        >
          Gallery
        </a>

        <p className="text-sm text-gray-500 mt-1">
          Captured moments from the Ottoman experience
        </p>
      </div>

      <div>
        <a
          href="/visit"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-serif text-[#B89B5E] hover:text-white transition"
        >
          Visit
        </a>

        <p className="text-sm text-gray-500 mt-1">
          Discover Ottoman and reserve your table
        </p>
      </div>

    </div>

  </div>
)}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">
      
      <div className="absolute top-[-120px] left-[-80px] w-[350px] h-[350px] bg-[#6E8B7E]/20 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#B89B5E]/20 rounded-full blur-[160px] animate-pulse" />
       
        <img
          src="/galleryhero.jpg"
          alt="Ottoman Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

<div
  className="absolute inset-0 opacity-[0.12]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(229,211,161,0.18) 1px, transparent 1px),
      linear-gradient(90deg, rgba(229,211,161,0.18) 1px, transparent 1px)
    `,
    backgroundSize: "70px 70px",
  }}
/>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,139,126,0.35),transparent_50%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(184,155,94,0.22),transparent_45%)]" />

        <div className="relative z-10 max-w-3xl">

          <img
            src="/logokotaknew.jpg"
            alt="Ottoman Logo"
            className="h-50 object-contain mx-auto mb-8 opacity-90"
          />

          <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
            GALLERY
          </p>

          <h1 className="text-2xl md:text-5xl leading-[1.4] font-[family-name:var(--font-cormorant)] mb-8">
            Captured Moments
            <br />
            At Ottoman
          </h1>

          <div className="w-24 h-[1px] bg-[#B89B5E] mx-auto mb-8 opacity-70" />

          <p className="text-gray-300 text-lg leading-relaxed italic">
            A glimpse into the atmosphere,
            flavors, and meaningful moments shared at Ottoman.
          </p>

        </div>

      </section>

      {/* SCROLL INDICATOR */}
<button
  onClick={() => {
    document
      .getElementById("gallery-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
>

  <div className="text-[#E5D3A1] text-2xl">
    ▼
  </div>

</button>

{/* MASONRY GALLERY */}
<motion.section
  id="gallery-section"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="max-w-6xl mx-auto px-6 py-24 bg-[#111111]"
>

  <div className="columns-1 md:columns-2 xl:columns-3 gap-4 space-y-6">

    <motion.img
  src="/gallery1.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/gallery2.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>
  

    <motion.img
  src="/gallery3.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/gallery4.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>
 

    <motion.img
  src="/gallery5.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/gallery6.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/gallery7.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/gallery8.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/gallery9.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/gallery10.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/abouthero.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

   <motion.img
  src="/ambienceheronew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/ayamkremesneww.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/bakminew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/bakmionew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/croissantnew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/eggbennew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/englishbnew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/mushroomnew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/omeletenew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/outdoornew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/saladnew.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

    <motion.img
  src="/indoor3.jpg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full rounded-[20px] mb-4 hover:scale-[1.03] hover:brightness-110 transition duration-700"
/>

  </div>

</motion.section>

{/* FOOTER */}
<footer className="relative z-10 bg-[#0A0F0D] px-8 py-10 border-t border-[#B89B5E]/10">

  <div className="flex flex-col items-center text-center gap-8">

    <img
      src="/logo.png"
      alt="Ottoman Logo"
      className="h-24 object-contain"
    />

    <p className="max-w-xl text-gray-400 text-lg italic leading-relaxed font-[family-name:var(--font-cormorant)]">
      Crafted for meaningful dining, atmosphere,
      and memorable moments.
    </p>

    {/* SOCIALS */}
<div className="flex flex-wrap justify-center gap-10 text-sm tracking-[0.2em] text-[#6E8B7E] uppercase">

  <a
    href="https://instagram.com/hi.ottoman"
    target="_blank"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <Camera size={16} />
    Instagram
  </a>

  <a
    href="https://wa.me/628978242070"
    target="_blank"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <MessageCircle size={16} />
    WhatsApp
  </a>

  <a
    href="https://www.google.com/maps/place/Ottoman+Restaurant/@-6.1557998,106.8870143,1081m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e69f50030047359:0xe826bf14290ae179!8m2!3d-6.1557998!4d106.8870143!16s%2Fg%2F11lyj2013s?hl=en-id&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <MapPin size={16} />
    Location
  </a>

</div>

    {/* OPENING HOURS */}
    <div className="text-center">

      <p className="text-xs tracking-[0.3em] text-gray-600 uppercase mb-3">
        Opening Hours
      </p>

      <p className="text-gray-400 text-sm tracking-[0.15em]">
        Monday — Sunday
        <span className="mx-3 text-gray-600">•</span>
        10 AM — 10 PM
      </p>

    </div>

    {/* OTTOMAN GROUP */}
    <div className="text-center">

      <p className="text-xs tracking-[0.3em] text-gray-600 uppercase mb-3">
        Part of Ottoman Group
      </p>

      <div className="flex items-center justify-center gap-3 text-sm text-gray-400">

        <span className="hover:text-white transition">
          Restaurant
        </span>

        <span className="text-gray-600">•</span>

        <span className="hover:text-white transition">
          Barbershop
        </span>

        <span className="text-gray-600">•</span>

        <span className="hover:text-white transition">
          Carwash
        </span>

      </div>

    </div>

    {/* COPYRIGHT */}
    <div className="text-sm text-gray-600">
      © 2026 Ottoman Restaurant
    </div>

  </div>

</footer>

    </main>
  );
}