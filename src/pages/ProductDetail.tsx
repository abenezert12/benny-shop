import { AppLayout } from "@/components/layout/AppLayout";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data";
import { useCart } from "@/hooks/useCart";
import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "wouter";
import { Star, StarHalf, Minus, Plus, Heart, Share2, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  
  const [mainImage, setMainImage] = useState(product?.images[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  
  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
      setSelectedColor(product.colors?.[0] || "");
      setSelectedSize(product.sizes?.[0] || "");
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/products">Back to Shop</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      color: selectedColor,
      size: selectedSize,
    });
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-primary text-primary" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-4 h-4 fill-primary text-primary" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-muted" />);
      }
    }
    return stars;
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-muted-foreground mb-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={mainImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square overflow-hidden bg-muted border-2 transition-all ${
                      mainImage === img ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {product.badge && (
              <div className="mb-4">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 tracking-wider uppercase">
                  {product.badge}
                </span>
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-2xl font-semibold">${product.price}</div>
              <div className="flex items-center space-x-1 border-l pl-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-sm text-muted-foreground ml-2">({product.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="prose text-muted-foreground mb-8">
              <p>{product.description}</p>
            </div>

            {/* Options */}
            <div className="space-y-6 mb-8">
              {product.colors && product.colors.length > 0 && (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm uppercase tracking-wider">Color: <span className="text-muted-foreground font-normal">{selectedColor}</span></span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border text-sm transition-all ${
                          selectedColor === color 
                            ? "border-foreground bg-foreground text-background" 
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm uppercase tracking-wider">Size: <span className="text-muted-foreground font-normal">{selectedSize}</span></span>
                    <button className="text-sm text-muted-foreground underline decoration-1 underline-offset-2">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center border text-sm transition-all ${
                          selectedSize === size 
                            ? "border-foreground bg-foreground text-background" 
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <span className="font-medium text-sm uppercase tracking-wider mb-2 block">Quantity</span>
                <div className="flex items-center w-32 border">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    readOnly
                    className="w-full text-center p-2 border-none outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="flex-1 h-14 text-base"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-6 sm:px-8"
                onClick={() => toast.success("Added to wishlist")}
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y text-sm">
              <div className="flex items-center text-muted-foreground">
                <Truck className="w-4 h-4 mr-3" />
                <span>Free shipping over $100</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <RefreshCw className="w-4 h-4 mr-3" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <ShieldCheck className="w-4 h-4 mr-3" />
                <span>2-year warranty</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Share2 className="w-4 h-4 mr-3" />
                <button className="hover:text-foreground transition-colors underline decoration-1 underline-offset-2">Share</button>
              </div>
            </div>
            
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold tracking-tight">You might also like</h2>
              <Link href={`/products?category=${product.category}`} className="text-sm font-medium hover:text-primary transition-colors">
                View all in {product.category}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
