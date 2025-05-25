export default function HeroSection({ title, subtitle, ctaText }) {
  return (
    <section className="relative h-screen min-h-[500px] flex items-center justify-center">
      {/* Background Image dengan Overlay Lebih Gelap */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('./src/assets/hover.jpg')] bg-cover bg-center z-0"
          style={{ filter: 'brightness(0.7)' }} // Menggelapkan gambar langsung
        />
        <div className="absolute inset-0 bg-black/50 z-1" /> {/* Overlay lebih gelap */}
      </div>
      
      {/* Konten dengan penyesuaian typography */}
      <div className="container relative z-10 text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
          {ctaText}
        </button>
      </div>
    </section>
  );
}