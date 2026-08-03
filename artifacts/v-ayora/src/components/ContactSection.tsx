import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useSubmitContact, useSubscribeNewsletter } from "@workspace/api-client-react";

export default function ContactSection() {
  // Newsletter
  const [email, setEmail] = useState("");
  const [subscribeMsg, setSubscribeMsg] = useState<string | null>(null);
  const newsletterMutation = useSubscribeNewsletter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    newsletterMutation.mutate(
      { data: { email } },
      {
        onSuccess: () => {
          setSubscribeMsg("Bienvenido al archivo.");
          setEmail("");
          setTimeout(() => setSubscribeMsg(null), 4000);
        },
        onError: (err: unknown) => {
          const msg =
            (err as { response?: { data?: { error?: string } } })?.response?.data?.error ??
            "Algo salió mal. Intenta de nuevo.";
          setSubscribeMsg(msg);
          setTimeout(() => setSubscribeMsg(null), 4000);
        },
      }
    );
  };

  // Contact form
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formMsg, setFormMsg] = useState<string | null>(null);
  const contactMutation = useSubmitContact();

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(
      { data: form },
      {
        onSuccess: () => {
          setFormMsg("Mensaje recibido. Nos ponemos en contacto pronto.");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setFormMsg(null), 5000);
        },
        onError: () => {
          setFormMsg("Algo salió mal. Escríbenos directamente a contacto@vayora.com");
          setTimeout(() => setFormMsg(null), 5000);
        },
      }
    );
  };

  return (
    <section id="contacto" className="pt-24 md:pt-48 pb-12 bg-background flex flex-col">
      <div className="container mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center mb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

          {/* Left Column: Direct Contact + Form */}
          <div>
            <div className="text-primary mb-6">✦</div>
            <h2 className="text-5xl md:text-7xl font-serif italic text-foreground mb-8">
              Contacto
            </h2>
            <p className="text-muted-foreground font-light mb-12 max-w-sm">
              Para consultas sobre adquisición de obra original, comisiones privadas o bookings de audio/visuales.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:contacto@vayora.com"
                className="block text-2xl md:text-3xl font-serif italic text-foreground hover:text-primary transition-colors"
              >
                contacto@vayora.com
              </a>

              <a
                href="https://wa.me/5211234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground border border-border px-6 py-3 hover:border-primary hover:text-primary transition-colors"
              >
                WhatsApp Directo <ExternalLink size={14} />
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContact} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="NOMBRE"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  className="w-full bg-transparent border-b border-border/50 focus:border-primary outline-none py-3 text-sm font-sans tracking-widest uppercase placeholder:text-muted-foreground/40 text-foreground transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="CORREO ELECTRÓNICO"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  className="w-full bg-transparent border-b border-border/50 focus:border-primary outline-none py-3 text-sm font-sans tracking-widest uppercase placeholder:text-muted-foreground/40 text-foreground transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="MENSAJE"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border/50 focus:border-primary outline-none py-3 text-sm font-sans tracking-widest uppercase placeholder:text-muted-foreground/40 text-foreground transition-colors resize-none"
                />
              </div>

              {formMsg && (
                <p className="text-xs tracking-widest uppercase text-primary">{formMsg}</p>
              )}

              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground border border-foreground px-8 py-3 hover:border-primary hover:text-primary transition-colors disabled:opacity-40"
              >
                {contactMutation.isPending ? "Enviando..." : "Enviar mensaje"}
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Right Column: Newsletter */}
          <div className="flex flex-col justify-center lg:border-l border-border/50 lg:pl-24">
            <h3 className="text-xl font-serif italic text-foreground mb-4">
              Archivo y Actualizaciones
            </h3>
            <p className="text-sm text-muted-foreground font-light mb-8 max-w-sm">
              Nuevas piezas, aperturas de estudio y próximas fechas en festivales.
              Sin spam, solo cuando la materia lo amerite.
            </p>

            <form onSubmit={handleSubscribe} className="flex border-b border-foreground focus-within:border-primary transition-colors pb-2">
              <input
                type="email"
                placeholder="TU CORREO ELECTRÓNICO"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-none outline-none w-full text-sm font-sans tracking-widest uppercase placeholder:text-muted-foreground/50 text-foreground"
              />
              <button
                type="submit"
                disabled={newsletterMutation.isPending}
                className="text-foreground hover:text-primary transition-colors ml-4 disabled:opacity-40"
              >
                {newsletterMutation.isPending ? "..." : <ArrowRight size={20} />}
              </button>
            </form>

            {subscribeMsg && (
              <p className="mt-4 text-xs tracking-widest uppercase text-primary">{subscribeMsg}</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 md:px-12 mt-auto border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif italic text-2xl text-foreground">
          V. Ayora
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">SoundCloud</a>
          <a href="#" className="hover:text-primary transition-colors">Spotify</a>
        </div>

        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50">
          © {new Date().getFullYear()} V. Ayora
        </div>
      </footer>
    </section>
  );
}
