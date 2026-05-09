import { Link } from "wouter";
import { ShoppingBag, User, Menu, X, Search, Languages } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          className="text-xl font-semibold tracking-widest uppercase hover:text-primary transition-colors"
        >
          BENNY
        </button>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/products" className="p-2 hidden sm:block text-foreground hover:text-primary transition-colors">
            <Search size={20} />
          </Link>
          <Link href="/auth" className="p-2 text-foreground hover:text-primary transition-colors">
            <User size={20} />
          </Link>
          <button 
            onClick={() => window.location.href = '/cart'}
            className="p-2 text-foreground hover:text-primary transition-colors relative"
          >
            <ShoppingBag size={20} />
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground rounded-full text-[10px] font-bold flex items-center justify-center pointer-events-none"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t overflow-hidden bg-background"
          >
            <div className="flex flex-col p-4 space-y-4">
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
