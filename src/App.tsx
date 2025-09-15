import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";


import { BrowserRouter,Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoleSelection from "./pages/RoleSelection";
import Dashboard from "./pages/Dashboard";
import JoinShishya from "./pages/JoinShishya";
import JoinNow from "./pages/JoinNow";
import { db } from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";
import NotFound from "./pages/NotFound";
import FindSkill from './pages/FindSkill';
import GuruProfile from './pages/GuruProfile';





const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/join-shishya" element={<JoinShishya />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/find-skill" element={<FindSkill />} />
          <Route path="/guru/:name" element={<GuruProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const FirebaseTest: React.FC = () => {
  useEffect(() => {
    // Try to get Firestore instance and log it
    try {
      console.log("Firestore instance:", db);
      alert("Firebase connected successfully!");
    } catch (e) {
      alert("Firebase connection failed!");
    }
  }, []);

  return <div>Firebase Connection Test</div>;
};

export default App;
export { FirebaseTest };
