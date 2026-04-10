import heroImg from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Cuisine orientale du Navy" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-gold-light tracking-[0.3em] uppercase text-sm mb-4 font-body font-light">Chez Madjid & Akly</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-gold mb-6">
          Le Navy
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto mb-4">
          Couscous & Spécialités Orientales
        </p>
        <p className="text-muted-foreground font-light mb-10">
          11 rue des Augustins, 76000 Rouen
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://module.lafourchette.com/fr_FR/module/478571-85ef2"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-foreground px-8 py-3 rounded-sm font-body font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
          >
            Réserver une table
          </a>
          <a
            href="tel:+33235700153"
            className="border border-gold px-8 py-3 rounded-sm text-gold font-body tracking-wider uppercase text-sm hover:bg-primary/10 transition-colors"
          >
            02 35 70 01 53
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
