import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  BookOpen, 
  Users, 
  MapPin, 
  Star, 
  Clock, 
  CheckCircle,
  ArrowRight,
  User,
  Phone,
  Mail,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinShishya = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interests: [] as string[],
    experience: '',
    goals: ''
  });

  const skillCategories = [
    'Music & Arts', 'Cooking', 'Technology', 'Languages', 'Sports & Fitness',
    'Crafts & Hobbies', 'Business & Finance', 'Health & Wellness', 'Photography',
    'Dance', 'Academic Subjects', 'Life Skills'
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: 'Learn from Local Experts',
      description: 'Connect with skilled Gurus in your neighborhood who share their expertise'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Join group sessions and learn alongside fellow Shishyas'
    },
    {
      icon: MapPin,
      title: 'Hyperlocal Connections',
      description: 'Find learning opportunities within walking distance from your home'
    },
    {
      icon: Star,
      title: 'Verified Instructors',
      description: 'Learn from verified and rated Gurus with proven track records'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Choose learning schedules that fit your lifestyle and availability'
    },
    {
      icon: CheckCircle,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with skill assessments and certifications'
    }
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Shishya registration:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">BharatSkill Connect</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/join-guru">
                <Button variant="secondary">Join as Guru</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Learning Journey as a <span className="text-accent">Shishya</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover skilled Gurus in your neighborhood and master new skills through personalized, local learning experiences.
          </p>
          <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            <Star className="h-5 w-5 mr-2" />
            Over 50,000+ Happy Learners
          </Badge>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose to be a Shishya?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover-lift border-border bg-card">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Join Our Learning Community
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below to start connecting with local Gurus
            </p>
          </div>

          <Card className="p-8 border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-card-foreground flex items-center">
                  <User className="h-6 w-6 mr-2 text-primary" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Learning Interests */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-card-foreground flex items-center">
                  <Search className="h-6 w-6 mr-2 text-primary" />
                  What Would You Like to Learn?
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skillCategories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={formData.interests.includes(category)}
                        onCheckedChange={() => handleInterestToggle(category)}
                      />
                      <Label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-4">
                <Label htmlFor="experience">Current Experience Level</Label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                  className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  <option value="">Select your experience level</option>
                  <option value="complete-beginner">Complete Beginner</option>
                  <option value="some-knowledge">Some Basic Knowledge</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced (Looking to specialize)</option>
                </select>
              </div>

              {/* Learning Goals */}
              <div className="space-y-4">
                <Label htmlFor="goals">Learning Goals (Optional)</Label>
                <textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                  placeholder="Tell us about your learning goals and what you hope to achieve..."
                  className="w-full min-h-24 px-3 py-2 border border-input bg-background rounded-md text-sm resize-none"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" size="xl" className="w-full group">
                  Start Learning Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  By joining, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Shishyas who are already learning new skills from local Gurus in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/role-selection">
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Explore All Options
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary" size="xl">
                Already Have an Account? Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinShishya;