import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, Mail, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { saveUserData } from "../lib/firestoreHelpers";

const Login = () => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
const user = userCredential.user;
await saveUserData({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});
    e.preventDefault();
    if (email && password) {
      // Simulate login
      navigate("/role-selection");
    } else {
      setError("Please enter email and password.");
    }

    
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary-dark transition-smooth"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="shadow-brand border-0">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl font-bold text-gradient-primary">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-base">
              Sign in to your BharatSkill Connect account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Login Method Toggle */}
            <div className="flex rounded-lg bg-secondary p-1">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-smooth ${
                  loginMethod === 'email'
                    ? 'bg-background text-foreground shadow-card'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Mail className="h-4 w-4" />
                Email
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-smooth ${
                  loginMethod === 'phone'
                    ? 'bg-background text-foreground shadow-card'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Phone className="h-4 w-4" />
                Phone
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email/Phone Input */}
              <div className="space-y-2">
                <Label htmlFor="contact">
                  {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
                </Label>
                <Input
                  id="contact"
                  type={loginMethod === 'email' ? 'email' : 'tel'}
                  placeholder={
                    loginMethod === 'email' 
                      ? 'Enter your email address'
                      : 'Enter your phone number'
                  }
                  required
                  className="h-12"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                    className="h-12 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:text-primary-dark transition-smooth"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button type="submit" variant="gradient" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" size="lg" className="w-full">
                Google
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Facebook
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link 
                to="/signup" 
                className="text-primary hover:text-primary-dark font-medium transition-smooth"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;