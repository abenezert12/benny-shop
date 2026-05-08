export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Electronics" | "Clothing" | "Accessories" | "Home";
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
    category: "Clothing",
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
    id: "c4",
    name: "Silk Scarf",
    price: 65,
    category: "Clothing",
    rating: 4.6,
    reviewCount: 89,
    description: "100% mulberry silk scarf with hand-rolled edges. Adds a touch of elegance to any outfit.",
    images: [
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601140081636-f60fa696cb95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Cream", "Burgundy"]
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
  {
    id: "a4",
    name: "Canvas Tote",
    price: 45,
    category: "Accessories",
    rating: 4.8,
    reviewCount: 423,
    description: "Heavyweight cotton canvas tote bag. Perfect for groceries, gym clothes, or everyday carry. Reinforced handles for durability.",
    images: [
      "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Natural", "Olive", "Navy"]
  },
  // Home
  {
    id: "h1",
    name: "Ceramic Mug Set",
    price: 55,
    category: "Home",
    rating: 4.7,
    reviewCount: 156,
    description: "Set of two handcrafted ceramic mugs. Finished with a beautiful matte glaze. Dishwasher and microwave safe.",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610706240212-0761e38bf3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1481833758786-ceed163e90cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    badge: "New"
  },
  {
    id: "h2",
    name: "Linen Throw Blanket",
    price: 120,
    category: "Home",
    rating: 4.9,
    reviewCount: 88,
    description: "Stonewashed linen throw blanket with fringed edges. Gets softer with every wash. Perfect for draping over a sofa or bed.",
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596434444589-9a2c3a579691?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596434444589-9a2c3a579691?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Charcoal", "Oatmeal", "Sage"]
  },
  {
    id: "h3",
    name: "Desk Organizer",
    price: 75,
    category: "Home",
    rating: 4.4,
    reviewCount: 67,
    description: "Solid walnut wood desk organizer. Keeps your pens, phone, and small accessories elegantly arranged.",
    images: [
      "https://images.unsplash.com/photo-1593640498182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497215848147-6b6680cbac23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: false
  },
  {
    id: "h4",
    name: "Scented Candle",
    price: 38,
    category: "Home",
    rating: 4.8,
    reviewCount: 512,
    description: "Hand-poured soy wax candle with notes of cedarwood, vetiver, and subtle smoke. 50-hour burn time.",
    images: [
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608408843575-d14c27429183?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596434444589-9a2c3a579691?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    badge: "Best Seller"
  }
];
