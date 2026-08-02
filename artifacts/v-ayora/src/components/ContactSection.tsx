import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="contacto" className="pt-24 md:pt-48 pb-12 bg-background flex flex-col">
      <div className="container mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center mb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column: Direct Contact */}
          <div>
            <div className="text-primary mb-6">✦</div>
            <h2 className="text-5xl md:text-7xl font-serif italic text-foreground mb-8">
              Contacto
            </h2>
            <p className="text-muted-foreground font-light mb-12 max-w-sm">
              Para consultas sobre adquisición de obra original, comisiones privadas o bookings de audio/visuales.
            </p>
            
            <div className="space-y-8">
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
                className="text-foreground hover:text-primary transition-colors ml-4"
              >
                {subscribed ? "Suscrito" : <ArrowRight size={20} />}
              </button>
            </form>
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
