import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, type Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { X, ExternalLink } from "lucide-react";

export default function GallerySection() {
  const [selectedPiece, setSelectedPiece] = useState<Product | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getWhatsAppLink = (product: Product) => {
    const text = encodeURIComponent(`Hola, me interesa adquirir un print de la obra "${product.title}" de la serie ${product.series}.`);
    return `https://wa.me/5211234567890?text=${text}`;
  };

  const getEmailLink = (product: Product) => {
    const subject = encodeURIComponent(`Consulta: ${product.title}`);
    const body = encodeURIComponent(`Hola, me gustaría recibir más información sobre la pieza original "${product.title}".`);
    return `mailto:contacto@vayora.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="obra" className="py-32 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div>
          <div className="text-primary mb-6 flex justify-center md:justify-start">✦</div>
          <h2 className="text-5xl md:text-7xl font-serif italic text-foreground">
            Sala de Obra
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-muted-foreground leading-relaxed font-sans font-light">
          Texturas extraídas del fuego y la tierra. Cada pieza es un registro de la luz que no volverá a caer de la misma forma.
        </p>
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-8 md:gap-y-32 items-center">
        {products.map((product, i) => {
          // Calculate span and offset for asymmetrical layout
          const isWide = i % 4 === 0 || i % 4 === 3;
          const spanClass = isWide ? "md:col-span-8" : "md:col-span-4";
          const offsetClass = i % 2 === 0 ? "" : "md:mt-32";
          
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={cn("group cursor-pointer", spanClass, offsetClass)}
              onClick={() => setSelectedPiece(product)}
            >
              <div className="overflow-hidden bg-muted/20">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-auto object-cover hover-spotlight aspect-[4/5] md:aspect-auto"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <h3 className="font-serif italic text-2xl text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center text-xs tracking-[0.1em] uppercase text-muted-foreground">
                  <span>{product.technique}</span>
                  <span>{product.year}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Artwork Modal */}
      <AnimatePresence>
        {selectedPiece && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setSelectedPiece(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full md:h-auto max-h-[100dvh] md:max-h-[90vh] bg-card md:border border-border flex flex-col lg:flex-row overflow-y-auto md:overflow-hidden rounded-none shadow-2xl"
            >
              <button 
                onClick={() => setSelectedPiece(null)}
                className="absolute top-6 right-6 z-10 text-muted-foreground hover:text-foreground bg-background/50 backdrop-blur-sm p-2 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="w-full lg:w-[60%] h-[50vh] md:h-auto bg-black flex items-center justify-center p-6 md:p-12">
                <img 
                  src={selectedPiece.image} 
                  alt={selectedPiece.title}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>

              <div className="w-full lg:w-[40%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-card overflow-y-auto">
                <div className="mb-4 text-primary text-sm uppercase tracking-[0.2em]">
                  Serie: {selectedPiece.series}
                </div>
                
                <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
                  {selectedPiece.title}
                </h2>
                
                <div className="space-y-4 text-muted-foreground font-light mb-12">
                  <p><span className="text-foreground">Técnica:</span> {selectedPiece.technique}</p>
                  <p><span className="text-foreground">Año:</span> {selectedPiece.year}</p>
                  <p><span className="text-foreground">Disponibilidad:</span> {selectedPiece.available ? 'Disponible' : 'Colección Privada'}</p>
                </div>

                {selectedPiece.available && (
                  <div className="mt-auto">
                    <div className="border-t border-border pt-8 mb-8">
                      <h4 className="text-xs uppercase tracking-[0.2em] mb-4 text-foreground">Formatos de Print Disponibles</h4>
                      <ul className="space-y-3">
                        {selectedPiece.sizes.map((size) => (
                          <li key={size.name} className="flex justify-between text-sm text-muted-foreground border-b border-border/50 pb-2">
                            <span>{size.name}</span>
                            <span className="text-foreground">{formatPrice(size.price)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <a 
                        href={getWhatsAppLink(selectedPiece)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-primary text-primary-foreground text-center uppercase tracking-[0.1em] text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                      >
                        Adquirir Print <ExternalLink size={16} />
                      </a>
                      <a 
                        href={getEmailLink(selectedPiece)}
                        className="w-full py-4 border border-border text-foreground text-center uppercase tracking-[0.1em] text-sm hover:border-primary hover:text-primary transition-colors"
                      >
                        Consultar Pieza Original
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
