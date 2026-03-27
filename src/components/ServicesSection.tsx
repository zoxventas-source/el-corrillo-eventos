import { motion } from "framer-motion";
import { Heart, Cake, Briefcase, UtensilsCrossed, Users, TreePine } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Bodas",
    desc: "El escenario perfecto para el día más importante de tu vida, con jardines y salones que enamoran.",
  },
  {
    icon: Cake,
    title: "Cumpleaños",
    desc: "Celebrá cada año con la fiesta que merecés. Decoración, catering y diversión garantizada.",
  },
  {
    icon: Briefcase,
    title: "Eventos Empresariales",
    desc: "Conferencias, lanzamientos y reuniones corporativas con equipamiento profesional.",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Integral",
    desc: "Menús personalizados con cocina gourmet y servicio de primer nivel para tus invitados.",
  },
  {
    icon: Users,
    title: "+200 Invitados",
    desc: "Capacidad para más de 200 personas en nuestros amplios salones y espacios al aire libre.",
  },
  {
    icon: TreePine,
    title: "Jardines & Parque",
    desc: "Un entorno natural único con parque, jardines y rincones fotogénicos para tu evento.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">
          Nuestros servicios
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Todo lo que necesitás para tu evento
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-lg p-8 text-center hover:border-primary/40 transition-colors group"
          >
            <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {s.title}
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
