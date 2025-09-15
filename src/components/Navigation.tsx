import { Button } from "@/components/ui/button";
import { MapPin, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BS</span>
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">BharatSkill Connect</div>
              <div className="text-xs text-muted-foreground">Connect. Learn. Grow.</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant={isActive("/find-skill") ? "default" : "ghost"} 
              asChild
              className="transition-all duration-300"
            >
              <Link to="/find-skill">Find a Skill</Link>
            </Button>
            <Button 
              variant={isActive("/become-guru") ? "default" : "ghost"} 
              asChild
              className="transition-all duration-300"
            >
              <Link to="/become-guru">Become a Guru</Link>
            </Button>
            <Button 
              variant={isActive("/how-it-works") ? "default" : "ghost"} 
              asChild
              className="transition-all duration-300"
            >
              <Link to="/how-it-works">How it Works</Link>
            </Button>
            <Button 
              variant={isActive("/community") ? "default" : "ghost"} 
              asChild
              className="transition-all duration-300"
            >
              <Link to="/community">Community</Link>
            </Button>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              Mumbai
            </div>
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary-hover">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;