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
    id: "a2",
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
    id: "e5",
    name: "Wireless Earbuds",
    price: 149,
    category: "Electronics",
    rating: 4.6,
    reviewCount: 387,
    description: "Premium wireless earbuds with active noise cancellation and 30-hour battery life. Crystal clear sound quality.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c4b5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    badge: "New"
  },
  {
    id: "e6",
    name: "Smart Watch",
    price: 299,
    category: "Electronics",
    rating: 4.8,
    reviewCount: 542,
    description: "Advanced smartwatch with health monitoring, GPS, and seamless smartphone integration. Premium build quality.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true
  },
  // More Clothing
  {
    id: "c4",
    name: "Cotton T-Shirt",
    price: 45,
    category: "Clothing",
    rating: 4.3,
    reviewCount: 89,
    description: "Soft, breathable organic cotton t-shirt with a comfortable fit. Perfect for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["White", "Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "c5",
    name: "Denim Jacket",
    price: 120,
    category: "Clothing",
    rating: 4.5,
    reviewCount: 156,
    description: "Classic denim jacket with a timeless design. Made from premium cotton denim for durability and comfort.",
    images: [
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  // More Shoes
  {
    id: "s4",
    name: "Running Shoes",
    price: 180,
    category: "Shoes",
    rating: 4.7,
    reviewCount: 298,
    description: "High-performance running shoes with advanced cushioning and support. Designed for long-distance comfort.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Black", "White", "Blue"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: "s5",
    name: "Leather Boots",
    price: 250,
    category: "Shoes",
    rating: 4.9,
    reviewCount: 187,
    description: "Premium leather boots crafted for durability and style. Waterproof and weather-resistant for all seasons.",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554735490-5974588cbc4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    badge: "New",
    colors: ["Brown", "Black"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  // More Accessories
  {
    id: "a3",
    name: "Leather Backpack",
    price: 180,
    category: "Accessories",
    rating: 4.6,
    reviewCount: 234,
    description: "Handcrafted leather backpack with multiple compartments. Perfect for work, travel, or everyday use.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622260613186-01c31c0b1a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    inStock: true,
    colors: ["Brown", "Black"]
  }
]; 
