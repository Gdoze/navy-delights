import { useState } from "react";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Carte", href: "#menu" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading italic text-gold text-2xl">Le Navy</a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-foreground/70 hover:text-gold transition-colors text-sm tracking-wider uppercase">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://module.lafourchette.com/fr_FR/module/478571-85ef2"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block gradient-gold text-primary-foreground px-5 py-2 rounded-sm text-xs font-bold tracking-wider uppercase"
        >
          Réserver
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gold" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-gold/10 p-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-foreground/70 hover:text-gold text-sm tracking-wider uppercase py-2">
              {l.label}
            </a>
          ))}
          <a
            href="https://module.lafourchette.com/fr_FR/module/478571-85ef2"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center gradient-gold text-primary-foreground px-5 py-2 rounded-sm text-xs font-bold tracking-wider uppercase"
          >
            Réserver
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
