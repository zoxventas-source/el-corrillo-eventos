import { motion } from "framer-motion";
import heroImg from "@/assets/hero-venue.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Quinta El Corrillo - salón de eventos en Pilar"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="hero-overlay absolute inset-0" />

    <div className="relative z-10 text-center px-4 max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-cream/80 mb-4"
      >
        Quinta El Corrillo · Pilar, Buenos Aires
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
      >
        Hacé realidad el evento{" "}
        <span className="italic text-gold-glow">de tus sueños</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="font-body text-base md:text-lg text-cream/70 mb-10 max-w-xl mx-auto"
      >
        Amplios jardines, salones elegantes y un servicio integral para que tu
        celebración sea inolvidable.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contacto"
          className="gold-gradient px-8 py-4 rounded-md font-body text-sm uppercase tracking-widest text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Consultá ahora
        </a>
        <a
          href="#galeria"
          className="border border-cream/40 px-8 py-4 rounded-md font-body text-sm uppercase tracking-widest text-cream hover:bg-cream/10 transition-colors"
        >
          Ver galería
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
