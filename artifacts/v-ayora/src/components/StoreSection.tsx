import { useState } from "react";
import { motion } from "framer-motion";
import { storeProducts, type ProductSize } from "@/data/products";
import { ExternalLink, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function StoreSection() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="prints" className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <div className="text-primary mb-6 flex justify-center">✦</div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-foreground mb-6">
            Ediciones Limitadas
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground font-light">
            Reproducciones fine art sobre papel de algodón Hahnemühle. Cada print es intervenido sutilmente a mano, asegurando que no existan dos copias idénticas.
          </p>
          <div className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground/60 flex items-center justify-center gap-4">
            <span>Envío Nacional e Internacional</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>Pago vía Transferencia</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16">
          {storeProducts.map((product) => (
            <StoreCard key={product.id} product={product} formatPrice={formatPrice} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoreCard({ product, formatPrice }: { product: any, formatPrice: (p: number) => string }) {
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(`Hola, me gustaría adquirir el print "${product.title}" en formato ${selectedSize.name}.`);
    return `https://wa.me/5211234567890?text=${text}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col group"
    >
      <div className="aspect-[4/5] bg-muted/10 p-8 md:p-12 flex items-center justify-center mb-8 hover-spotlight overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="text-primary text-xs uppercase tracking-[0.2em] mb-3">
          {product.series}
        </div>
        <h3 className="font-serif italic text-3xl text-foreground mb-2">
          {product.title}
        </h3>
        <p className="text-xs text-muted-foreground uppercase tracking-[0.1em] mb-8">
          {product.technique}
        </p>

        <div className="mt-auto space-y-6">
          <div className="flex items-center justify-between border-b border-border/50 pb-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-sm text-foreground focus:outline-none hover:text-primary transition-colors uppercase tracking-wider">
                {selectedSize.name.split(' ')[0]} <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border rounded-none">
                {product.sizes.map((size: ProductSize) => (
                  <DropdownMenuItem 
                    key={size.name}
                    className="cursor-pointer text-sm font-sans focus:bg-primary/20 focus:text-primary rounded-none"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-lg font-serif italic text-foreground">
              {formatPrice(selectedSize.price)}
            </span>
          </div>

          <div className="flex gap-4">
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-primary text-primary-foreground text-center uppercase tracking-[0.1em] text-xs hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Adquirir <ExternalLink size={14} />
            </a>
            <a 
              href={`mailto:contacto@vayora.com?subject=Consulta: Print ${product.title}`}
              className="flex-1 py-3 border border-border text-foreground text-center uppercase tracking-[0.1em] text-xs hover:border-primary hover:text-primary transition-colors"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
