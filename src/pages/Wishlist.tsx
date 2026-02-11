import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Wishlist = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <Bookmark className="w-10 h-10 text-foreground/30 mb-4" />
        <h1 className="font-serif text-2xl tracking-wide mb-3">Your Wishlist</h1>
        <p className="text-sm text-foreground/60 mb-8">No saved items yet.</p>
        <Link
          to="/category/woman"
          className="text-xs uppercase tracking-widest underline underline-offset-4 text-foreground/80 hover:text-foreground"
        >
          Explore Collection
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
