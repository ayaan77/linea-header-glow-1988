import { ArrowRight, X, Minus, Plus, Search, Bookmark, User, ShoppingBag as ShoppingBagIcon, ChevronRight, HelpCircle, MapPin, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ShoppingBag from "./ShoppingBag";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";
import haloImage from "@/assets/halo.jpg";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}

interface NavigationProps {
  isTransparent?: boolean;
}

const Navigation = ({ isTransparent = false }: NavigationProps) => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [offCanvasType, setOffCanvasType] = useState<'favorites' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Pantheon", price: "£2,850", image: pantheonImage, quantity: 1, category: "Earrings" },
    { id: 2, name: "Eclipse", price: "£3,200", image: eclipseImage, quantity: 1, category: "Bracelets" },
    { id: 3, name: "Halo", price: "£1,950", image: haloImage, quantity: 1, category: "Earrings" }
  ]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };
  
  useEffect(() => {
    const imagesToPreload = ["/rings-collection.png", "/earrings-collection.png", "/arcus-bracelet.png", "/span-bracelet.png", "/founders.png"];
    imagesToPreload.forEach(src => { const img = new Image(); img.src = src; });
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const popularSearches = ["Gold Rings", "Silver Necklaces", "Pearl Earrings", "Designer Bracelets", "Wedding Rings", "Vintage Collection"];
  
  const looksMenu = {
    woman: [
      { label: "SPRING '26 LOOKS", slug: "woman-spring-26" },
      { label: "WINTER '25 LOOKS", slug: "woman-winter-25" },
      { label: "AUTUMN '25 LOOKS", slug: "woman-autumn-25" },
      { label: "SUMMER '25 LOOKS", slug: "woman-summer-25" },
      { label: "SPRING '25 LOOKS", slug: "woman-spring-25" },
    ],
    man: [
      { label: "SPRING '26 LOOKS", slug: "man-spring-26" },
      { label: "WINTER '25 MODULE LOOKS", slug: "man-winter-25-module" },
      { label: "WINTER '25 LOOKS", slug: "man-winter-25" },
      { label: "AUTUMN '25 LOOKS", slug: "man-autumn-25" },
      { label: "SUMMER '25 LOOKS", slug: "man-summer-25" },
    ],
    images: [
      { src: "/founders.png", alt: "Woman Looks", label: "WOMAN" },
      { src: "/rings-collection.png", alt: "Man Looks", label: "MAN" },
      { src: "/earrings-collection.png", alt: "Editorial Looks", label: "WOMAN" },
    ],
  };

  const navItems = [
    {
      name: "WOMAN", href: "/category/woman",
      byCollection: ["Rings", "Necklaces", "Earrings", "Bracelets", "Watches", "View All"],
      featured: ["New Arrivals", "Spring '26", "Best Sellers", "Gift Guide"],
      images: [
        { src: "/rings-collection.png", alt: "Woman Collection", label: "NEW COLLECTION" },
        { src: "/earrings-collection.png", alt: "Woman Earrings", label: "SPRING '26" },
        { src: "/founders.png", alt: "Woman Editorial", label: "BEST SELLERS" },
      ],
    },
    {
      name: "MAN", href: "/category/man",
      byCollection: ["Rings", "Necklaces", "Bracelets", "Watches", "Cufflinks", "View All"],
      featured: ["New Arrivals", "Spring '26", "Best Sellers", "Gift Guide"],
      images: [
        { src: "/arcus-bracelet.png", alt: "Man Bracelet", label: "NEW COLLECTION" },
        { src: "/span-bracelet.png", alt: "Man Span", label: "SPRING '26" },
        { src: "/rings-collection.png", alt: "Man Rings", label: "BEST SELLERS" },
      ],
    },
    { name: "LOOKS", href: "/looks" },
    { name: "JOURNAL", href: "/journal" }
  ];

  const textColor = isTransparent && !activeDropdown && !isSearchOpen && !isMobileMenuOpen
    ? "text-white"
    : "text-nav-foreground";

  const navBg = isTransparent && !activeDropdown && !isSearchOpen
    ? "bg-transparent"
    : "bg-[#F2F0E9]/90 backdrop-blur-md";

  return (
    <nav className={`relative transition-colors duration-300 ${navBg}`}>
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Mobile left: Hamburger + Search */}
        <div className="flex items-center lg:hidden">
          <button
            className={`p-2 ${textColor} hover:opacity-70 transition-all duration-200`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-5 h-5 relative">
              <span className="absolute block w-5 h-px bg-current top-1.5"></span>
              <span className="absolute block w-5 h-px bg-current top-2.5"></span>
              <span className="absolute block w-5 h-px bg-current top-3.5"></span>
            </div>
          </button>
          <button
            className={`p-2 ${textColor} hover:opacity-70 transition-all duration-200`}
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Left navigation - Desktop */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative" onMouseEnter={() => (item.byCollection || item.name === "LOOKS") ? setActiveDropdown(item.name) : undefined} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to={item.href} className={`${textColor} hover:opacity-70 transition-all duration-200 type-nav py-6 block`}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="block">
            <span className={`text-xl lg:text-2xl font-serif font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${textColor}`}>
              SIFAR
            </span>
          </Link>
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center space-x-0 lg:space-x-2">
          {/* GB / £ locale label - desktop only */}
          <span className={`hidden lg:block ${textColor} text-xs font-light tracking-wide mr-3`}>GB / £</span>

          {/* Search - desktop only */}
          <button 
            className={`hidden lg:block p-2 ${textColor} hover:opacity-70 transition-all duration-200`}
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Bookmark / Wishlist - desktop only */}
          <button 
            className={`hidden lg:block p-2 ${textColor} hover:opacity-70 transition-all duration-200`}
            aria-label="Wishlist"
            onClick={() => navigate("/login")}
          >
            <Bookmark className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Bookmark/Wishlist on mobile, User/Login on desktop */}
          <Link to="/login" className={`p-1.5 lg:p-2 ${textColor} hover:opacity-70 transition-all duration-200`} aria-label="Wishlist">
            <Bookmark className="w-4 h-4 lg:hidden" strokeWidth={1.5} />
            <User className="hidden lg:block w-5 h-5" strokeWidth={1.5} />
          </Link>

          {/* Shopping bag */}
          <button 
            className={`p-1.5 lg:p-2 ${textColor} hover:opacity-70 transition-all duration-200 relative`}
            aria-label="Shopping bag"
            onClick={() => setIsShoppingBagOpen(true)}
          >
            <ShoppingBagIcon className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 lg:top-0 lg:right-0 min-w-[14px] h-[14px] flex items-center justify-center rounded-full bg-foreground text-background text-[0.55rem] font-semibold leading-none pointer-events-none">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Full width dropdown */}
      {activeDropdown && (
        <div className="absolute top-full left-0 right-0 bg-limestone border-b border-foreground/15 z-50" onMouseEnter={() => setActiveDropdown(activeDropdown)} onMouseLeave={() => setActiveDropdown(null)}>
          <div className="px-6 py-8">
            {activeDropdown === "LOOKS" ? (
              /* LOOKS special two-column + images layout */
              <div className="flex w-full">
                <div className="flex gap-16 pr-12" style={{ minWidth: '40%' }}>
                  <div>
                    <h3 className="text-xs font-medium tracking-wider uppercase mb-4 text-foreground">Woman</h3>
                    <ul className="space-y-2">
                      {looksMenu.woman.map((item, i) => (
                        <li key={i}>
                          <Link to={`/looks/${item.slug}`} className={`text-xs tracking-wider uppercase block py-1 transition-colors duration-200 ${i === 0 ? 'text-foreground underline underline-offset-4' : 'text-foreground/60 hover:text-foreground'}`}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium tracking-wider uppercase mb-4 text-foreground">Man</h3>
                    <ul className="space-y-2">
                      {looksMenu.man.map((item, i) => (
                        <li key={i}>
                          <Link to={`/looks/${item.slug}`} className={`text-xs tracking-wider uppercase block py-1 transition-colors duration-200 ${i === 0 ? 'text-foreground underline underline-offset-4' : 'text-foreground/60 hover:text-foreground'}`}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4 flex-1">
                  {looksMenu.images.map((image, index) => (
                    <Link key={index} to="/looks/woman-spring-26" className="flex-1 h-[280px] cursor-pointer group relative overflow-hidden block">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover scale-[1.02] transition-opacity duration-200 group-hover:opacity-90" />
                      <div className="absolute bottom-3 left-3 text-white text-xs font-medium tracking-wider uppercase">
                        {image.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              /* Default dropdown for WOMAN/MAN */
              (() => {
                const activeItem = navItems.find(item => item.name === activeDropdown);
                return (
                  <div className="flex w-full">
                    <div className="flex gap-16 pr-12" style={{ minWidth: '35%' }}>
                      <div>
                        <h3 className="text-xs font-medium tracking-wider uppercase mb-4 text-foreground">By Collection</h3>
                        <ul className="space-y-2">
                          {activeItem?.byCollection?.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={item === "View All" ? (activeItem.href) : `/category/${item.toLowerCase()}`}
                                className="text-xs tracking-wider uppercase block py-1 transition-colors duration-200 text-foreground/60 hover:text-foreground"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-medium tracking-wider uppercase mb-4 text-foreground">Featured</h3>
                        <ul className="space-y-2">
                          {activeItem?.featured?.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={activeItem.href}
                                className="text-xs tracking-wider uppercase block py-1 transition-colors duration-200 text-foreground/60 hover:text-foreground"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4 flex-1">
                      {activeItem?.images?.map((image, index) => (
                        <Link key={index} to={activeItem.href} className="flex-1 h-[280px] cursor-pointer group relative overflow-hidden block">
                          <img src={image.src} alt={image.alt} className="w-full h-full object-cover scale-[1.02] transition-opacity duration-200 group-hover:opacity-90" />
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-medium tracking-wider uppercase px-4 py-1.5 rounded-full">
                            {image.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-limestone border-b border-border z-50">
          <div className="px-6 py-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-8">
                <div className="flex items-center border-b border-border pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-nav-foreground mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input type="text" placeholder="Search for jewelry..." className="flex-1 bg-transparent text-nav-foreground placeholder:text-nav-foreground/60 outline-none text-lg" autoFocus />
                </div>
              </div>
              <div>
                <h3 className="text-nav-foreground text-sm font-light mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {popularSearches.map((search, index) => (
                    <button key={index} className="text-nav-foreground hover:text-nav-hover text-sm font-light py-2 px-4 border border-border rounded-full transition-colors duration-200 hover:border-nav-hover">
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile navigation drawer - always rendered for exit animation */}
      <div
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-700 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed inset-y-0 left-0 z-[60] w-full bg-limestone/85 backdrop-blur-xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between h-20 px-5 border-b border-foreground/5">
          <button
            className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" strokeWidth={1} />
          </button>
          <span className="text-xl font-serif font-semibold tracking-[0.25em] uppercase text-foreground">
            SIFAR
          </span>
          <div className="flex items-center gap-1">
            <Link to="/login" className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              <User className="w-4 h-4" strokeWidth={1} />
            </Link>
            <button
              className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-300 relative"
              onClick={() => { setIsMobileMenuOpen(false); setIsShoppingBagOpen(true); }}
            >
              <ShoppingBagIcon className="w-4 h-4" strokeWidth={1} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[14px] h-[14px] flex items-center justify-center rounded-full bg-foreground text-background text-[0.55rem] font-semibold leading-none pointer-events-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar — minimal underline style */}
        <div className="px-6 py-6">
          <div className="flex items-center border-b border-foreground/10 pb-3">
            <Search className="w-4 h-4 text-foreground/30 mr-3 flex-shrink-0" strokeWidth={1} />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent text-sm font-light tracking-[0.1em] text-foreground placeholder:text-foreground/30 outline-none"
            />
          </div>
        </div>

        {/* Primary nav links — Zen spacing & typography */}
        <div className="px-2">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center justify-between px-6 py-5 text-foreground/80 hover:text-foreground transition-colors duration-300 border-b border-foreground/5"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="text-sm font-light tracking-[0.2em]">{item.name.charAt(0) + item.name.slice(1).toLowerCase()}</span>
              <span className="text-foreground/25 text-xs">—</span>
            </Link>
          ))}
        </div>

        {/* Secondary section — About Sifar */}
        <div className="px-2 mt-6">
          <Link
            to="/about/our-story"
            className="flex items-center justify-between px-6 py-5 text-foreground/60 hover:text-foreground transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-xs font-light tracking-[0.2em]">About Sifar</span>
            <span className="text-foreground/20 text-xs">—</span>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer utility links — ethereal & delicate */}
        <div className="border-t border-foreground/5 px-6 py-5 space-y-1">
          <Link
            to="/about/customer-care"
            className="flex items-center gap-3 py-3 text-foreground/50 hover:text-foreground/70 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <HelpCircle className="w-3.5 h-3.5" strokeWidth={1} />
            <span className="text-[11px] font-light tracking-[0.15em]">Help Center</span>
          </Link>
          <Link
            to="/about/store-locator"
            className="flex items-center gap-3 py-3 text-foreground/50 hover:text-foreground/70 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MapPin className="w-3.5 h-3.5" strokeWidth={1} />
            <span className="text-[11px] font-light tracking-[0.15em]">Find a Boutique</span>
          </Link>
          <div className="flex items-center gap-3 py-3 text-foreground/50">
            <Globe className="w-3.5 h-3.5" strokeWidth={1} />
            <span className="text-[11px] font-light tracking-[0.15em]">GB / English</span>
          </div>
        </div>
      </div>
      
      {/* Shopping Bag Component */}
      <ShoppingBag 
        isOpen={isShoppingBagOpen}
        onClose={() => setIsShoppingBagOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        onViewFavorites={() => { setIsShoppingBagOpen(false); setOffCanvasType('favorites'); }}
      />
      
      {/* Favorites Off-canvas overlay */}
      {offCanvasType === 'favorites' && (
        <div className="fixed inset-0 z-50 h-screen">
          <div className="absolute inset-0 bg-black/50 h-screen" onClick={() => setOffCanvasType(null)} />
          <div className="absolute right-0 top-0 h-screen w-96 bg-background border-l border-border animate-slide-in-right flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-light text-foreground">Your Favorites</h2>
              <button onClick={() => setOffCanvasType(null)} className="p-2 text-foreground hover:text-muted-foreground transition-colors" aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm mb-6">You haven't added any favorites yet. Browse our collection and click the heart icon to save items you love.</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
