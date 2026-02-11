import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface StatusBarProps {
  onClose: () => void;
}

const StatusBar = ({ onClose }: StatusBarProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const usps = [
    "Free shipping over €50",
    "365 days warranty",
    "+100,000 happy customers"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % usps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [usps.length]);

  return (
    <div className="bg-status-bar text-status-bar-foreground py-2 relative">
      <div className="container mx-auto px-4 text-center">
        <p 
          key={currentIndex}
          className="text-xs font-medium transition-all duration-700 ease-in-out opacity-100 animate-fade-in"
        >
          {usps[currentIndex]}
        </p>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-status-bar-foreground hover:opacity-70 transition-opacity"
        aria-label="Close"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default StatusBar;
