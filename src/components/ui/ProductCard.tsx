import { Link } from "wouter";
import { Product } from "@/lib/data";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "./button";
import { toast } from "sonner";
import { handleImageError } from "@/lib/imageUtils";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
    
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <motion.div 
        className="flex flex-col h-full space-y-4 relative"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={handleImageError}
          />
          
          {product.badge && (
            <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-2 py-1 tracking-wider uppercase z-10">
              {product.badge}
            </div>
          )}
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] flex items-center justify-center z-10">
              <span className="bg-background text-foreground text-sm font-semibold px-4 py-2 tracking-wider uppercase">
                Out of Stock
              </span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
            <Button 
              className="w-full bg-background text-foreground hover:bg-primary hover:text-primary-foreground shadow-lg"
              disabled={!product.inStock}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-base line-clamp-1">{product.name}</h3>
            <span className="font-semibold ml-2">${product.price}</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          
          <div className="flex items-center text-xs text-muted-foreground mt-auto">
            <Star className="w-3 h-3 fill-primary text-primary mr-1" />
            <span className="font-medium text-foreground">{product.rating}</span>
            <span className="mx-1">·</span>
            <span>{product.reviewCount} reviews</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
