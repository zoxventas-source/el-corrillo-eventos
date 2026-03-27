import { motion } from "framer-motion";
import weddingImg from "@/assets/gallery-wedding.jpg";
import birthdayImg from "@/assets/gallery-birthday.jpg";
import corporateImg from "@/assets/gallery-corporate.jpg";
import gardensImg from "@/assets/gallery-gardens.jpg";
import salonImg from "@/assets/gallery-salon.jpg";

const images = [
  { src: weddingImg, alt: "Boda en El Corrillo", label: "Bodas" },
  { src: salonImg, alt: "Salón principal", label: "Salón" },
  { src: birthdayImg, alt: "Cumpleaños", label: "Cumpleaños" },
  { src: corporateImg, alt: "Evento corporativo", label: "Corporativo" },
  { src: gardensImg, alt: "Jardines y parque", label: "Jardines" },
];

const GallerySection = () => (
  <section id="galeria" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">
          Galería
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Momentos que inspiran
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${
              i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/40 transition-colors duration-500 flex items-end p-6">
              <span className="font-display text-lg text-cream opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
