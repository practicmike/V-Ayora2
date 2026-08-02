export interface ProductSize {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  title: string;
  series: string;
  technique: string;
  year: number;
  available: boolean;
  image: string;
  dimensions?: string; // used for gallery display
  sizes: ProductSize[];
}

export const artworkSizes: ProductSize[] = [
  { name: "A4 (21 x 29.7 cm)", price: 1200 },
  { name: "A3 (29.7 x 42 cm)", price: 2500 },
  { name: "A1 (59.4 x 84.1 cm)", price: 5500 },
];

export const products: Product[] = [
  {
    id: "obra-001",
    title: "desierto rojo",
    series: "origen",
    technique: "pigmento natural y óleo sobre lienzo crudo",
    year: 2024,
    available: true,
    image: "/attached_assets/generated_images/gallery-1.jpg",
    sizes: artworkSizes,
  },
  {
    id: "obra-002",
    title: "viento fósil",
    series: "origen",
    technique: "arena, ceniza y acrílico",
    year: 2024,
    available: true,
    image: "/attached_assets/generated_images/gallery-2.jpg",
    sizes: artworkSizes,
  },
  {
    id: "obra-003",
    title: "nocturno",
    series: "sombras",
    technique: "tinta y bronce oxidado",
    year: 2023,
    available: true,
    image: "/attached_assets/generated_images/gallery-3.jpg",
    sizes: artworkSizes,
  },
  {
    id: "obra-004",
    title: "estructuras",
    series: "sombras",
    technique: "carbón y concreto líquido",
    year: 2023,
    available: false,
    image: "/attached_assets/generated_images/gallery-4.jpg",
    sizes: artworkSizes,
  },
  {
    id: "obra-005",
    title: "luz de cobre",
    series: "metales",
    technique: "acrílico y polvo de cobre",
    year: 2024,
    available: true,
    image: "/attached_assets/generated_images/gallery-5.jpg",
    sizes: artworkSizes,
  },
  {
    id: "obra-006",
    title: "ruina oxidada",
    series: "metales",
    technique: "óxido de hierro sobre papel de algodón",
    year: 2023,
    available: true,
    image: "/attached_assets/generated_images/gallery-6.jpg",
    sizes: artworkSizes,
  },
];

export const storeProducts: Product[] = [
  {
    id: "print-001",
    title: "eco de cobre",
    series: "prints edition",
    technique: "fine art giclée sobre papel hahnemühle",
    year: 2024,
    available: true,
    image: "/attached_assets/generated_images/store-1.jpg",
    sizes: artworkSizes,
  },
  {
    id: "print-002",
    title: "ceniza lunar",
    series: "prints edition",
    technique: "fine art giclée sobre papel hahnemühle",
    year: 2024,
    available: true,
    image: "/attached_assets/generated_images/store-2.jpg",
    sizes: artworkSizes,
  },
  {
    id: "print-003",
    title: "fuego estático",
    series: "prints edition",
    technique: "fine art giclée sobre papel hahnemühle",
    year: 2024,
    available: true,
    image: "/attached_assets/generated_images/store-3.jpg",
    sizes: artworkSizes,
  },
];
