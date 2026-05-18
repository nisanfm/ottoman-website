"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, MapPin, MessageCircle } from "lucide-react";
export default function AmbiencePage() {
const [menuOpen, setMenuOpen] = useState(false);
  return (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="bg-black text-white"
  >

);

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
      href="/visit#reservation"
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
          src="/ambienceheronew.jpg"
          alt="Ottoman Ambience"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        
        <div className="relative z-10 max-w-4xl">
        <img
          src="/logokotaknew.jpg"
          alt="Ottoman Logo"
          className="h-50 object-contain mx-auto mb-8 opacity-100"
        />

          <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
            THE AMBIENCE
          </p>

          <h1 className="text-1xl md:text-2xl leading-tight font-serif mb-8">
            Enjoy authentic flavors,
            delightful beverages,
            and a warm atmosphere
            designed for intimate moments
            with the people who matter most.
          </h1>

          <p className="text-gray-300 text-lg mb-10">
            Opening Hours
            <br />
            Mon — Sun · 10 AM — 10 PM
          </p>

          <a
            href="/visit#reservation"
            className="inline-block bg-[#1D3B34] hover:bg-[#B89B5E] hover:text-black transition px-8 py-4 rounded-full tracking-[0.2em] text-sm uppercase"
          >
            Book A Table
          </a>

        </div>

      </section>
      {/* INDOOR DINING */}
<section className="px-8 md:px-20 py-28 bg-[#111111]">

  <div className="mb-14 max-w-3xl">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-4">
      INDOOR DINING
    </p>

    <h2 className="text-4xl md:text-5xl font-serif mb-8">
      Warm & Inviting Spaces
    </h2>

    <p className="text-gray-400 leading-relaxed text-lg">
      Step into a warm and inviting atmosphere filled with the comforting aroma of freshly brewed coffee. Designed for meaningful gatherings and relaxed conversations, our indoor space offers the perfect setting to unwind, connect, and share special moments with family and close friends.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-6">

  <div className="overflow-hidden rounded-[30px]">
    <img
      src="/indoor1.jpg"
      alt="Indoor Dining"
      className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  <div className="overflow-hidden rounded-[30px]">
    <img
      src="/indoor2.jpg"
      alt="Indoor Dining"
      className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  <div className="overflow-hidden rounded-[30px]">
    <img
      src="/indoor3.jpg"
      alt="Indoor Dining"
      className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

</div>

</section>
{/* VIP ROOM */}
<section className="px-8 md:px-20 py-28 bg-black">

  <div className="mb-14 max-w-3xl ml-auto text-right">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-4">
      VIP ROOM
    </p>

    <h2 className="text-4xl md:text-5xl font-serif mb-8">
      Private & Intimate Gatherings
    </h2>

    <p className="text-gray-400 leading-relaxed text-lg">
      Enjoy a more private and intimate dining experience in our VIP Room, thoughtfully designed for comfort and warm conversations. Perfect for family gatherings, business meetings, or special occasions, the room accommodates up to 10 guests in an elegant and cozy atmosphere.
    </p>

  </div>

</section>
{/* LAKESIDE TERRACE */}
<section className="px-8 md:px-20 py-28 bg-[#111111]">

  <div className="mb-14 max-w-3xl">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-4">
      LAKESIDE TERRACE
    </p>

    <h2 className="text-4xl md:text-5xl font-serif mb-8">
      Open-Air Dining By The Lake
    </h2>

    <p className="text-gray-400 leading-relaxed text-lg">
      Enjoy a refreshing open-air dining experience at our Lakeside Terrace, beautifully connected to the surrounding jogging track and scenic lakeside views. Whether stopping by after a morning walk or gathering with family and friends, this relaxing outdoor space offers the perfect blend of nature, comfort, and delicious flavors.
    </p>

  </div>

  <div className="grid md:grid-cols-4 gap-4">

  <div className="overflow-hidden rounded-[30px]">
    <img
      src="/lake1.jpg"
      alt="Lakeside Terrace"
      className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  <div className="overflow-hidden rounded-[30px]">
    <img
      src="/lake2.jpg"
      alt="Lakeside Terrace"
      className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  <div className="overflow-hidden rounded-[30px]">
    <img
      src="/lake3.jpg"
      alt="Lakeside Terrace"
      className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  <div className="overflow-hidden rounded-[30px]">
    <img
      src="/lake4.jpg"
      alt="Lakeside Terrace"
      className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

</div>

</section>
{/* ATMOSPHERE GALLERY */}
<section className="px-8 md:px-20 py-28 bg-black overflow-hidden">

  <div className="text-center mb-20">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-4">
      ATMOSPHERE GALLERY
    </p>

    <h2 className="text-4xl md:text-5xl font-serif mb-6">
      A Glimpse Of Our Atmosphere
    </h2>

  </div>

  <div className="flex gap-6 w-max animate-marquee">

    <div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery1.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery2.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery3.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery4.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery5.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery6.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery7.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery8.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery9.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery10.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery1.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery2.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery3.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery4.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery5.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery6.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery7.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery8.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery9.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

<div className="overflow-hidden rounded-[30px]">
  <img
    src="/gallery10.jpg"
    className="h-[420px] min-w-[320px] object-cover transition duration-500 hover:scale-105"
  />
</div>

  </div>

</section>

{/* CTA */}
<section className="px-8 py-32 bg-[#111111] text-center">

  <div className="max-w-4xl mx-auto">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
      OTTOMAN EXPERIENCE
    </p>

    <h2 className="text-4xl md:text-6xl font-serif leading-[1.3] mb-8">
      Create Memorable Moments
      <br />
      Over Great Food
    </h2>

    <p className="text-gray-400 text-lg leading-relaxed mb-12">
      Whether it’s a family dinner, casual meetup,
      or special occasion, we’re ready to welcome you.
    </p>

    <div className="flex flex-wrap justify-center gap-6">

      <a
        href="/menus"
        className="border border-white px-8 py-4 rounded-full tracking-[0.2em] text-sm uppercase hover:bg-white hover:text-black transition"
      >
        Explore Menus
      </a>

      <a
        href="/visit#reservation"
        className="bg-[#1D3B34] hover:bg-[#B89B5E] hover:text-black transition px-8 py-4 rounded-full tracking-[0.2em] text-sm uppercase"
      >
        Reserve Now
      </a>

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
    </motion.main>
  );
}