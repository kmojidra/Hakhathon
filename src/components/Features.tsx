import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  MessageCircle, 
  Star, 
  Shield, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: MapPin,
      title: 'Hyperlocal Discovery',
      description: 'Find skilled Gurus within your neighborhood. Learn cooking from your neighbor, coding from a local expert.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: MessageCircle,
      title: 'Safe Communication',
      description: 'Built-in chat system with verified profiles. Connect safely with background-checked local experts.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Star,
      title: 'Trusted Reviews',
      description: 'Community-driven ratings and reviews. Build your reputation and find the best Gurus in your area.',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Integrated mini-payments with escrow protection. Learn now, pay when satisfied.',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const additionalFeatures = [
    'Government Portal Integration',
    'Multi-language Support (Hindi, English, Tamil, Bengali)',
    'Group Workshop Creation',
    'Skill Verification System',
    'Location-based Matching',
    'Community Building Tools'
  ];

  return (
    <section id="features" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose{' '}
            <span className="text-gradient-primary">BharatSkill Connect</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another platform. We're building a movement to strengthen 
            local communities through skill sharing and cultural exchange.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover-lift shadow-card bg-gradient-card border-border/50">
              <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-card-foreground mb-4">
                Additional Features
              </h3>
              <p className="text-muted-foreground mb-6">
                Built with the Indian community in mind, featuring everything needed 
                for seamless skill exchange in local neighborhoods.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="gradient" size="lg" className="group">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                <Smartphone className="h-16 w-16 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Mobile First Design
                </h4>
                <p className="text-white/90">
                  Optimized for smartphones with offline capabilities. 
                  Perfect for India's mobile-first audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;