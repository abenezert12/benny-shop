export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Electronics" | "Clothing" | "Accessories" | "Shoes";
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  inStock: boolean;
  badge?: "New" | "Best Seller" | "Sale";
  colors?: string[];
  sizes?: string[];
};

export const products: Product[] = [
  // Electronics
  {
    id: "e1",
    name: "AirPods Pro",
    price: 249,
    category: "Electronics",
    rating: 4.8,
    reviewCount: 1245,
    description: "Active Noise Cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you. A more customizable fit for all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606220838315-056192d5e921?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "e2",
    name: "MacBook Stand",
    price: 89,
    category: "Electronics",
    rating: 4.5,
    reviewCount: 312,
    description: "Elevate your MacBook to a comfortable viewing height. Crafted from a single piece of premium aluminum to match your setup.",
    images: [
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Silver", "Space Gray"]
  },
  {
    id: "e3",
    name: "Mechanical Keyboard",
    price: 179,
    category: "Electronics",
    rating: 4.9,
    reviewCount: 89,
    description: "A premium mechanical keyboard with hot-swappable switches and a sleek aluminum chassis. Features tactile brown switches for the perfect typing experience.",
    images: [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555532538-dcdbd01d3738?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    badge: "New"
  },
  {
    id: "e4",
    name: "USB-C Hub",
    price: 69,
    category: "Electronics",
    rating: 4.2,
    reviewCount: 56,
    description: "Expand your connectivity with this compact 7-in-1 USB-C hub. Includes 4K HDMI, SD card reader, and multiple USB ports.",
    images: [
      "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: false
  },
  // Clothing
  {
    id: "c1",
    name: "Merino Wool Sweater",
    price: 145,
    category: "Clothing",
    rating: 4.7,
    reviewCount: 231,
    description: "Ultra-soft, lightweight merino wool sweater. Perfect for layering. Naturally breathable and odor-resistant.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Navy", "Charcoal", "Oatmeal"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "c2",
    name: "Linen Trousers",
    price: 98,
    category: "Clothing",
    rating: 4.4,
    reviewCount: 112,
    description: "Breathable European linen trousers with a relaxed fit. The perfect blend of comfort and refined style for warm days.",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Sand", "Olive", "Black"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: "c3",
    name: "Leather Sneakers",
    price: 220,
    category: "Shoes",
    rating: 4.8,
    reviewCount: 456,
    description: "Minimalist leather sneakers handcrafted in Italy. Features premium full-grain leather and a durable rubber sole.",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    badge: "Sale",
    colors: ["White", "Black"],
    sizes: ["8", "9", "10", "11", "12"]
  },
  {
    id: "s1",
    name: "Trail Runner",
    price: 138,
    category: "Shoes",
    rating: 4.7,
    reviewCount: 182,
    description: "Lightweight trail running shoes with grippy rubber soles and breathable mesh. Built for comfort across paths and city streets.",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Navy", "Sage"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: "s2",
    name: "Everyday Loafers",
    price: 160,
    category: "Shoes",
    rating: 4.6,
    reviewCount: 94,
    description: "Sleek leather loafers with a cushioned footbed and refined silhouette. Perfect for work, travel, and evenings out.",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596702762285-182ff435c567?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Tan", "Black"],
    sizes: ["8", "9", "10", "11", "12"]
  },
  {
    id: "s3",
    name: "Classic Court Sneakers",
    price: 125,
    category: "Shoes",
    rating: 4.8,
    reviewCount: 205,
    description: "Clean court sneakers with leather uppers and durable rubber soles. A versatile pair for everyday style.",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["White", "Beige"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  // Accessories
  {
    id: "a1",
    name: "Minimalist Watch",
    price: 349,
    category: "Accessories",
    rating: 4.9,
    reviewCount: 342,
    description: "A stunning timepiece featuring a sapphire crystal face, Swiss movement, and Italian leather strap. Designed for the modern purist.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "a2",
    name: "Leather Wallet",
    price: 85,
    category: "Accessories",
    rating: 4.5,
    reviewCount: 215,
    description: "Slim profile wallet crafted from vegetable-tanned leather. Holds up to 8 cards and cash without the bulk.",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559564101-70bf8159c991?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606509036495-2bd0763261d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525904097878-c0af0cb02ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Tan", "Black", "Brown"]
  },
  {
    id: "a3",
    name: "Sunglasses",
    price: 195,
    category: "Accessories",
    rating: 4.6,
    reviewCount: 178,
    description: "Classic acetate frames with polarized lenses offering 100% UV protection. Timeless style that suits every face shape.",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281501f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Tortoise", "Black"]
  },
]; 
