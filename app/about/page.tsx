"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Camera, MapPin, MessageCircle } from "lucide-react";

export default function AboutPage() {

  const [menuOpen, setMenuOpen] = useState(false);

  const reviews = [
    {
    name: "Heni Haryanti",
    text: "Tempatnya cozy, pelayanan ramah, makanan enak, dan artisan tea-nya hangat. Perfecto!",
  },
  {
    name: "Wahyu TD",
    text: "Tempat nongkrong asik, makanan dan minumannya enak, sambil lihat danau dan menunggu cuci mobil.",
  },
  {
    name: "Hendry Putra Rahadi",
    text: "Makanan enak, porsi besar, tempat nyaman dan cocok untuk menunggu cuci mobil.",
  },
  {
    name: "Mita Liem",
    text: "Foods are good, decent prices, fried banana and salmon were delicious.",
  },
  {
    name: "Stevy Maradona",
    text: "Kopi dan burnt cheesecake-nya creamy, makanan western pasta-nya almost pancious!",
  },
];

const [activeReview, setActiveReview] = useState(0);

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
          href="/visit#reservation"
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
          src="/abouthero.jpg"
          alt="Ottoman About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-3xl">

          <img
            src="/logokotaknew.jpg"
            alt="Ottoman Logo"
            className="h-50 object-contain mx-auto mb-8 opacity-90"
          />

          <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
            ABOUT US
          </p>

          <h1 className="text-2xl md:text-4xl leading-[1.4] font-serif mb-8">
            Crafted for Warm Gatherings
          </h1>
        <div className="w-24 h-[1px] bg-[#B89B5E] mx-auto mb-8 opacity-70" />
          <p className="text-gray-300 text-lg leading-relaxed italic">
            Ottoman is a destination where flavors,
            atmosphere, and togetherness come beautifully together.
          </p>

        </div>

      </section>

{/* STORY */}
<section className="px-8 md:px-20 py-32 bg-[#13201B]">

  <div className="max-w-5xl mx-auto text-center">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
      OUR STORY
    </p>

    <h2 className="text-4xl md:text-5xl text-white font-[family-name:var(--font-cormorant)]">
      Crafted for Warm Gatherings
    </h2>

    <div className="space-y-10 text-gray-400 text-lg leading-[2]">

      <p>
        At Ottoman, we believe dining is more than simply sharing meals —
        it is about creating moments, conversations, and connections.
        Designed as a warm casual dining destination, Ottoman offers
        a welcoming atmosphere where families, friends, and colleagues
        can gather comfortably together.
      </p>

      <p>
        Inspired by timeless Ottoman warmth and modern elegance,
        every corner of our space is thoughtfully created to deliver
        comfort and memorable experiences. From the cozy indoor ambience
        filled with the aroma of freshly brewed coffee, to the relaxing
        lakeside terrace connected to the jogging track, Ottoman invites
        guests to slow down and enjoy every moment.
      </p>

      <p>
        Whether for intimate conversations, family dinners,
        casual meetings, or special celebrations in our private VIP room,
        Ottoman is a place where flavors, atmosphere,
        and togetherness come beautifully together.
      </p>

    </div>

  </div>

</section>
{/* VALUES */}
<section className="px-8 md:px-20 py-32 bg-black">

  <div className="text-center mb-20">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
      OTTOMAN VALUES
    </p>

    <h2 className="text-4xl md:text-5xl text-white font-[family-name:var(--font-cormorant)]">
      Hospitality Beyond Dining
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* VALUE 1 */}
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#1B2A24] to-[#111111] p-12 backdrop-blur-sm hover:-translate-y-2 transition duration-500">

      <h3 className="text-3xl text-white font-[family-name:var(--font-cormorant)] mb-6">
        Warm Hospitality
      </h3>

      <p className="text-gray-300 leading-relaxed">
        We create welcoming spaces where every guest feels comfortable,
        relaxed, and genuinely cared for.
      </p>

    </div>

    {/* VALUE 2 */}
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#1B2A24] to-[#111111] p-12 backdrop-blur-sm hover:-translate-y-2 transition duration-500">

      <h3 className="text-3xl text-white font-[family-name:var(--font-cormorant)] mb-6">
        Meaningful Connections
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Ottoman is designed for conversations, gatherings,
        and memorable moments shared together.
      </p>

    </div>

    {/* VALUE 3 */}
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#1B2A24] to-[#111111] p-12 backdrop-blur-sm hover:-translate-y-2 transition duration-500">

      <h3 className="text-3xl text-white font-[family-name:var(--font-cormorant)] mb-6">
        Elevated Atmosphere
      </h3>

      <p className="text-gray-300 leading-relaxed">
        From warm interiors to lakeside views,
        every detail is thoughtfully curated to elevate the dining experience.
      </p>

    </div>

  </div>

</section>

{/* GOOGLE REVIEWS */}
<section className="px-8 md:px-20 py-32 bg-[#111111]">

  <div className="text-center mb-20">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-6">
      GOOGLE REVIEWS
    </p>

   <h2 className="text-4xl md:text-5xl text-white font-[family-name:var(--font-cormorant)]">
      Loved By Our Guests
    </h2>

  </div>

  <div className="max-w-4xl mx-auto">

    <div className="border-y border-white/10 py-20 text-center transition-all duration-500">

      <p className="text-[#E5D3A1] text-4xl mb-8">
        ★★★★★
      </p>

      <p className="text-gray-300 leading-[2] italic text-xl mb-10">
        “{reviews[activeReview].text}”
      </p>

      <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
        {reviews[activeReview].name}
      </p>

    </div>

    {/* DOTS */}
    <div className="flex justify-center gap-4 mt-10">

      {reviews.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveReview(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeReview === index
              ? "bg-[#E5D3A1] scale-125"
              : "bg-white/20 hover:bg-[#E5D3A1]"
          }`}
        />
      ))}

    </div>

  </div>

</section>

{/* CLOSING CTA */}
<section className="px-8 py-36 bg-[#13201B] text-center">

  <div className="max-w-4xl mx-auto">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-8">
      OTTOMAN EXPERIENCE
    </p>

    <h2 className="text-4xl md:text-6xl leading-[1.4] font-[family-name:var(--font-cormorant)] mb-10 text-white">

      More than dining —
      <br />
      a destination crafted
      for togetherness.

    </h2>

    <div className="w-24 h-[1px] bg-[#B89B5E] mx-auto mb-10 opacity-70" />

    <p className="text-gray-300 text-lg leading-[2] max-w-2xl mx-auto mb-14">

      Whether for intimate conversations,
      family gatherings, or meaningful celebrations,
      Ottoman welcomes every moment with warmth,
      comfort, and elevated hospitality.

    </p>

    <div className="flex flex-wrap justify-center gap-6">

      <a
        href="/menus"
        className="border border-[#E5D3A1] text-[#E5D3A1] px-8 py-4 rounded-full tracking-[0.2em] text-sm uppercase hover:bg-[#E5D3A1] hover:text-black transition"
      >
        Explore Menus
      </a>

      <a
        href="https://wa.me/628978242070"
        target="_blank"
        className="bg-[#E5D3A1] text-black hover:bg-white transition px-8 py-4 rounded-full tracking-[0.2em] text-sm uppercase shadow-[0_0_30px_rgba(229,211,161,0.25)]"
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
); }