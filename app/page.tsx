"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import { desc } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];
  const [bg, setBg] = useState(0);

  const nextSlide = useCallback(() => {
    setBg((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setBg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const tours = [
    { title: "4N/5D Andaman Delight", price: "₹18,999", img: "/t1.jpg" },
    { title: "5N/6D Honeymoon Special", price: "₹24,999", img: "/t2.jpg" },
    { title: "6N/7D Family Package", price: "₹29,999", img: "/t3.jpg" },
    { title: "Luxury Andaman Escape", price: "₹39,999", img: "/t4.jpg" },
    { title: "Budget Andaman Trip", price: "₹14,999", img: "/t5.jpg" },
    { title: "Adventure Andaman Tour", price: "₹27,999", img: "/t6.jpg" },
    { title: "Romantic Beach Getaway", price: "₹22,999", img: "/t7.jpg" },
    { title: "Scuba Diving Special", price: "₹25,999", img: "/t8.jpg" },
    // { title: "Island Hopping Tour", price: "₹26,999", img: "/t9.jpg" },
    // { title: "Premium Resort Package", price: "₹45,999", img: "/t10.jpg" },
    // { title: "Short 3N Trip", price: "₹12,999", img: "/t11.jpg" },
    // { title: "Extended 8N Tour", price: "₹49,999", img: "/t12.jpg" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'JOURNEYS', id: 'journeys' },
    { name: 'ISLANDS', id: 'islands' },
    { name: 'STORY', id: 'story' },
    { name: 'CONTACT', id: 'contact' }
  ];

  return (
    <main className="font-sans antialiased bg-white text-slate-900 scroll-smooth">


      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919933254445?text=Hi! I'm interested in a package from Enjoy Destination."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform group"
      >
        {/* Pulsing Animation Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:hidden"></div>

        {/* Official Style WhatsApp Icon */}
        <svg
          className="w-10 h-10 text-white relative z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 01-3.815-.958l-.273-.162-2.831.744.756-2.76-.178-.283a8.196 8.196 0 01-1.256-4.354c0-4.515 3.673-8.188 8.189-8.188 2.188 0 4.246.853 5.791 2.398a8.133 8.133 0 012.396 5.79c0 4.516-3.673 8.19-8.19 8.19m0-17.778C7.575 1.358 3.53 5.403 3.53 10.42a10.324 10.324 0 001.396 5.17l-1.48 5.408 5.534-1.452a10.358 10.358 0 004.99 1.283h.005c5.045 0 9.09-4.045 9.09-9.062 0-2.434-.947-4.722-2.666-6.441a9.006 9.006 0 00-6.446-2.66z" />
        </svg>
      </a>

      {/* HERO SECTION */}
      <section id="top" className="relative h-screen w-full overflow-hidden flex flex-col text-white">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              // This KEY is vital; it tells React this is a new element to animate
              key={bg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <NextImage
                // Accessing the specific index from your images array
                src={images[bg]}
                alt={`Enjoy Destination Hero ${bg + 1}`}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* HEADER */}
        <header
          className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-12 transition-all duration-300 ${isScrolled
            ? "py-1 bg-white shadow-sm"
            : "py-1 bg-transparent"
            }`}
        >
          {/* Logo */}
          <div className="flex flex-col">
            <div className={`${isScrolled ? "-mt-0" : "-mt-1"} transition-all duration-300`}>
              <a href="/" className="flex items-center gap-2">
                <Image
                  src="/enjoylogo.png"
                  alt="Enjoy Destination"
                  width={isScrolled ? 100 : 120}
                  height={isScrolled ? 15 : 15}
                  className="object-contain transition-all duration-300"
                  priority
                />
              </a>

            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`text-[10px] tracking-[0.3em] font-medium transition-all duration-300 ${isScrolled
                  ? "text-slate-600 hover:text-[#E18A63]"
                  : "text-white hover:text-[#E18A63]"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button className="hidden md:block bg-[#E18A63] text-white text-[10px] tracking-[0.2em] px-8 py-3 hover:bg-[#c97652] transition-all">
              PLAN A TRIP
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 z-50 transition-all ${isScrolled || isMobileMenuOpen
                ? "text-slate-900"
                : "text-white"
                }`}
            >
              <div
                className={`h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <div
                className={`h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <div
                className={`h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl tracking-[0.4em] font-serif text-slate-900 hover:text-[#E18A63] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button className="mt-4 bg-[#E18A63] text-white text-[10px] tracking-[0.2em] px-10 py-4 font-bold uppercase">
                Plan a Trip
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        {/* METADATA ROW */}
        {/* <div className="relative z-20 flex justify-between px-8 md:px-12 mt-4 opacity-70">
          <div className="border-t border-white/30 pt-2 w-40 md:w-64">
            <p className="text-[9px] tracking-[0.2em] uppercase font-medium">Est. Port Blair · 2018</p>
          </div>
          <div className="border-t border-white/30 pt-2 w-40 md:w-64 text-right">
            <p className="text-[9px] tracking-[0.2em] uppercase font-medium">11°40'N · 92°45'E</p>
          </div>
        </div> */}

        {/* HERO CONTENT */}
        <div className="relative z-10 flex-grow flex flex-col justify-center px-8 md:px-13 mt-15">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <p className="text-[#E18A63] text-[10px] tracking-[0.4em] mb-6 uppercase font-bold">
              Experience the archipelago with Enjoy Destination
            </p>
            <h2 className="text-6xl md:text-[9rem] font-serif leading-[0.85] tracking-tight mb-12">
              Where the <br /> sea forgets <br /> time.
            </h2>
            <div className="flex flex-wrap gap-6">
              <button className="bg-[#E18A63] px-10 py-5 text-[10px] tracking-[0.2em] uppercase font-bold hover:scale-105 transition-transform shadow-xl">
                Begin Your Voyage
              </button>
              <button className="border border-white/40 px-10 py-5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-black transition-all">
                Browse Journeys
              </button>
            </div>
          </motion.div>
        </div>

        {/* SLIDE INDICATORS */}
        <div className="relative z-20 px-8 md:px-12 pb-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBg(i)}
                  className={`h-[2px] transition-all duration-500 ${bg === i ? "w-12 bg-white" : "w-6 bg-white/30 hover:bg-white/60"}`}
                />
              ))}
            </div>
            <p className="text-[10px] tracking-[0.2em]">0{bg + 1} / 0{images.length}</p>
          </div>
          <div className="flex gap-4">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">←</button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">→</button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}

      <section className="py-5 bg-[#F9F7F2] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15 lg:gap-24">
            {[
              { label: "500+ Happy Clients", sub: "Verified Reviews", icon: "⭐" },
              { label: "Local Experts", sub: "Based in Port Blair", icon: "🏝️" },
              { label: "100% Trusted", sub: "Safe & Secure Travel", icon: "🛡️" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                </div>
                <div>
                  <p className="text-slate-900 font-serif text-xl tracking-tight leading-none mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#E18A63] text-[10px] uppercase tracking-[0.2em] font-bold">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEYS SECTION */}
      <section id="journeys" data-title="Journeys" className="py-24 px-8 md:px-20 bg-gray-50 scroll-mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif tracking-tight text-slate-900">Popular Tours</h2>
              <p className="text-slate-500 mt-2">Curated experiences by Enjoy Destination.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tours.map((tour, i) => (
              <motion.div
                key={i}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tour.title} />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] font-bold tracking-tighter text-slate-900 shadow-sm">
                    {tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-slate-900 mb-4">{tour.title}</h3>
                  <button className="w-full py-3 text-[9px] tracking-[0.2em] font-bold border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
                    EXPLORE JOURNEY
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEHOLDER SECTIONS */}
      <section id="islands" data-title="Islands" className="py-28 px-8 md:px-20 bg-white border-t border-gray-100 scroll-mt-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[#E18A63] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">
              The Islands
            </p>
            <h2 className="text-5xl font-serif tracking-tight mb-6">
              Discover the Archipelago
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Turquoise waters, untouched beaches, and timeless island culture —
              explore the Andaman like never before.
            </p>
          </div>

          {/* Island Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Havelock Island",
                desc: "Home to the world-famous Radhanagar Beach and crystal-clear waters perfect for scuba diving.",
                img: "/havelock.jpg"
              },
              {
                name: "Neil Island",
                desc: "A peaceful retreat known for natural rock formations and laid-back island life.",
                img: "/neil.jpg"
              },
              {
                name: "Port Blair",
                desc: "The cultural heart of Andaman with colonial history and vibrant local markets.",
                img: "/portblair.jpeg"
              },
              {
                name: "Baratang Island",
                desc: "Explore limestone caves and mangrove creeks in this offbeat destination.",
                img: "/baratang.jpg"
              },
              {
                name: "Ross Island",
                desc: "Walk through British-era ruins surrounded by lush greenery and deer.",
                img: "/ross.webp"
              },
              {
                name: "North Bay",
                desc: "A paradise for water sports, snorkeling, and coral reef exploration.",
                img: "/northbay.jpg"
              }
            ].map((island, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={island.img}
                    alt={island.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl mb-3">{island.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {island.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" data-title="Our Story" className="py-28 px-8 md:px-20 bg-gray-50 border-t border-gray-100 scroll-mt-10">
        <div className="max-w-6xl mx-auto text-center">

          {/* Header */}
          <p className="text-[#E18A63] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">
            Our Journey
          </p>

          <h2 className="text-5xl font-serif tracking-tight mb-8">
            Crafted with Passion. <br /> Guided by Experience.
          </h2>

          {/* Story Content */}
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg mb-12">
            Since 2018, <b>Enjoy Destination</b> has been curating unforgettable journeys
            across the Andaman Islands. What began as a small local initiative in Port Blair
            has grown into a trusted travel brand known for personalized experiences,
            transparent pricing, and deep local expertise.
          </p>

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed mb-16">
            We believe travel is not just about visiting places — it's about feeling them.
            From romantic getaways to adventure-packed tours, every itinerary we design
            is tailored to create memories that last a lifetime.
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Local Expertise",
                desc: "On-ground teams in Andaman ensuring seamless travel experiences."
              },
              {
                title: "Tailored Journeys",
                desc: "Custom itineraries designed to match your travel style and pace."
              },
              {
                title: "Trusted by Travelers",
                desc: "Hundreds of happy clients with verified reviews and repeat bookings."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section id="story" className="py-24 px-8 bg-gray-50 border-t border-gray-100 scroll-mt-10 text-center">
        <h2 className="text-4xl font-serif mb-4">Certified By</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 mt-12">
          {[
            { name: "IATO", logo: "/iato.png", desc: "Indian Association of Tour Operators" },
            { name: "TAAI", logo: "/taai.png", desc: "Travel Agents Association of India" },
            { name: "PATA", logo: "/pata.png", desc: "Pacific Asia Travel Association" },
            { name: "TripAdvisor", logo: "/tripadvisor.png", desc: "World's Largest Travel Platform" }
          ].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-32 h-16 flex items-center justify-center"
            >
              <div className="w-70 h-35 flex flex-col items-center justify-center border border-gray-200 p-2">
                <img src={cert.logo} alt={cert.name} className="max-h-20 object-contain" />
                <p className="text-[10px] text-center mt-2 text-slate-500">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        data-title="Contact Us"
        className="py-15 bg-slate-950 text-white border-t border-white/5 scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 mb-16 lg:mb-20">

            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-[10px] tracking-[0.4em] text-[#E18A63] font-bold uppercase mb-6">
                Connect With Us
              </h3>

              <div className="space-y-6 mt-8 lg:mt-12 text-sm text-slate-300 leading-relaxed">

                <p>
                  <b>Head Office:</b><br />
                  Ammas Pastry Building, 4th Floor,<br />
                  8th Cross, Sampige Road,<br />
                  Malleswaram, Bangalore - 560003
                </p>

                <p>
                  <b>Branch Office:</b><br />
                  621/3, Near CSC Centre,<br />
                  Bombooflat,<br />
                  Andaman and Nicobar Islands - 744107
                </p>

                <p>
                  <b>Email:</b><br />
                  enjoydestinationtravels@gmail.com<br />
                  sales@enjoydestination.com
                </p>

                <p>
                  <b>Bangalore Office:</b><br />
                  9883090460, 9739008000
                </p>

                <p>
                  <b>Andaman Office:</b><br />
                  7063924106, 9531875166
                </p>

              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between items-center lg:items-end text-center lg:text-right"
            >
              <div>

                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/enjoylogo.png"
                    alt="Enjoy Destination"
                    width={160}
                    height={70}
                    className="object-contain"
                    priority
                  />
                </div>

                <p className="text-slate-600 text-[10px] tracking-[0.3em] uppercase mt-4 mb-10">
                  {/* Managed by Dacitos Technologies Private Limited */}
                </p>

                <nav className="flex flex-col gap-4 mb-12 items-center lg:items-end">
                  {[
                    { name: 'JOURNEYS', id: 'journeys' },
                    { name: 'ISLANDS', id: 'islands' },
                    { name: 'STORY', id: 'story' },
                    { name: 'CONTACT', id: 'contact' }
                  ].map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-[10px] tracking-[0.4em] font-medium text-slate-400 hover:text-[#E18A63] transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 flex flex-col items-center lg:items-end">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-slate-400 mb-4">
                    Review Us Through
                  </p>

                  <div className="bg-white p-3 inline-block rounded-xl shadow-md">
                    <img
                      src="/trip-advisor-review-qr.png"
                      alt="TripAdvisor Review QR"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>

              </div>

              <div className="flex flex-wrap justify-center lg:justify-end gap-6 md:gap-10 border-t border-white/10 pt-8 mt-10 w-full">
                {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[10px] tracking-widest uppercase text-slate-500 hover:text-white transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">

            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
              <p className="text-slate-700 text-[9px] tracking-widest uppercase">
                © 2026 <span className="text-[#E18A63]">Enjoy Destination</span>. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6 text-center">
              <p className="text-slate-600 text-[9px] tracking-[0.2em] uppercase">
                Crafted by{" "}
                <span className="text-[#E18A63]">
                  <a href="https://www.dacitos.com">
                    Dacitos Technologies Pvt Ltd
                  </a>
                </span>
              </p>
            </div>

          </div>

        </div>
      </footer>
    </main>
  );
}