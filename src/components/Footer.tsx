const Footer = () => (
  <footer className="py-10 px-4 border-t border-gold/10 text-center">
    <p className="font-heading italic text-gold text-xl mb-2">Le Navy</p>
    <p className="text-muted-foreground text-sm font-light">Chez Madjid & Akly · 11 rue des Augustins, 76000 Rouen</p>
    <p className="text-muted-foreground/50 text-xs mt-4">© {new Date().getFullYear()} Le Navy. Tous droits réservés.</p>
  </footer>
);

export default Footer;
