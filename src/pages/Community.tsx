import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageCircle, Calendar, Award, TrendingUp, Heart } from "lucide-react";

const Community = () => {
  const communityStats = [
    { icon: Users, label: "Active Members", value: "50,000+" },
    { icon: MessageCircle, label: "Discussions", value: "25,000+" },
    { icon: Calendar, label: "Events This Month", value: "150+" },
    { icon: Award, label: "Skills Exchanged", value: "10,000+" }
  ];

  const recentPosts = [
    {
      author: "Priya Sharma",
      avatar: "/api/placeholder/40/40",
      skill: "Web Development",
      content: "Just completed my first React project with my shishya! The feeling of seeing someone learn is incredible. 🚀",
      time: "2 hours ago",
      likes: 24,
      comments: 8
    },
    {
      author: "Ravi Kumar",
      avatar: "/api/placeholder/40/40",
      skill: "Guitar",
      content: "Looking for students interested in learning classical guitar. First lesson free for serious learners! 🎸",
      time: "4 hours ago",
      likes: 18,
      comments: 12
    },
    {
      author: "Meera Patel",
      avatar: "/api/placeholder/40/40",
      skill: "Cooking",
      content: "Hosting a community cooking workshop this weekend. Making traditional Gujarati thali. Who's in?",
      time: "1 day ago",
      likes: 45,
      comments: 23
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow learners and teachers in your neighborhood. Share experiences, ask questions, and grow together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Feed */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Community Feed</h2>
              <Button>Share Your Story</Button>
            </div>

            {recentPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={post.avatar} alt={post.author} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{post.author}</span>
                        <Badge variant="outline" className="text-xs">{post.skill}</Badge>
                        <span className="text-sm text-muted-foreground">• {post.time}</span>
                      </div>
                      <p className="text-foreground mb-4">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">#WebDevelopment</span>
                  <Badge variant="secondary">245 posts</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">#CookingTips</span>
                  <Badge variant="secondary">189 posts</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">#MusicLessons</span>
                  <Badge variant="secondary">156 posts</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">#Photography</span>
                  <Badge variant="secondary">123 posts</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-sm">Photography Walk</h4>
                  <p className="text-xs text-muted-foreground">Tomorrow • Bandra</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-semibold text-sm">Cooking Workshop</h4>
                  <p className="text-xs text-muted-foreground">This Weekend • Juhu</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-sm">Tech Meetup</h4>
                  <p className="text-xs text-muted-foreground">Next Week • Andheri</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View All Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;