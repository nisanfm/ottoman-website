"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Camera, MapPin, MessageCircle } from "lucide-react";

const menuImages = [
  "/bakminew.jpg",
  "/orientalbakmi.jpg",
  "/croissantnew.jpg",
  "/eggbennew.jpg",
  "/englishbnew.jpg",
  "/kayanew.jpg",
  "/mushroomnew.jpg",
  "/omeletenew.jpg",
  "/saladnew.jpg",
  "/tomahawknew.jpg",
];

export default function MenusPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % menuImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#0A0A0A] text-white min-h-screen overflow-hidden"
    >

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-8 py-2 backdrop-blur-sm bg-black/20 border-b border-[#B89B5E]/10">

        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl justify-self-start z-50"
        >
          ☰
        </button>

        <a href="/" className="flex justify-center z-50">
          <img
            src="/logo.png"
            alt="Ottoman Logo"
            className="h-16 object-contain"
          />
        </a>

        <div className="justify-self-end z-50">
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
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden">

        {/* SLIDESHOW */}
        <div className="absolute inset-0 -z-0">

          {menuImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* HERO CONTENT */}
        <div className="relative z-20">

          <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-4">
            OTTOMAN MENUS
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Curated Flavors
          </h1>

          <p className="max-w-2xl text-gray-300 italic text-lg font-serif">
            A collection of comforting favorites,
            elevated classics, and signature selections.
          </p>

        </div>

      </section>

      {/* BREAKFAST */}
      <section className="px-8 md:px-20 py-24 border-b border-[#B89B5E]/10">

        <div className="mb-16">

          <p className="text-[#B89B5E] tracking-[0.3em] text-sm mb-4">
            BREAKFAST
          </p>

          <h2 className="text-4xl font-serif">
            Morning Selections
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Croissant Sandwich
              </h3>

              <span className="text-[#B89B5E]">
                75K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A warm, flaky croissant layered with creamy scrambled eggs and
              crispy bacon, perfectly balanced for a delicious breakfast
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Egg Benedict
              </h3>

              <span className="text-[#B89B5E]">
                75K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Perfecly poached egg on toasted english muffin with crispy bacon, topped with rich and creamy hollandaise sauce, a classic
              indulgence.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Big Breakfast
              </h3>

              <span className="text-[#B89B5E]">
                85K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Bacon, toasted bread, crispy fries, and sunny side-up eggs,
              a simple yet satisfying breakfast favorite
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Omelette & Fries
              </h3>

              <span className="text-[#B89B5E]">
                45K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Fluffy omelette served with crispy golden fries and fresh salad
              on the side-comfort food at its finest..
            </p>
          </div>

        </div>

        </section>

      {/* BITES TO BEGIN */}
      <section className="px-8 md:px-20 py-24 border-b border-[#B89B5E]/10">

        <div className="mb-16">

          <p className="text-[#B89B5E] tracking-[0.3em] text-sm mb-4">
            BITES TO BEGIN
          </p>

          <h2 className="text-4xl font-serif">
            Light Beginnings
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Truffle Fries
              </h3>

              <span className="text-[#B89B5E]">
                35K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Crispy golden fries infused with truffle oil, a luxurious twist on a classic side dish
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Crispy Wings & Fries
              </h3>

              <span className="text-[#B89B5E]">
                45K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Golden, crispy, chicken wings paired with hot, fresh french fries.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Fried Cassava 
              </h3>

              <span className="text-[#B89B5E]">
                35K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Crispy fried cassava, paired with aromatic kecombrang sambal
              for a refined local indulgence
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Sausages & Fries
              </h3>

              <span className="text-[#B89B5E]">
                45K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Grilled sausage served with crispy french fries
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Crispy Onion Rings 
              </h3>

              <span className="text-[#B89B5E]">
                35K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Golden fried onion rings, perfectly crisp on the outside and
              tender on the inside, served with a side of tartar sauce.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Snack Platter
              </h3>

              <span className="text-[#B89B5E]">
                85K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A perfect medley of chicken wings, meatballs, sausage, french
              fries, and onion rings-served with tartarsauce and chilli sauce.
            </p>
          </div>

           <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Mushroom Soup
              </h3>

              <span className="text-[#B89B5E]">
                45K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A rich and creamy mushroom soup, finished with truffle oil, sauteed mushrooms, and garlic bread.
            </p>
          </div>

        </div>
        </section>

      {/* MAIN COURSE */}
      <section className="px-8 md:px-20 py-24 border-b border-[#B89B5E]/10">

        <div className="mb-16">

          <p className="text-[#B89B5E] tracking-[0.3em] text-sm mb-4">
            MAIN COURSE
          </p>

          <h2 className="text-4xl font-serif">
            Signature Plates
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Pan-Seared Chicken 
              </h3>

              <span className="text-[#B89B5E]">
                75K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Tender golden seared chicken, available with your choice of
              chicken breast or thigh, served with a side of creamy mashed
              potato or golden french fries, fresh salad, and sauteed vegetables, all drizzled with a rich sauce. 
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Pan-Seared Salmon
              </h3>

              <span className="text-[#B89B5E]">
                145K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Perfectly pan-seared salmon, served with your choice of creamy
              mashed potato/golden french fries, a refreshing salad, sauteed
              vegetables, and a flavorful sauce
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Oxtail Fried Rice 
              </h3>

              <span className="text-[#B89B5E]">
                125K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Grilled oxtail, served with fragrant fried rice, pickles, melinjo
              crackers, sambal hijau, and a sunny-side-up egg.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Oxtail Soup Ottoman
              </h3>

              <span className="text-[#B89B5E]">
                165K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A comforting bowl of oxtail soup, served with steamed rice,
              pickles, melinjo crackers, and sambal rawit.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Oriental Bakmi 
              </h3>

              <span className="text-[#B89B5E]">
                60K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Springy noodles served with tender seasoned chicken, aromatic
              spices, and a flavorful broth.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Nasi Daun Jeruk Ayam Kremes Signature
              </h3>

              <span className="text-[#B89B5E]">
                95K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Crispy fried chicken paired with aromatic citrus leaf rice, balado
              egg, fried tempe, fried tofu, and spicy sambal geprek. A perfect
              balance of crunchy, spicy, and aromatic flavors.
            </p>
          </div>

           <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Ottoman Fried Rice Chicken or Beef
              </h3>

              <span className="text-[#B89B5E]">
                65/80K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Fragrant, aromatic fried rice, sautéed with chicken / beef, served
              with pickles, melinjo crackers, and a sunny side up egg.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Ottoman Fried Noodle 
              </h3>

              <span className="text-[#B89B5E]">
                85K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Flavorful stir-fried noodles with signature spices, tender beef,
              and a perfect blend of savory and aromatic seasonings
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Soto Betawi Ottoman
              </h3>

              <span className="text-[#B89B5E]">
                90K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Classic Betawi beef soup enriched with a smooth blend of coconut milk and fresh milk, served with steamed rice, chili sambal,
              pickles, melinjo crackers, and a touch of lime for freshness.
            </p>
          </div>

           <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Curry Bakmi
              </h3>

              <span className="text-[#B89B5E]">
                65K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Springy noodles in rich, fragrant curry sauce, topped with tender beef and aromatic spices.
            </p>
          </div>

        </div>

      </section>

      {/* PASTA PERFECTION */}
      <section className="px-8 md:px-20 py-24 border-b border-[#B89B5E]/10">

        <div className="mb-16">

          <p className="text-[#B89B5E] tracking-[0.3em] text-sm mb-4">
            PASTA PERFECTION
          </p>

          <h2 className="text-4xl font-serif">
            Artisan Pasta
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Creamy Salmon Pasta 
              </h3>

              <span className="text-[#B89B5E]">
                95K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Fresh pasta in a rich and creamy sauce with salmon, sundried
              tomatoes and sprinkle of parmesan cheese
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Basil Pesto Creamy
              </h3>

              <span className="text-[#B89B5E]">
                75K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Crispy chicken karaage is paired with a creamy basil pesto
              pasta, delivering a unique and satisfying fusion of flavors.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Salmon Risotto 
              </h3>

              <span className="text-[#B89B5E]">
                125K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Creamy risotto paired with tender, pan-seared salmon, creating
              a perfect balance of flavors and a rich, comforting dish.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Mushroom Chicken Risotto
              </h3>

              <span className="text-[#B89B5E]">
                85K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Creamy risotto with succulent chicken and earthy mushrooms,
              creating a rich, savory dish.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Smoky Cakalang Matah Spaghetti
              </h3>

              <span className="text-[#B89B5E]">
                80K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Al dente spaghetti served with cakalang fufu, topped with fresh
              sambal matah. A perfect fusion of smoky, spicy and refreshing
              flavors
            </p>
          </div>

          </div>

          </section>

          {/* STEAK SELECTION */}
      <section className="px-8 md:px-20 py-24 border-b border-[#B89B5E]/10">

        <div className="mb-16">

          <p className="text-[#B89B5E] tracking-[0.3em] text-sm mb-4">
            STEAK SELECTION
          </p>

          <h2 className="text-4xl font-serif">
            Prime Cuts
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Tomahawk .Pre Order Menu. 
              </h3>

              <span className="text-[#B89B5E]">
                2200K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Massive tomahawk steak crafted from premium grain-fed Wagyu,
              served with three signature sauces to elevate its bold beefy
              flavor.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Steak Platter - Australian Wagyu Ribeye MB 4–6 200g
              </h3>

              <span className="text-[#B89B5E]">
                530K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Premium Australian Wagyu Ribeye (MB 4–6), perfectly grilled and
              served with chicken steak, savory sausage, crispy potato wedges, and sweet corn. Accompanied by three signature sauces.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Steak Platter - Australian Porterhouse / T-Bone 300g 
              </h3>

              <span className="text-[#B89B5E]">
                390K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Generous Australian Porterhouse or T-Bone steak, paired with
              chicken steak, savory sausage, crispy potato wedges, and
              sweet corn. Enhanced with three signature sauces.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Steak Platter - Tenderloin / Ribeye Meltique Premium 200gr
              </h3>

              <span className="text-[#B89B5E]">
                275K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A hearty platter of Meltique Tenderloin or Ribeye, served with
              chicken steak, savory sausage, crispy potato wedges, and
              sweet corn. Finished with three signature sauces.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                AUS Porterhouse 300gr
              </h3>

              <span className="text-[#B89B5E]">
                250K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Juicy Australian Porterhouse steak grilled to perfection, served
              with your choice of signature sauce.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                AUS T-bone 300gr
              </h3>

              <span className="text-[#B89B5E]">
                230K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A perfectly grilled Australian T-bone steak, served with two
              sauces to highlight the natural flavors of this classic cut.
            </p>
          </div>

           <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                AUS Wagyu Rib Eye MB4-6 
              </h3>

              <span className="text-[#B89B5E]">
                390K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Australian Wagyu Ribeye with MB4–6 marbling, perfectly balanced in tenderness and bold flavor.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Tenderloin Meltique Premium 200gr
              </h3>

              <span className="text-[#B89B5E]">
                140K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Exquisitely tender and juicy meltique beef tenderloin, seared to
              perfection and served with your choice of signature sauce.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Ribeye Meltique Premium 200gr
              </h3>

              <span className="text-[#B89B5E]">
                140K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Rich and flavorful meltique ribeye, perfectly seared for a juicy,
buttery finish, served with your choice of signature sauce.
            </p>
          </div>

          </div>

          </section>

          {/* GARDEN BLISS */}
      <section className="px-8 md:px-20 py-24 border-b border-[#B89B5E]/10">

        <div className="mb-16">

          <p className="text-[#B89B5E] tracking-[0.3em] text-sm mb-4">
            GARDEN BLISS
          </p>

          <h2 className="text-4xl font-serif">
            Salad Selection
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Feta Cheese Salad 
              </h3>

              <span className="text-[#B89B5E]">
                75K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A vibrant mix of greens, creamy feta cheese, black olives, and a
              zesty lemon dressing.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Caesar chicken Salad
              </h3>

              <span className="text-[#B89B5E]">
                75K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Crisp romaine lettuce, golden chicken karaage, crunchy croutons, parmesan cheese, and classic Caesar dressing.
            </p>
          </div>

          </div>

          </section>

          {/* SWEET ENDINGS */}
      <section className="px-8 md:px-20 py-24 border-b border-[#B89B5E]/10">

        <div className="mb-16">

          <p className="text-[#B89B5E] tracking-[0.3em] text-sm mb-4">
            SWEET ENDINGS
          </p>

          <h2 className="text-4xl font-serif">
            Dessert
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Kaya Toast 
              </h3>

              <span className="text-[#B89B5E]">
                45K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Classic crispy toast with creamy kaya spread, best enjoyed with
              two soft-boiled eggs.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Pisang Goreng
              </h3>

              <span className="text-[#B89B5E]">
                35K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Crispy fried bananas drizzled with a rich Nusantara sauce,
              creating a deliciously sweet and crunchy dessert.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Cheesecake
              </h3>

              <span className="text-[#B89B5E]">
                45K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A smooth, creamy cheesecake, rich and satisfying, topped with a
              delicious finishing touch for a sweet ending.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Brownies with Vanilla Ice Cream
              </h3>

              <span className="text-[#B89B5E]">
                35K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Decadent, fudgy brownies served warm, paired with creamy
              vanilla ice cream for the ultimate indulgent dessert experience.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Butter Croissant
              </h3>

              <span className="text-[#B89B5E]">
                35K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A classic buttery, flaky croissant, golden on the outside and soft
              on the inside, perfect for a light, satisfying treat.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Croissant Selection
              </h3>

              <span className="text-[#B89B5E]">
                45K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              A buttery, flaky croissant, light and airy, available in three delicious flavors: rich chocolate, savory cheese, and nutty almond—
              perfect for a simple yet satisfying treat.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif">
                Banana Bread with Vanilla Ice Cream
              </h3>

              <span className="text-[#B89B5E]">
                35K
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Moist flavorful banana bread paired with vanilla ice cream for
              a delightful contrast in textures and flavors.
            </p>
          </div>

          </div>

          </section>

          {/* BEVERAGES */}
      <section className="px-8 md:px-20 py-24 border-b border-[#B89B5E]/10">

        <div className="mb-16">

          <p className="text-[#B89B5E] tracking-[0.3em] text-sm mb-4">
            BEVERAGES
          </p>

          <h2 className="text-4xl font-serif">
            Crafted Refreshments
          </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-16">

    {/* COFFEE */}
    <div>

      <div className="flex justify-between items-center mb-10">

        <h3 className="text-3xl font-serif text-[#E5D3A1]">
          Coffee
        </h3>

        <div className="flex gap-8 text-sm uppercase tracking-[0.2em] text-gray-500">
          <span>Hot</span>
          <span>Iced</span>
        </div>

      </div>

      <div className="space-y-6 text-gray-300">

        <div className="flex justify-between">
          <p>Espresso (Kerinci / Gayo)</p>
          <div className="flex gap-10">
            <span>30</span>
            <span>-</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Black (Kerinci / Gayo)</p>
          <div className="flex gap-10">
            <span>30</span>
            <span>30</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Latte</p>
          <div className="flex gap-10">
            <span>40</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Cappuccino</p>
          <div className="flex gap-10">
            <span>40</span>
            <span>45</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Moccacino</p>
          <div className="flex gap-10">
            <span>40</span>
            <span>45</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Affogato</p>
          <div className="flex gap-10">
            <span>-</span>
            <span>45</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Black Rock In White</p>
          <div className="flex gap-10">
            <span>-</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Kopi Susu Gula Aren</p>
          <div className="flex gap-10">
            <span>-</span>
            <span>45</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Ginger Lemongrass Latte</p>
          <div className="flex gap-10">
            <span>40</span>
            <span>-</span>
          </div>
        </div>

        <div className="pt-10">

          <h4 className="text-2xl font-serif text-[#E5D3A1] mb-6">
            Signature Beverage
          </h4>

          <div className="space-y-6">

            <div className="flex justify-between">
              <p>Purple Haze</p>
              <span>50</span>
            </div>

            <div className="flex justify-between">
              <p>Coconut Matcha Cloud</p>
              <span>45</span>
            </div>

          </div>

        </div>

      </div>

    </div>

    {/* NON COFFEE */}
    <div>

      <div className="flex justify-between items-center mb-10">

        <h3 className="text-3xl font-serif text-[#E5D3A1]">
          Non-Coffee
        </h3>

        <div className="flex gap-8 text-sm uppercase tracking-[0.2em] text-gray-500">
          <span>Hot</span>
          <span>Iced</span>
        </div>

      </div>

      <div className="space-y-6 text-gray-300">

        <div className="flex justify-between">
          <p>Matcha Latte</p>
          <div className="flex gap-10">
            <span>35</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Chocolate</p>
          <div className="flex gap-10">
            <span>35</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Classic Lemonade</p>
          <div className="flex gap-10">
            <span>-</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Mojito</p>
          <div className="flex gap-10">
            <span>-</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Smoothies</p>
          <span>45</span>
        </div>

        <p className="text-sm text-gray-500 italic">
          Green Booster / Berries & Banana / Watermelon
        </p>

        <div className="flex justify-between">
          <p>Frappe</p>
          <span>50</span>
        </div>

        <p className="text-sm text-gray-500 italic">
          Caramel / Vanilla / Cookies & Cream / Matcha
        </p>

        <div className="flex justify-between">
          <p>Aqua Sparkling Reflection 380ml</p>
          <span>30</span>
        </div>

      </div>

    </div>

    {/* TEA */}
    <div>

      <div className="flex justify-between items-center mb-10">

        <h3 className="text-3xl font-serif text-[#E5D3A1]">
          Tea
        </h3>

        <div className="flex gap-8 text-sm uppercase tracking-[0.2em] text-gray-500">
          <span>Hot</span>
          <span>Iced</span>
        </div>

      </div>

      <div className="space-y-6 text-gray-300">

        <div className="flex justify-between">
          <p>Tea</p>
          <div className="flex gap-10">
            <span>30</span>
            <span>30</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Lychee Tea</p>
          <div className="flex gap-10">
            <span>-</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Peach Tea</p>
          <div className="flex gap-10">
            <span>-</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Yuzu Tea</p>
          <div className="flex gap-10">
            <span>-</span>
            <span>40</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Lemon Tea</p>
          <div className="flex gap-10">
            <span>30</span>
            <span>30</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Ginger Lemongrass Tea</p>
          <div className="flex gap-10">
            <span>35</span>
            <span>-</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Artisan Tea</p>
          <span>45</span>
        </div>

      </div>

    </div>

  </div>

</section>

{/* MENUS GALLERY */}
<section className="px-8 md:px-20 py-28 bg-black overflow-hidden">

  <div className="text-center mb-20">

    <p className="tracking-[0.3em] text-sm text-[#B89B5E] mb-4">
      MENUS GALLERY
    </p>

    <h2 className="text-4xl md:text-5xl font-serif mb-6">
      A Glimpse Of Our Menus
    </h2>

  </div>

  <div className="flex gap-6 w-max animate-marquee">

    <img
  src="/tomahawknew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/saladnew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/omeletenew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/mushroomnew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/kayanew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/englishbnew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/eggbennew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/croissantnew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/orientalbakmi.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/bakminew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/tomahawknew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/saladnew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/omeletenew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/mushroomnew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/kayanew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/englishbnew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/eggbennew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/croissantnew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/orientalbakmi.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

<img
  src="/bakminew.jpg"
  className="h-[420px] min-w-[320px] object-cover rounded-[30px]"
/>

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