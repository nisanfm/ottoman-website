"use client";

import { useState } from "react";
import { Camera, MessageCircle, MapPin } from "lucide-react";

export default function VisitPage() {

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

        <img
          src="/hero11.jpg"
          alt="Visit Ottoman"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-3xl">

          <img
            src="/logokotaknew.jpg"
            alt="Ottoman Logo"
            className="h-24 object-contain mx-auto mb-8 opacity-90"
          />

          <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
            VISIT OTTOMAN
          </p>

          <h1 className="text-2xl md:text-5xl leading-[1.4] font-[family-name:var(--font-cormorant)] mb-8">
            Where Warm Gatherings
            <br />
            Begin
          </h1>

          <div className="w-24 h-[1px] bg-[#B89B5E] mx-auto mb-8 opacity-70" />

          <p className="text-gray-300 text-lg leading-relaxed italic">
            Discover a warm dining destination
            designed for meaningful moments,
            conversations, and togetherness.
          </p>

        </div>

      </section>

      {/* LOCATION INFO */}
<section className="px-8 md:px-20 py-32 bg-[#111111]">

  <div className="grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT */}
    <div>

      <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
        LOCATION
      </p>

      <h2 className="text-4xl md:text-5xl leading-[1.4] font-[family-name:var(--font-cormorant)] mb-10">

        Visit Ottoman
        <br />
        Restaurant

      </h2>

      <div className="space-y-10 text-gray-300">

        <div>
          <p className="text-[#E5D3A1] tracking-[0.2em] text-sm uppercase mb-3">
            Address
          </p>

          <p className="leading-[2]">
            Ottoman Restaurant
            <br />
            Kelapa Gading, Jakarta
          </p>
        </div>

        <div>
          <p className="text-[#E5D3A1] tracking-[0.2em] text-sm uppercase mb-3">
            Opening Hours
          </p>

          <p className="leading-[2]">
            Monday — Sunday
            <br />
            10 AM — 10 PM
          </p>
        </div>

        <div>
          <p className="text-[#E5D3A1] tracking-[0.2em] text-sm uppercase mb-3">
            Contact
          </p>

          <p className="leading-[2]">
            WhatsApp Reservation
            <br />
            +62 897-8242-070
          </p>
        </div>

      </div>

      <div className="flex flex-wrap gap-6 mt-14">

        <a
          href="https://wa.me/628978242070"
          target="_blank"
          className="bg-[#E5D3A1] text-black hover:bg-white transition px-8 py-4 rounded-full tracking-[0.2em] text-sm uppercase shadow-[0_0_30px_rgba(229,211,161,0.25)]"
        >
          Reserve Now
        </a>

        <a
          href="https://www.google.com/maps/place/Ottoman+Restaurant/"
          target="_blank"
          className="border border-[#E5D3A1] text-[#E5D3A1] px-8 py-4 rounded-full tracking-[0.2em] text-sm uppercase hover:bg-[#E5D3A1] hover:text-black transition"
        >
          Open Maps
        </a>

      </div>

    </div>

    {/* RIGHT */}
    <div className="relative overflow-hidden rounded-[40px] border border-white/10">

      <iframe
        src="https://www.google.com/maps?q=Ottoman+Restaurant+Kelapa+Gading&output=embed"
        width="100%"
        height="500"
        loading="lazy"
        className="grayscale contrast-125 brightness-90"
      />

    </div>

  </div>

</section>
{/* WHY VISIT */}
<section className="px-8 md:px-20 py-32 bg-black">

  <div className="text-center mb-20">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
      WHY VISIT OTTOMAN
    </p>

    <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)]">
      More Than Just Dining
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* ITEM 1 */}
    <div className="border border-white/10 rounded-[40px] p-12 text-center">

      <h3 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#E5D3A1] mb-6">
        Warm Atmosphere
      </h3>

      <p className="text-gray-300 leading-[2]">
        Enjoy cozy interiors and meaningful moments
        designed for relaxed gatherings and conversations.
      </p>

    </div>

    {/* ITEM 2 */}
    <div className="border border-white/10 rounded-[40px] p-12 text-center">

      <h3 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#E5D3A1] mb-6">
        Lakeside Experience
      </h3>

      <p className="text-gray-300 leading-[2]">
        Refresh your day with scenic lakeside views
        connected to the jogging track and outdoor terrace.
      </p>

    </div>

    {/* ITEM 3 */}
    <div className="border border-white/10 rounded-[40px] p-12 text-center">

      <h3 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#E5D3A1] mb-6">
        Perfect Gatherings
      </h3>

      <p className="text-gray-300 leading-[2]">
        From intimate dinners to family celebrations,
        Ottoman welcomes every occasion warmly.
      </p>

    </div>

  </div>

</section>

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