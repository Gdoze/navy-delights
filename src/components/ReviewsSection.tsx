const reviews = [
  { author: "Fafa Chemin", badge: "Local Guide", date: "il y a 5 mois", rating: 5, text: "Tout y est.. l'ambiance, la gentillesse..le service au top. Le patron super sympa à l'écoute de ses clients et le personnel très réactif..leurs couscous, leurs pâtisseries vraiment très très bon..Je recommande+++" },
  { author: "Sarah Harkat", date: "il y a 3 mois", rating: 5, text: "3 couscous avec brochette merguez et gigot d'agneau. Pour 3 bon mangeurs et c'était excellent la viande fond en bouche le couscous était excellent généreux. Je recommande ce restaurant les yeux fermés !" },
  { author: "Ig : Mx.Prod_76", date: "il y a 4 mois", rating: 5, text: "Rien à dire restaurant et cuisine incroyable. On y passe de très bon moment, l'équipe est très aimable. Je conseille vivement d'essayer." },
  { author: "Romance Mariage", date: "il y a 4 mois", rating: 5, text: "Accueil chaleureux dans une atmosphère conviviale, cuisine généreuse et excellente. Rapport qualité prix très honnête vis à vis des quantités servies." },
  { author: "Céline Coquet", date: "il y a 4 mois", rating: 5, text: "Je recommande !! Très bon accueil, toute l'équipe très sympa et accueillant. Les plats très bon et copieux 😉 👍👍👍" },
  { author: "Amina Zegar", badge: "Local Guide", date: "il y a 6 mois", rating: 5, text: "Très bon repas. Couscous poulet et tajines aux légumes. De très belles quantités +++ magnifique merci encore !" },
  { author: "Stéphane Beaucousin", badge: "Local Guide", date: "il y a 3 mois", rating: 5, text: "Superbe petit resto, accueil top, plat traditionnel magique et très chaleureux merci." },
  { author: "Guillaume Dumoulin", badge: "Local Guide", date: "il y a 11 mois", rating: 5, text: "Sans aucun doute le meilleur couscous de Rouen. Akly propose un couscous authentique et copieux dans une ambiance détendue et conviviale. Hautement recommandé !" },
  { author: "PhilippeG Gaston", badge: "Local Guide", date: "il y a 7 mois", rating: 5, text: "Le couscous maison est très bon. Brochettes délicieuses." },
  { author: "Isa Belle", badge: "Local Guide", date: "il y a 8 ans", rating: 5, text: "Délicieux, généreux et aimable. Bon rapport qualité prix. Une grande assiette de crudités à 3,50€ c'est donné. Et les couscous ou tajines généreux impossible à finir." },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < count ? "text-primary" : "text-muted"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section id="avis" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading italic text-gold mb-4">Avis Google</h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-5xl font-heading text-gold">4,6</span>
            <div>
              <Stars count={5} />
              <p className="text-muted-foreground text-sm mt-1">364 avis</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card border border-gold/10 rounded-sm p-5 hover:shadow-gold transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {r.author[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground text-sm font-medium truncate">{r.author}</p>
                  <p className="text-muted-foreground text-xs">{r.badge && `${r.badge} · `}{r.date}</p>
                </div>
              </div>
              <Stars count={r.rating} />
              <p className="text-foreground/80 text-sm mt-3 font-light leading-relaxed line-clamp-4">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
