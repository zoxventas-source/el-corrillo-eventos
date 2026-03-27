import { motion } from "framer-motion";
import { MapPin, Clock, Car } from "lucide-react";

const LocationSection = () => (
  <section id="ubicacion" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">
          Ubicación
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Cómo llegar
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
              <MapPin className="text-primary-foreground" size={20} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                Dirección
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Ruta 28 Km 1, Av. Venancio Castro 1575
                <br />
                Pilar, Buenos Aires, Argentina
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
              <Car className="text-primary-foreground" size={20} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                Acceso
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Cerca de José C. Paz, con fácil acceso desde Panamericana y Ruta 8. Amplio estacionamiento disponible.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
              <Clock className="text-primary-foreground" size={20} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                Horario de atención
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Lunes a Sábados de 10:00 a 19:00 hs
                <br />
                Domingos con cita previa
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
        >
          <iframe
            title="Ubicación Quinta El Corrillo"
            src="https://www.google.com/maps/place/EL+CORRILLO+Eventos/@-34.4711127,-58.9192872,465m/data=!3m1!1e3!4m10!1m2!2m1!1ssalones+de+eventos!3m6!1s0x95bc9ddad34d2dfd:0x58d3816d0ab4c30e!8m2!3d-34.4707959!4d-58.9178732!15sChJzYWxvbmVzIGRlIGV2ZW50b3OSARZmdW5jdGlvbl9yb29tX2ZhY2lsaXR54AEA!16s%2Fg%2F11gjw3fzly?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
