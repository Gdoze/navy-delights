import { useState } from "react";

type MenuItem = { name: string; price: string; desc?: string };

const menuCategories = [
  {
    id: "couscous",
    label: "Couscous",
    items: [
      { name: "Couscous Poulet", price: "12,50€" },
      { name: "Couscous Merguez (x2)", price: "14,00€" },
      { name: "Couscous Boulettes (x5)", price: "14,00€", desc: "Bœuf" },
      { name: "Couscous Mouton", price: "15,00€", desc: "Agneau" },
      { name: "Couscous Emy", price: "15,50€", desc: "2 Merguez, 2 Boulettes" },
      { name: "Couscous Berbère", price: "15,50€", desc: "Poulet, Merguez, 2 Boulettes" },
      { name: "Couscous Brochettes (x2)", price: "16,00€", desc: "Gigot d'agneau" },
      { name: "Couscous Maison", price: "16,50€", desc: "Poulet, Brochette, Merguez" },
      { name: "Couscous Touareg", price: "16,50€", desc: "Brochette, 2 Merguez, 2 Boulettes" },
      { name: "Couscous Mixte", price: "18,00€", desc: "2 Brochettes, 2 Merguez" },
      { name: "Couscous Caïd", price: "18,00€", desc: "Mouton, Brochette, Merguez" },
      { name: "Couscous Algérois", price: "20,00€", desc: "2 Côtes d'Agneau, Brochette, Merguez" },
      { name: "Couscous Royal", price: "21,00€", desc: "Mouton, Poulet, Brochette, Merguez" },
      { name: "Couscous Madjid", price: "22,00€", desc: "1 Côte d'agneau, Brochette, Merguez, Poulet, 2 Boulettes" },
      { name: "Couscous du Navy", price: "22,00€", desc: "Mouton, Poulet, Brochette, Merguez, 2 Boulettes" },
      { name: "Couscous Méchoui", price: "25,00€", desc: "1/2 épaule d'Agneau grillée" },
    ],
  },
  {
    id: "tajines",
    label: "Tajines",
    items: [
      { name: "Tajine Marrakech aux légumes", price: "18,00€", desc: "Pomme de terre, Oignon, Tomate, Courgette, Petits Pois, Cœur d'artichaut, Carotte, Pruneau, Œuf Poché, Olives" },
      { name: "Tajine Orientale aux fruits", price: "18,00€", desc: "Pomme de terre, Oignon, Tomate, Ananas, Pêche, Poire, Raisin, Pruneau, Œuf Poché" },
    ],
  },
  {
    id: "grillades",
    label: "Grillades",
    items: [
      { name: "Poulet", price: "12,50€" },
      { name: "Merguez (3)", price: "13,00€" },
      { name: "Boulettes (5)", price: "13,00€" },
      { name: "Bavette d'Aloyau", price: "14,50€" },
      { name: "Paire de Brochettes", price: "15,00€" },
      { name: "Côtes d'Agneau grillées (2)", price: "15,50€" },
      { name: "Gambas grillées", price: "18,50€" },
      { name: "Entrecôte grillée", price: "19,50€" },
    ],
  },
  {
    id: "entrees",
    label: "Entrées",
    items: [
      { name: "Salade de Tomates", price: "4,50€" },
      { name: "Œuf mayonnaise", price: "5,00€" },
      { name: "Entrée du jour", price: "5,50€", desc: "Le midi uniquement" },
      { name: "Filet de Harengs", price: "5,50€" },
      { name: "Assiette de Crudités", price: "5,50€" },
      { name: "Paire de Merguez", price: "6,00€" },
      { name: "Tomates Mozzarella", price: "6,00€" },
      { name: "Brick à l'œuf", price: "6,50€" },
      { name: "Brick au Poulet", price: "7,50€", desc: "Œuf + Poulet" },
    ],
  },
  {
    id: "salades",
    label: "Salades",
    items: [
      { name: "Salade composée (Crudités)", price: "13,50€", desc: "D'avril à octobre uniquement" },
      { name: "Salade de Chèvre", price: "14,00€" },
      { name: "Salade Océane", price: "15,00€" },
    ],
  },
  {
    id: "menus",
    label: "Menus",
    items: [
      { name: "Menu Entrée + Plat + Dessert", price: "16,90€", desc: "Le midi uniquement" },
      { name: "Menu Entrée + Plat ou Plat + Dessert", price: "14,50€", desc: "Le midi uniquement" },
      { name: "Menu Oriental", price: "16,90€", desc: "Couscous Poulet ou Merguez + Dessert" },
      { name: "Menu Enfant (-12 ans)", price: "9,00€" },
    ],
  },
];

const MenuItemRow = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-start py-3 border-b border-gold/10 last:border-0 group">
    <div className="flex-1">
      <span className="text-foreground group-hover:text-gold transition-colors">{item.name}</span>
      {item.desc && <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>}
    </div>
    <span className="text-gold font-heading text-lg ml-4 whitespace-nowrap">{item.price}</span>
  </div>
);

const MenuSection = () => {
  const [active, setActive] = useState("couscous");
  const activeCategory = menuCategories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-20 px-4 gradient-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading italic text-gold text-center mb-4">Notre Carte</h2>
        <p className="text-center text-muted-foreground mb-12">Des saveurs authentiques, des recettes familiales</p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-sm text-sm tracking-wider uppercase transition-all ${
                active === cat.id
                  ? "gradient-gold text-primary-foreground font-bold"
                  : "border border-gold/30 text-gold/70 hover:text-gold hover:border-gold/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="bg-card rounded-sm p-6 md:p-10 shadow-gold border border-gold/10">
          <h3 className="font-heading text-2xl text-gold italic mb-6">{activeCategory.label}</h3>
          {activeCategory.id === "tajines" && (
            <p className="text-muted-foreground text-sm mb-4 italic">Les tajines sont accompagnés de Poulet, de Mouton ou de cinq boulettes</p>
          )}
          {activeCategory.id === "grillades" && (
            <p className="text-muted-foreground text-sm mb-4 italic">Nos grillades sont accompagnées de frites maison, haricots verts ou salade</p>
          )}
          <div>
            {activeCategory.items.map((item, i) => (
              <MenuItemRow key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
