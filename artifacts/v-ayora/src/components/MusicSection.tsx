import { motion } from "framer-motion";

export default function MusicSection() {
  const hitos = [
    { year: "2024", event: "Art Installation & DJ Set", location: "Burning Man, Black Rock City" },
    { year: "2023", event: "Live Visuals", location: "Coachella Valley Music and Arts Festival" },
    { year: "2023", event: "Immersive Room", location: "Mutek MX, Ciudad de México" },
    { year: "2022", event: "A/V Performance", location: "Sónar Festival, Barcelona" },
  ];

  return (
    <section id="musica" className="py-24 md:py-48 relative overflow-hidden bg-background">
      {/* Background ambient image */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-[800px] opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/80 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <img 
          src="/attached_assets/generated_images/festival-1.jpg" 
          alt="Festival Atmosphere"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="text-primary mb-6">✦</div>
          <h2 className="text-5xl md:text-7xl font-serif italic text-foreground mb-8">
            Ritual & Sonido
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-16 max-w-xl">
            La obra visual se expande hacia la vibración. Sets diseñados para la hora antes del amanecer. Espacios donde la música electrónica, el ambient y el diseño de iluminación convergen en una sola experiencia inmersiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mt-24">
          
          <div className="lg:col-span-5 space-y-12">
            <h3 className="text-sm uppercase tracking-[0.3em] text-foreground border-b border-border/50 pb-4">
              Selección Sonora
            </h3>
            
            {/* Spotify Embed Placeholder */}
            <div className="bg-card/50 border border-border p-4 rounded-xl backdrop-blur-sm">
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4wG1zZBw7hm?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="V. Ayora Soundscape"
                className="opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>

            <div className="bg-muted/10 p-6 border border-border/30 rounded-none flex items-center justify-between">
              <div>
                <div className="text-xs text-primary uppercase tracking-[0.1em] mb-1">SoundCloud</div>
                <div className="font-serif italic text-xl">Live at Black Rock Desert</div>
              </div>
              <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              <img 
                src="/attached_assets/generated_images/festival-2.jpg" 
                alt="Live Performance" 
                className="w-full aspect-[4/3] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="hidden sm:block mt-16 bg-muted/20">
                {/* Intentional blank space/placeholder in layout to stagger images */}
              </div>
            </div>

            <h3 className="text-sm uppercase tracking-[0.3em] text-foreground border-b border-border/50 pb-4 mb-8">
              Hitos & Presencia
            </h3>
            
            <div className="space-y-8">
              {hitos.map((hito, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group"
                >
                  <span className="font-serif italic text-2xl text-muted-foreground group-hover:text-primary transition-colors min-w-[80px]">
                    {hito.year}
                  </span>
                  <div>
                    <h4 className="text-foreground tracking-wide font-light">{hito.event}</h4>
                    <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground mt-1">{hito.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
