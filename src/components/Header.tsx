import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import skillExchangeIcon from '@/assets/skill-exchange-icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Find a Skill', href: '/find-skill' },
    { label: 'Become a Guru', href: '/role-selection' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={skillExchangeIcon} 
              alt="BharatSkill Connect" 
              className="h-10 w-10"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gradient-primary">
                BharatSkill Connect
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Connect. Learn. Grow.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-4">
  {navItems.map((item) => {
    if (item.label === 'Become a Guru') {
      return (
        <Link
          key={item.label}
          to={item.href}
          className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600"
        >
          {item.label}
        </Link>
      );
    }
    return item.href.startsWith('/') ? (
      <Link
        key={item.label}
        to={item.href}
        className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600"
      >
        {item.label}
      </Link>
    ) : (
      <a
        key={item.label}
        href={item.href}
        className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600"
      >
        {item.label}
      </a>
    );
  })}
</nav>



          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Mumbai</span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="gradient" size="sm" asChild>
              <Link to="/join-now">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
  <div className="md:hidden py-4 animate-fade-in">
    <div className="flex flex-col space-y-4">
      {navItems.map((item) => {
        if (item.label === 'Become a Guru') {
          return (
            <Link
              key={item.label}
              to={item.href}
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          );
        }
        return item.href.startsWith('/') ? (
          <Link
            key={item.label}
            to={item.href}
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ) : (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        );
      })}
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="gradient" size="sm" className="w-full" asChild>
                    <Link to="/join-now">Join Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;