import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Soy ${form.name}. Quiero consultar por un evento (${form.event}). ${form.message}. Mi email: ${form.email}, Tel: ${form.phone}`;
    window.open(
      `https://wa.me/542304477065?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Contacto
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Hablemos de tu evento
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              Contanos qué tipo de evento tenés en mente y te asesoramos sin compromiso.
              Podés escribirnos por WhatsApp, llamarnos o completar el formulario.
            </p>

            <div className="space-y-5">
              <a href="tel:02304477065" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <Phone size={20} className="text-primary" />
                <span className="font-body text-sm">(0230) 447-7065 / 442-7860</span>
              </a>
              <a
                href="https://wa.me/542304477065"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={20} className="text-primary" />
                <span className="font-body text-sm">WhatsApp</span>
              </a>
              <a href="mailto:info@elcorrilloeventos.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <Mail size={20} className="text-primary" />
                <span className="font-body text-sm">info@elcorrilloeventos.com</span>
              </a>
              <a
                href="https://www.facebook.com/QuintaElCorrillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} className="text-primary" />
                <span className="font-body text-sm">Facebook - Quinta El Corrillo</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-lg p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Tu nombre"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <input
                type="email"
                placeholder="Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Teléfono"
                maxLength={30}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <select
                value={form.event}
                onChange={(e) => setForm({ ...form, event: e.target.value })}
                required
                className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="">Tipo de evento</option>
                <option value="Boda">Boda</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Evento empresarial">Evento empresarial</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <textarea
              placeholder="Contanos sobre tu evento..."
              rows={4}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
            />
            <button
              type="submit"
              className="w-full gold-gradient px-8 py-4 rounded-md font-body text-sm uppercase tracking-widest text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Enviar consulta por WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
