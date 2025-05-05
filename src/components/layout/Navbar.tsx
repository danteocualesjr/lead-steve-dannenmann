
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About Steve', path: '/about' },
    { 
      label: 'Services', 
      path: '#',
      subItems: [
        { label: 'Small Business Accounting', path: '/small-business-accounting' },
        { label: 'Business Tax Preparation', path: '/business-tax-preparation' },
        { label: 'Individual Tax Services', path: '/individual-tax-pricing' },
      ]
    },
    { label: 'Resources', path: '#', 
      subItems: [
        { label: 'Worksheets & Checklists', path: '/worksheets' },
        { label: 'Newsletter', path: '/newsletter' },
        { label: 'Tax Center', path: '/tax-center' },
      ]
    },
    { label: 'Fees', path: '/fees' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="py-4 sticky top-0 z-50 glass-card px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary font-display text-xl sm:text-2xl font-semibold">
                Steven Dannenmann, <span className="text-accent">CPA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">
                {item.subItems ? (
                  <div 
                    className="flex items-center cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-200"
                    onMouseEnter={() => setHoverItem(item.label)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                    
                    {hoverItem === item.label && (
                      <div className="absolute top-full left-0 mt-2 glass-card rounded-md shadow-lg py-1 min-w-[200px] animate-fade-in">
                        {item.subItems.map((subItem) => (
                          <Link 
                            key={subItem.label}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm hover:bg-primary/10 transition-colors duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className="text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button className="button-primary">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 glass-card rounded-md shadow-lg px-2 py-3 animate-fade-in">
          {navigationItems.map((item) => (
            <div key={item.label} className="mb-2">
              {item.subItems ? (
                <div>
                  <div 
                    className="flex items-center justify-between px-4 py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                    onClick={() => setHoverItem(hoverItem === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hoverItem === item.label ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {hoverItem === item.label && (
                    <div className="ml-4 border-l-2 border-primary/20 pl-4 py-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link 
                          key={subItem.label}
                          to={subItem.path}
                          className="block py-1 text-sm hover:text-primary transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  to={item.path}
                  className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 px-4">
            <Button className="w-full button-primary">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
