import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart
} from 'lucide-react';
import skillExchangeIcon from '@/assets/skill-exchange-icon.png';

const Footer = () => {
  const footerLinks = {
    platform: [
      { label: 'Find Skills', href: '#skills' },
      { label: 'Become a Guru', href: '#guru' },
      { label: 'How it Works', href: '#how-it-works' },
      { label: 'Success Stories', href: '#stories' },
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Community Guidelines', href: '#guidelines' },
      { label: 'Safety Tips', href: '#safety' },
      { label: 'Contact Support', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Refund Policy', href: '#refund' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={skillExchangeIcon} 
                  alt="BharatSkill Connect" 
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gradient-primary">
                    BharatSkill Connect
                  </h3>
                  <p className="text-muted-foreground">
                    Connect. Learn. Grow.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground max-w-md">
                Empowering local communities through skill exchange. 
                Building bridges between knowledge seekers and wisdom holders 
                in every neighborhood across India.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h4 className="font-semibold text-card-foreground">
                  Stay Updated
                </h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="gradient">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <span>connect@bharatskill.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Platform</h4>
                <ul className="space-y-3">
                  {footerLinks.platform.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive fill-current" />
              <span>in India for India</span>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-muted-foreground text-sm">
                © 2024 BharatSkill Connect. All rights reserved.
              </span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;