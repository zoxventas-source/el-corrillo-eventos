import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-warm-black py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg text-cream/80">
        El Corrillo <span className="text-gold-glow">Eventos</span>
      </p>
      <p className="font-body text-xs text-cream/40 flex items-center gap-1">
        Hecho con <Heart size={12} className="text-primary" /> en Pilar, Buenos Aires
      </p>
      <p className="font-body text-xs text-cream/40">
        © {new Date().getFullYear()} Quinta El Corrillo. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
