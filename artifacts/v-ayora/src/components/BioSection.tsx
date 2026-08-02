import { motion } from "framer-motion";

export default function BioSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#0a0a0a] border-y border-border/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute -top-12 -left-12 text-6xl text-primary/20 font-serif italic hidden md:block">
              "
            </div>
            <h2 className="text-3xl md:text-5xl font-serif italic text-foreground leading-tight relative z-10">
              La obra no busca representar el mundo, sino recordarnos cómo se siente estar vivo dentro de él.
            </h2>
            <div className="w-12 h-[1px] bg-primary mt-8 mb-12" />
            
            <div className="space-y-6 text-sm text-muted-foreground font-light leading-relaxed">
              <p>
                V. Ayora opera en la intersección entre la materia táctil y la experiencia efímera. Su práctica comenzó en la pintura tradicional, pero rápidamente se expandió hacia la alquimia de los materiales: óxidos, cenizas, pigmentos crudos y tierra. 
              </p>
              <p>
                Como creador de experiencias inmersivas, traslada la quietud de su obra plástica al volumen de la música electrónica. Sus sets y diseños espaciales en festivales internacionales buscan crear santuarios temporales; espacios donde el tiempo se suspende y el sonido se convierte en textura.
              </p>
              <p>
                Actualmente reside y produce entre la Ciudad de México y el desierto, buscando constantemente el contraste entre el ruido urbano y el silencio geológico.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative w-full max-w-md aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10" />
              <img 
                src="/attached_assets/generated_images/portrait.jpg" 
                alt="V. Ayora"
                className="w-full h-full object-cover grayscale-[0.5] contrast-125"
              />
              <div className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.2em] text-foreground mix-blend-difference">
                Estudio, 2024
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
