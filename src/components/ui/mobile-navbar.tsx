import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { useNavigate } from 'react-router-dom';
interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}
interface MobileNavbarProps {
  items: NavItem[];
  activeTab: string;
  onItemClick: (itemName: string, url: string) => void;
  className?: string;
}
export const MobileNavbar = ({
  items,
  activeTab,
  onItemClick,
  className
}: MobileNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleItemClick = (itemName: string, url: string) => {
    onItemClick(itemName, url);
    setIsMenuOpen(false);
  };
  return <>
      {/* High priority preload for mobile logo */}
      <link rel="preload" as="image" href="/lovable-uploads/6665fb26-de5b-467c-b8cb-4d13aa47ba13.png" fetchPriority="high" />
      
      {/* Logo - Mobile version - Fixed at top left */}
      <div className="fixed top-2 left-2 z-50 md:hidden">
        <Logo size="sm" />
      </div>

      <div className={cn("fixed top-4 right-4 z-50", className)}>
        {/* Menu Toggle */}
        <div className="flex items-center justify-center bg-charcoal/90 border border-neon-green/20 backdrop-blur-lg p-3 rounded-full shadow-lg">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neon-green hover:text-neon-green/80 transition-colors duration-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} className="absolute top-16 right-0 w-64 bg-charcoal/95 border border-neon-green/20 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
            {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          const isLast = index === items.length - 1;
          return <button key={item.name} onClick={() => handleItemClick(item.name, item.url)} className={cn("w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200", !isLast && "border-b border-neon-green/10", "text-white/80 hover:text-neon-green hover:bg-neon-green/5", isActive && "bg-neon-green/10 text-neon-green")}>
                  <Icon size={18} strokeWidth={2.5} />
                  <span className="font-medium">{item.name}</span>
                </button>;
        })}
            
            {/* Separator line */}
            <div className="border-t border-neon-green/20 my-2"></div>
            
            {/* Book Demo Button - Inside dropdown */}
            <button onClick={() => {
          navigate('/book-demo');
          setIsMenuOpen(false);
        }} className="w-full bg-neon-green text-charcoal hover:bg-neon-green/90 font-semibold mb-2 text-center transition-all duration-200 rounded-lg mx-[9px] py-[11px] px-[17px] my-0">
              Book Demo
            </button>
          </motion.div>}
      </div>
    </>;
};