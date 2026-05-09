import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data";
import { handleImageError } from "@/lib/imageUtils";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = products.filter(p => p.badge === "Best Seller" || p.badge === "New").slice(0, 4);
  const newArrivals = products.filter(p => !featuredProducts.includes(p)).slice(0, 4);

  const categories = [
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Clothing", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Home", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Hero background" 
            className="w-full h-full object-cover object-center"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Refined Essentials.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
              Elevate your everyday with our curated collection of premium objects, 
              designed for the modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 rounded-none text-base px-8 h-14" asChild>
                <Link href="/products">Shop the Collection</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-none text-base px-8 h-14" asChild>
                <Link href="/products?category=New">View New Arrivals</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Category Strip */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Shop by Category</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {categories.map((category, idx) => (
              <Link key={category.name} href={`/products?category=${category.name}`} className="group block relative aspect-[4/5] overflow-hidden bg-muted">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-white text-xl font-medium tracking-wide flex items-center justify-between">
                    {category.name}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Featured Highlights</h2>
              <p className="text-muted-foreground">Our most coveted pieces this season.</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center text-sm font-medium hover:text-primary transition-colors">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 sm:hidden">
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
                <Button variant="link" className="px-0 h-auto text-base" asChild>
                  <Link href="/about" className="flex items-center group">
                    Discover Our Process 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Just Arrived</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore the latest additions to our collection.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
