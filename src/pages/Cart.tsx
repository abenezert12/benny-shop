import { AppLayout } from "@/components/layout/AppLayout";
import { useCart } from "@/hooks/useCart";
import { Link } from "wouter";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();
  
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-24 max-w-lg text-center">
          <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4 tracking-tight">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8 text-lg">Looks like you haven't added anything to your cart yet.</p>
          <Button size="lg" className="w-full sm:w-auto px-12 h-14 text-base" asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground mb-12">You have {totalItems} item{totalItems !== 1 ? 's' : ''} in your cart.</p>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Cart Items */}
          <div className="flex-1 w-full">
            <div className="hidden sm:grid sm:grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-muted-foreground uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="divide-y">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div 
                    key={`${item.id}-${item.color}-${item.size}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0, padding: 0, margin: 0, overflow: 'hidden' }}
                    className="py-6 sm:py-8 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center"
                  >
                    <div className="col-span-6 flex items-center w-full">
                      <Link href={`/products/${item.id}`} className="shrink-0 relative block">
                        <div className="w-24 h-32 sm:w-24 sm:h-24 bg-muted overflow-hidden rounded-sm">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                      </Link>
                      <div className="ml-4 flex-1">
                        <Link href={`/products/${item.id}`} className="font-medium text-base hover:underline decoration-1 underline-offset-4 line-clamp-2 mb-1">
                          {item.name}
                        </Link>
                        {item.color && (
                          <div className="text-sm text-muted-foreground">Color: {item.color}</div>
                        )}
                        {item.size && (
                          <div className="text-sm text-muted-foreground">Size: {item.size}</div>
                        )}
                        {/* Mobile price */}
                        <div className="sm:hidden mt-2 font-semibold">
                          ${item.price}
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 hidden sm:block text-center font-medium">
                      ${item.price}
                    </div>
                    
                    <div className="col-span-2 flex justify-between sm:justify-center items-center w-full sm:w-auto mt-4 sm:mt-0">
                      <div className="flex items-center border rounded-sm h-10 w-28">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.color, item.size)}
                          className="flex-1 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.color, item.size)}
                          className="flex-1 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      {/* Mobile Remove & Total */}
                      <div className="sm:hidden flex items-center space-x-4">
                        <div className="font-bold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button 
                          onClick={() => removeItem(item.id, item.color, item.size)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-2 hidden sm:flex justify-end items-center space-x-4 w-full">
                      <div className="font-semibold text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.color, item.size)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0 lg:sticky lg:top-24">
            <div className="bg-muted/30 p-6 md:p-8 rounded-sm">
              <h2 className="text-xl font-bold tracking-tight mb-6 pb-4 border-b">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    Free shipping on orders over $100
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-center py-6 border-t border-b mb-6">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
              
              <Button size="lg" className="w-full h-14 text-base bg-primary hover:bg-primary/90">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground mb-4">Secure checkout. We accept all major credit cards.</p>
                <Link href="/products" className="text-sm font-medium hover:underline decoration-1 underline-offset-4 inline-flex items-center text-muted-foreground hover:text-foreground">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
