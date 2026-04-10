import patternImg from "@/assets/pattern-divider.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <img src={patternImg} alt="" loading="lazy" width={300} height={80} className="mx-auto mb-8 w-48 opacity-40" />
        <h2 className="text-3xl md:text-4xl font-heading italic text-gold mb-8">Notre Histoire</h2>
        <p className="text-foreground/80 font-light leading-relaxed mb-6">
          Restaurateurs de père en fils depuis près de 30 ans, le restaurant <span className="text-gold">Le Navy</span>, situé à deux pas de la place Saint Marc en plein centre de Rouen, vous accueille dans un cadre typique et raffiné.
        </p>
        <p className="text-foreground/80 font-light leading-relaxed">
          Cuisine familiale aux saveurs des mille et une nuits, venez vous régaler avec nos spécialités orientales telles que le couscous, le tajine ou encore diverses grillades, accompagnés d'un vin du Maghreb ou d'un thé à la menthe.
        </p>
        <img src={patternImg} alt="" loading="lazy" width={300} height={80} className="mx-auto mt-8 w-48 opacity-40 rotate-180" />
      </div>
    </section>
  );
};

export default AboutSection;
