import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroConnection from '@/assets/hero-connection.jpg';

const Hero = () => {
  const stats = [
    { label: 'Active Gurus', value: '50K+', icon: Users },
    { label: 'Skills Taught', value: '10K+', icon: Star },
    { label: 'Cities Connected', value: '500+', icon: MapPin },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroConnection} 
          alt="People connecting and learning together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/70 to-accent/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/30 text-white mb-6 animate-fade-in">
            <Star className="h-4 w-4 mr-2 text-accent" />
            <span className="text-sm font-medium">India's First Hyperlocal Skill Exchange Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Connect Local{' '}
            <span className="text-white">
              Gurus
            </span>{' '}
            and{' '}
            <span className="text-white">
              Shishyas
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Transform your neighborhood into a thriving learning community. 
            Learn skills, teach others, and build lasting connections in your local area.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Link to="/join-shishya">
              <Button variant="hero" size="xl" className="group">
                Join as Shishya
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-white/20 hover-lift">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;