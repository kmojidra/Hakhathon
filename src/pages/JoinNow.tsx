import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Star, 
  ArrowRight,
  Lightbulb,
  Heart,
  Target,
  Award,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinNow = () => {
  const shishyaBenefits = [
    {
      icon: BookOpen,
      title: 'Learn New Skills',
      description: 'Access a vast network of local experts and master skills you\'ve always wanted to learn'
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Connect with like-minded learners in your neighborhood and grow together'
    },
    {
      icon: Star,
      title: 'Verified Learning',
      description: 'Learn from verified Gurus with proven track records and get certified'
    }
  ];

  const guruBenefits = [
    {
      icon: Lightbulb,
      title: 'Share Your Expertise',
      description: 'Turn your skills and passion into income by teaching others in your community'
    },
    {
      icon: Heart,
      title: 'Make an Impact',
      description: 'Help others grow and succeed while building meaningful connections'
    },
    {
      icon: Award,
      title: 'Build Recognition',
      description: 'Establish yourself as a trusted expert and grow your reputation locally'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '10K+', label: 'Skills Taught' },
    { number: '500+', label: 'Cities' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

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
              <Link to="/">
                <Button variant="ghost">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 mb-6">
            <Star className="h-5 w-5 mr-2" />
            India's #1 Hyperlocal Skill Exchange Platform
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join the Learning Revolution
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you want to learn new skills or share your expertise, 
            BharatSkill Connect is your gateway to a thriving local community.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Choose Your Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the role that best describes your journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Shishya Card */}
            <Card className="p-8 hover-lift border-border bg-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">Join as Shishya</h3>
                    <p className="text-muted-foreground">Eager to Learn</p>
                  </div>
                </div>

                <p className="text-lg text-card-foreground mb-8">
                  Perfect for individuals who want to learn new skills, discover hidden talents, 
                  and grow personally and professionally through local expertise.
                </p>

                <div className="space-y-4 mb-8">
                  {shishyaBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <benefit.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-card-foreground">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/join-shishya" className="block">
                  <Button size="xl" className="w-full group">
                    Start Learning Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <div className="mt-4 text-center">
                  <span className="text-sm text-muted-foreground">Free to join • No hidden fees</span>
                </div>
              </div>
            </Card>

            {/* Guru Card */}
            <Card className="p-8 hover-lift border-border bg-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mr-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">Join as Guru</h3>
                    <p className="text-muted-foreground">Ready to Teach</p>
                  </div>
                </div>

                <p className="text-lg text-card-foreground mb-8">
                  Ideal for skilled individuals who want to share their knowledge, build their 
                  reputation, and create meaningful impact in their local community.
                </p>

                <div className="space-y-4 mb-8">
                  {guruBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <benefit.icon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-card-foreground">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/role-selection" className="block">
                  <Button variant="secondary" size="xl" className="w-full group">
                    Start Teaching Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <div className="mt-4 text-center">
                  <span className="text-sm text-muted-foreground">Earn while you teach • Flexible schedule</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Not Sure Section */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-background-secondary border-border">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Not Sure Which Path to Choose?</h3>
              <p className="text-muted-foreground mb-6">
                Take our quick assessment to discover whether you're ready to teach, 
                learn, or perhaps both! Many of our users start as Shishyas and later become Gurus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/role-selection">
                  <Button variant="outline" size="lg">
                    Take Quick Assessment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="ghost" size="lg">
                    Browse Community First
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="bg-background-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Join Thousands of Success Stories
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            From learning cooking to mastering coding, our community members are achieving 
            their goals and building lasting connections every day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Music Mastery</h3>
              <p className="text-sm text-muted-foreground">
                "Learned guitar from a local musician. Now I play at community events!"
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-border">
              <div className="text-4xl mb-4">👩‍🍳</div>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Culinary Skills</h3>
              <p className="text-sm text-muted-foreground">
                "Mastered authentic recipes from neighborhood chefs. Family loves it!"
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-border">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Tech Skills</h3>
              <p className="text-sm text-muted-foreground">
                "Learned coding from a local developer. Got my dream job!"
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinNow;