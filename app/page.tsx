"use client";

import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  const [bg, setBg] = useState(0);

  // Manual Navigation Logic
  const nextSlide = useCallback(() => {
    setBg((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setBg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Automatic Movement
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <main className="font-sans antialiased text-slate-900">


      {/* WHATSAPP FLOATING BUTTON */}
      <main className="font-sans antialiased text-slate-900 bg-white">
      
      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hi! I'm interested in an Andaman package."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:hidden"></div>
        <svg 
          className="w-10 h-10 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 01-3.815-.958l-.273-.162-2.831.744.756-2.76-.178-.283a8.196 8.196 0 01-1.256-4.354c0-4.515 3.673-8.188 8.189-8.188 2.188 0 4.246.853 5.791 2.398a8.133 8.133 0 012.396 5.79c0 4.516-3.673 8.19-8.19 8.19m0-17.778C7.575 1.358 3.53 5.403 3.53 10.42a10.324 10.324 0 001.396 5.17l-1.48 5.408 5.534-1.452a10.358 10.358 0 004.99 1.283h.005c5.045 0 9.09-4.045 9.09-9.062 0-2.434-.947-4.722-2.666-6.441a9.006 9.006 0 00-6.446-2.66z"/>
        </svg>
      </a>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === bg ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all border border-white/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all border border-white/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block font-bold text-blue-400 drop-shadow-lg">
            Since 2018 • Island Experts
          </span>
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter mb-8 italic uppercase">
            Andaman <br /> <span className="not-italic font-light">Uncovered</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-900 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white/40 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-blue-900 transition-all">
              Watch Tour
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 flex gap-3 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setBg(i)}
              className={`h-1.5 transition-all rounded-full ${bg === i ? "w-12 bg-white" : "w-4 bg-white/40 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </section>

      {/* REMAINDER OF YOUR CODE (TRUST BAR, PACKAGES, ETC) */}
      <section className="py-20 text-center">
         <h2 className="text-3xl font-bold">Your journey begins here.</h2>
      </section>
      
    </main>

      {/* TRUST BAR */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 text-slate-500">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <p className="text-slate-900 font-bold leading-none">500+ Happy Clients</p>
              <p className="text-xs uppercase tracking-tighter">Verified Reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏝️</span>
            <div>
              <p className="text-slate-900 font-bold leading-none">Local Experts</p>
              <p className="text-xs uppercase tracking-tighter">Based in Port Blair</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <p className="text-slate-900 font-bold leading-none">100% Trusted</p>
              <p className="text-xs uppercase tracking-tighter">Safe & Secure Travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900">Popular Tours</h2>
              <p className="text-slate-500 mt-2">The most loved experiences by our travelers</p>
            </div>
            <button className="hidden md:block text-blue-600 font-bold hover:underline">View All Packages →</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Havelock Bliss", price: "₹18,999", img: "https://images.unsplash.com/photo-1589135303604-b936ed412d3d?q=80&w=800" },
              { title: "Neil Island Escape", price: "₹22,500", img: "https://images.unsplash.com/photo-1544141101-086392097728?q=80&w=800" },
              { title: "Andaman Highlights", price: "₹28,000", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" },
            ].map((pkg, i) => (
              <div key={i} className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={pkg.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={pkg.title} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    4 Nights / 5 Days
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl text-slate-800">{pkg.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-blue-600 font-bold text-xl">{pkg.price}</span>
                    <span className="text-slate-400 text-sm">/ person</span>
                  </div>
                  <button className="mt-8 w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition shadow-lg">
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Andaman Trails</h3>
          <p className="text-slate-500 max-w-md mx-auto mb-8">Your local partner for unforgettable island memories. Licensed by Andaman Tourism.</p>
          <div className="border-t border-slate-900 pt-8 text-slate-600 text-sm">
            © 2026 Travel Company. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}