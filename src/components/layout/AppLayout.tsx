import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartProvider } from "@/hooks/useCart";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-[100dvh] flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
