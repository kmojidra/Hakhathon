import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, ArrowRight, Star, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    // Navigate to dashboard or profile setup based on role
    navigate(`/dashboard?role=${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient-primary mb-4">
            Choose Your Path
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your role to get started with BharatSkill Connect. You can always switch later in your profile settings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Guru Card */}
          <Card className="shadow-brand border-0 hover:shadow-brand-lg transition-smooth cursor-pointer group">
            <CardHeader className="text-center space-y-4 pb-6">
              <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Become a Guru
              </CardTitle>
              <CardDescription className="text-base">
                Share your skills and knowledge with the community while earning income
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Teach & Earn</h4>
                    <p className="text-sm text-muted-foreground">Monetize your expertise by teaching others</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Build Community</h4>
                    <p className="text-sm text-muted-foreground">Connect with eager learners in your area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Set Your Schedule</h4>
                    <p className="text-sm text-muted-foreground">Teach when it's convenient for you</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => handleRoleSelection('guru')}
                variant="gradient" 
                size="lg" 
                className="w-full group"
              >
                Start as Guru
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </CardContent>
          </Card>

          {/* Shishya Card */}
          <Card className="shadow-brand border-0 hover:shadow-brand-lg transition-smooth cursor-pointer group">
            <CardHeader className="text-center space-y-4 pb-6">
              <div className="mx-auto w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Become a Shishya
              </CardTitle>
              <CardDescription className="text-base">
                Learn new skills from experienced local experts and grow your potential
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Learn & Grow</h4>
                    <p className="text-sm text-muted-foreground">Acquire new skills from local experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Find Mentors</h4>
                    <p className="text-sm text-muted-foreground">Connect with skilled professionals nearby</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Flexible Learning</h4>
                    <p className="text-sm text-muted-foreground">Learn at your own pace and schedule</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => handleRoleSelection('shishya')}
                variant="outline" 
                size="lg" 
                className="w-full group"
              >
                Start as Shishya
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/login" 
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;