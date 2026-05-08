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

        <Link href="/" className="text-xl font-semibold tracking-widest uppercase">
          BENNY
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">{t("Home")}</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">{t("Shop")}</Link>
          <Link href="/products?category=Electronics" className="hover:text-foreground transition-colors">{t("Tech")}</Link>
          <Link href="/products?category=Clothing" className="hover:text-foreground transition-colors">Wear</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/products" className="p-2 hidden sm:block text-foreground hover:text-primary transition-colors">
            <Search size={20} />
          </Link>
          <Link href="/auth" className="p-2 text-foreground hover:text-primary transition-colors">
            <User size={20} />
          </Link>
          <Link href="/cart" className="p-2 text-foreground hover:text-primary transition-colors relative">
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
          </Link>
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
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Home</Link>
              <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Shop All</Link>
              <Link href="/products?category=Electronics" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Electronics</Link>
              <Link href="/products?category=Clothing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Clothing</Link>
              <Link href="/products?category=Accessories" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Accessories</Link>
              <Link href="/products?category=Home" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Home</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
