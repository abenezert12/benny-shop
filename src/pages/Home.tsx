import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data";
import { handleImageError } from "@/lib/imageUtils";
import { motion } from "framer-motion";

export default function Home() {
  // Featured products: include one from Clothing and one from Shoes, plus Best Sellers
  const clothingProduct = products.find(p => p.category === "Clothing");
  const shoesProduct = products.find(p => p.category === "Shoes");
  const bestSellers = products.filter(p => p.badge === "Best Seller").slice(0, 2);
  
  const featuredProducts = [
    ...(clothingProduct ? [clothingProduct] : []),
    ...(shoesProduct ? [shoesProduct] : []),
    ...bestSellers
  ].slice(0, 4);
  
  const newArrivals = products.filter(p => p.badge === "New").slice(0, 4);

  const categories = [
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Clothing", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Shoes", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Hero background" 
            className="w-full h-full object-cover object-center"
            onError={handleImageError}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
              Benny Shop
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-4">
              Elevate your everyday with our curated collection of premium objects, 
              designed for the modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
              <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 rounded-none text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14" asChild>
                <Link href="/products">Shop the Collection</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-none text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14" asChild>
                <Link href="/products?category=New">View New Arrivals</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Category Strip */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">Shop by Category</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
            {categories.map((category, idx) => (
              <Link key={category.name} href={`/products?category=${category.name}`} className="group block relative aspect-[4/5] overflow-hidden bg-muted rounded-lg">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 rounded-lg" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-6">
                  <h3 className="text-white text-sm sm:text-base lg:text-xl font-medium tracking-wide flex items-center justify-between">
                    {category.name}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2">Featured Highlights</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Our most coveted pieces this season.</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center text-sm font-medium hover:text-primary transition-colors">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-6 sm:mt-8 sm:hidden">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Split Feature */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-square md:aspect-[4/5] bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
            <div className="order-1 md:order-2 md:pl-12 lg:pl-24 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Designed for longevity.<br />Crafted with intention.
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We believe that the objects you interact with daily should be both beautiful and functional. 
                Our approach to design removes the unnecessary, leaving only what matters. 
                Every material is carefully sourced, every detail meticulously considered.
              </p>
              <div className="pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="px-0 h-auto text-base flex items-center group">
                      Discover Our Process
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Discover Our Process</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="whitespace-pre-line">
                      Benny Shop is a modern ecommerce platform crafted to deliver a fast, seamless, and visually engaging shopping experience. Built with a focus on clean design, responsive performance, and intuitive user interaction, BennyShop combines modern web technologies with elegant UI to create a smooth digital marketplace for today’s users.
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-4">Just Arrived</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">Explore the latest additions to our collection.</p>
          </div>
          
          {/* Rolling Images Carousel */}
          <div className="relative overflow-hidden rounded-lg bg-muted touch-pan-x">
            <div className="flex animate-scroll hover:pause-animation active:pause-animation">
              {[...newArrivals, ...newArrivals].map((product, index) => (
                <div key={`${product.id}-${index}`} className="flex-shrink-0 w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 mx-1 xs:mx-2 sm:mx-3 md:mx-4">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-md hover:shadow-lg active:shadow-xl transition-all duration-300 cursor-pointer">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 active:scale-105"
                      onError={handleImageError}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 active:bg-black/30 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 md:p-6 text-white">
                      <h3 className="font-semibold text-xs xs:text-sm sm:text-base md:text-lg mb-1 line-clamp-2 leading-tight">{product.name}</h3>
                      <p className="text-xs sm:text-sm opacity-90 font-medium">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/products?category=New">View All New Arrivals</Link>
            </Button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
