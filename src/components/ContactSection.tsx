const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 gradient-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading italic text-gold text-center mb-12">Contact & Horaires</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-gold font-heading text-xl mb-4">Adresse</h3>
              <p className="text-foreground/80 font-light">Le Navy - Chez Madjid</p>
              <p className="text-foreground/80 font-light">11 rue des Augustins</p>
              <p className="text-foreground/80 font-light">76000 Rouen</p>
            </div>
            <div>
              <h3 className="text-gold font-heading text-xl mb-4">Téléphone</h3>
              <a href="tel:+33235700153" className="text-gold text-lg hover:text-gold-light transition-colors">
                02 35 70 01 53
              </a>
            </div>
            <div>
              <a
                href="https://module.lafourchette.com/fr_FR/module/478571-85ef2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block gradient-gold text-primary-foreground px-8 py-3 rounded-sm font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
              >
                Réserver en ligne
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gold font-heading text-xl mb-4">Horaires</h3>
            <div className="space-y-3">
              {[
                { day: "Lundi – Jeudi", hours: "12h00 – 14h30 / 19h00 – 22h30" },
                { day: "Vendredi", hours: "12h00 – 14h30 / 19h00 – 23h00" },
                { day: "Samedi", hours: "19h00 – 23h00" },
                { day: "Dimanche", hours: "Fermé" },
              ].map((s) => (
                <div key={s.day} className="flex justify-between py-2 border-b border-gold/10">
                  <span className="text-foreground/80 font-light">{s.day}</span>
                  <span className="text-gold-light font-light">{s.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-sm overflow-hidden border border-gold/10">
          <iframe
            title="Le Navy Rouen"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.5!2d1.0925!3d49.4405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0de1234567890%3A0xabcdef!2sLe+Navy!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
