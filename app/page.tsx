"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Camera, MapPin, MessageCircle } from "lucide-react";
const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative bg-black text-white">
      {/* BACKGROUND SLIDESHOW */}
      {images.map((image, index) => (
        <div
  key={index}
  className={`fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 grid grid-cols-3 items-center px-8 py-1 backdrop-blur-sm bg-black/10 border-b border-white/5">

        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl justify-self-start"
        >
          ☰
        </button>

        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="Ottoman Logo"
            className="h-16 object-contain"
          />
        </div>

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

          <div className="flex flex-col gap-4 text-3xl font-serif">

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
               Indoor dining, VIP room, and lakeside terrace.
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
             Captured moments from the Ottoman Restaurant Experience
            </p>
          </div>

            <div>
             <a
              href="/visit"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-serif text-[#B89B5E] hover:text-white transition"
            >
             Visit Us
            </a>

            <p className="text-sm text-gray-500 mt-1">
             Discover Ottoman and experience elevated dining in a warm, inviting setting.
            </p>
          </div>

          </div>

        </div>
      )}

      {/* HERO CONTENT */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <img
          src="/logokotak.jpg"
          alt="Ottoman Logo"
          className="h-50 object-contain mb-6 opacity-90"
/>

        <h2 className="text-5xl md:text-7xl mb-6 leading-tight font-serif">
          A Destination Crafted
          <br />
          Beyond Dining
        </h2>

        <p className="max-w-2xl text-xl italic text-gray-200 mb-8 font-serif">
          Where warm hospitality, curated spaces,
          and meaningful moments come together.
        </p>

        <div className="flex gap-4">

          <a
            href="#experience"
            className="bg-[#1D3B34] px-6 py-3 rounded-full hover:opacity-90 transition"
        >
         Explore
        </a>

          <a
            href="https://wa.me/628978242070"
            target="_blank"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
         >
           Reserve
         </a>

        </div>

      </section>
{/* EXPERIENCE SECTION */}
<motion.section
   id="experience"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.01 }}
  className="relative z-10 bg-[#111111] px-8 py-24"
>

  <div className="text-center mb-16">
    <p className="tracking-[0.3em] text-sm text-gray-400 mb-4">
      THE EXPERIENCE
    </p>

    <h3 className="text-4xl md:text-5xl font-serif">
      Curated Spaces for
      <br />
      Meaningful Moments
    </h3>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="bg-[#1B2A24] rounded-[30px] overflow-hidden">

      <img
        src="/indoor.jpg"
        alt="Indoor Dining"
        className="h-80 w-full object-cover"
      />

      <div className="p-8">
        <h4 className="text-2xl font-serif mb-4">
          Indoor Dining
        </h4>

        <p className="text-gray-400 leading-relaxed">
          Warm interiors and elevated dining designed for comfort,
          conversation, and unforgettable evenings.
        </p>
      </div>

    </div>

    {/* CARD 2 */}
    <div className="bg-[#1B2A24] rounded-[30px] overflow-hidden">

      <img
        src="/hero3.jpg"
        alt="VIP Room"
        className="h-80 w-full object-cover"
      />

      <div className="p-8">
        <h4 className="text-2xl font-serif mb-4">
          VIP Room
        </h4>

        <p className="text-gray-400 leading-relaxed">
          An intimate space crafted for private gatherings,
          celebrations, and meaningful connections.
        </p>
      </div>

    </div>

    {/* CARD 3 */}
    <div className="bg-[#1B2A24] rounded-[30px] overflow-hidden">

      <img
        src="/outdoor.jpg"
        alt="Lakeside Terrace"
        className="h-80 w-full object-cover"
      />

      <div className="p-8">
        <h4 className="text-2xl font-serif mb-4">
          Lakeside Terrace
        </h4>

        <p className="text-gray-400 leading-relaxed">
          Experience serene outdoor dining surrounded by calm views
          and the warmth of Ottoman hospitality.
        </p>
      </div>

    </div>

  </div>

</motion.section>

{/* CURATED FLAVORS */}
<section className="relative z-10 bg-black px-8 py-24">

  <div className="text-center mb-24">

    <p className="tracking-[0.3em] text-sm text-gray-400 mb-4">
      CURATED FLAVORS
    </p>

    <h3 className="text-4xl md:text-5xl font-serif">
      Signature Selections
      <br />
      Crafted to Remember
    </h3>

  </div>

  <div className="flex flex-col gap-32">

    {/* CROISSANT */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div className="order-2 md:order-1">

        <p className="tracking-[0.3em] text-sm text-[#5C7A6D] mb-4">
          BREAKFAST SELECTION
        </p>

        <h4 className="text-5xl font-serif mb-8">
          Croissant Sandwich
        </h4>

        <p className="text-gray-400 leading-relaxed text-lg">
          A warm, flaky croissant layered with creamy scrambled eggs
          and crispy bacon, perfectly balanced for a comforting and
          satisfying breakfast experience.
        </p>

      </div>

      <img
        src="/croissant.jpg"
        alt="Croissant Sandwich"
        className="order-1 md:order-2 w-full h-[340px] object-cover rounded-[30px]"
      />

    </div>

    {/* CURRY BAKMI */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <img
        src="/bakmi.jpg"
        alt="Curry Bakmi"
        className="w-full h-[340px] object-cover rounded-[30px]"
      />

      <div>

        <p className="tracking-[0.3em] text-sm text-[#5C7A6D] mb-4">
          COMFORT FAVORITE
        </p>

        <h4 className="text-5xl font-serif mb-8">
          Curry Bakmi
        </h4>

        <p className="text-gray-400 leading-relaxed text-lg">
          Springy noodles coated in a rich, fragrant curry sauce,
          topped with tender beef and aromatic spices for a bold
          and comforting flavor.
        </p>

      </div>

    </div>

    {/* AYAM KREMES */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div className="order-2 md:order-1">

        <p className="tracking-[0.3em] text-sm text-[#5C7A6D] mb-4">
          INDONESIAN SIGNATURE
        </p>

        <h4 className="text-5xl font-serif mb-8">
          Nasi Daun Jeruk
          <br />
          Ayam Kremes
        </h4>

        <p className="text-gray-400 leading-relaxed text-lg">
          Crispy fried chicken served with aromatic citrus leaf rice,
          balado egg, fried tempeh, tofu, and spicy sambal geprek —
          a perfect harmony of crunchy, savory, and spicy flavors.
        </p>

      </div>

      <img
        src="/ayamkremes.jpg"
        alt="Nasi Daun Jeruk Ayam Kremes Signature"
        className="order-1 md:order-2 w-full h-[340px] object-cover rounded-[30px]"
      />

    </div>

    {/* TOMAHAWK */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <img
        src="/tomahawk.jpg"
        alt="Tomahawk"
        className="w-full h-[340px] object-cover rounded-[30px]"
      />

      <div>

        <p className="tracking-[0.3em] text-sm text-[#5C7A6D] mb-4">
          SIGNATURE STEAK
        </p>

        <h4 className="text-5xl font-serif mb-8">
          Tomahawk
        </h4>

        <p className="text-gray-400 leading-relaxed text-lg">
          A massive tomahawk steak crafted from premium grain-fed wagyu,
          served with three signature sauces that elevate its bold
          and juicy character.
        </p>

      </div>

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