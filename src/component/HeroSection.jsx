// src/components/HeroSection.jsx
export default function HeroSection({ title, subtitle, ctaText }) {
    return (
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 md:py-28">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <button className="bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition shadow-lg">
            {ctaText}
          </button>
        </div>
      </section>
    );
  }