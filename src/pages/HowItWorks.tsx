import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  UserCheck, 
  Calendar, 
  BookOpen, 
  Star, 
  Users, 
  MapPin, 
  ArrowRight,
  CheckCircle,
  Heart,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const learnerSteps = [
    {
      icon: Search,
      title: "Discover Skills",
      description: "Search for skills you want to learn in your local area. From cooking to coding, find expert gurus nearby.",
      color: "text-blue-600"
    },
    {
      icon: UserCheck,
      title: "Connect with Gurus",
      description: "Browse guru profiles, read reviews, and choose the perfect teacher for your learning journey.",
      color: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "Schedule Sessions",
      description: "Book convenient time slots that work for both you and your guru. Flexible scheduling made easy.",
      color: "text-orange-600"
    },
    {
      icon: BookOpen,
      title: "Learn & Grow",
      description: "Attend engaging sessions, practice new skills, and track your progress with personalized guidance.",
      color: "text-primary"
    }
  ];

  const guruSteps = [
    {
      icon: Users,
      title: "Create Your Profile",
      description: "Showcase your skills, experience, and teaching style. Let students know what makes you special.",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Set Your Availability",
      description: "Define your teaching area, preferred timings, and session formats. You're in complete control.",
      color: "text-blue-600"
    },
    {
      icon: Star,
      title: "Connect with Shishyas",
      description: "Receive booking requests from eager learners in your neighborhood. Build your teaching community.",
      color: "text-purple-600"
    },
    {
      icon: Trophy,
      title: "Earn & Impact",
      description: "Earn money doing what you love while making a positive impact on your community's growth.",
      color: "text-orange-600"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Hyperlocal Community",
      description: "Connect with people in your immediate neighborhood and build lasting relationships."
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "All gurus are verified and rated by the community to ensure the best learning experience."
    },
    {
      icon: Trophy,
      title: "Skill Diversity",
      description: "From traditional crafts to modern tech skills - discover endless learning opportunities."
    },
    {
      icon: CheckCircle,
      title: "Flexible Learning",
      description: "Learn at your own pace with flexible scheduling and personalized teaching approaches."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            ⭐ India's First Hyperlocal Skill Exchange Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How BharatSkill
            <span className="block bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Connect Works
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your neighborhood into a thriving learning ecosystem. Whether you want to learn new skills 
            or share your expertise, we make it simple and rewarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-hover">
              Join as Shishya
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Become a Guru
            </Button>
          </div>
        </div>
      </section>

      {/* For Learners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
              For Learners (Shishyas)
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover new skills, connect with local experts, and grow in your community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learnerSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${step.color.split('-')[1]}-100 to-${step.color.split('-')[1]}-200 flex items-center justify-center mb-4`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Gurus Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              For Teachers (Gurus)
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Share Your Knowledge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn your expertise into income while building a thriving local community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guruSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${step.color.split('-')[1]}-100 to-${step.color.split('-')[1]}-200 flex items-center justify-center mb-4`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose BharatSkill Connect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of community-driven learning with our unique features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of learners and teachers who are already building stronger neighborhoods through skill sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Learning Today
              <BookOpen className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Become a Guru
              <Users className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;