"use client";

export default function Accueil() {
  return (
    <section className="relative h-screen bg-cover bg-center bg-[url('/Image/Atelier-couture.jpg')] text-white flex items-center justify-center">
      {/* Overlay noir avec opacité */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu centré */}
      <div className="relative text-center z-10 max-w-4xl px-4">
        <h1 className="text-1xl sm:text-4xl md:text-3xl lg:text-3xl font-bold mb-6">
          Bienvenue à notre Atelier{" "}
          <span className="text-[#e1c340]">Agadez_Sokni_style_haute couture</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Des créations sur mesure pour tous vos besoins vestimentaires
        </p>
      </div>
    </section>
  );
}