import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layouts
import MainLayout from './layouts/MainLayout';
import ServicesLayout from './layouts/ServicesLayout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services/Services';
import About from './pages/AboutMe/About';
import Blog from './pages/Blogs/Blog';
import VerifyEmailPage from './pages/Auth/VerifyEmailPage'; // Adjust path if needed

// Micro-Services
import BrandBook from './pages/Services/BrandBook/Dashboard';
import Editor from './pages/Services/BrandBook/Editor';
import GymTracker from './pages/Services/GymTracker/GymTracker';
import Profile from './pages/Services/Profile';

// Auth
import ProtectedRoute from './components/auth/ProtectedRoute';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import ForgotPasswordPage from './components/auth/ForgotPasswordPage';
import ResetPasswordPage from './components/auth/ResetPasswordPage';

// Admin
import AdminDashboard from './pages/Admin/AdminDashboard';
import PrivacyPage from './pages/Legal/PrivacyPage';
import TermsPage from './pages/Legal/TermsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* === MASTER LAYOUT (Navbar + Footer) === */}
        {/* Everything inside here gets the Nav and Footer */}
        <Route element={<MainLayout />}>

          {/* 1. PUBLIC PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* 2. SERVICES DASHBOARD (Public List) */}
          {/* We wrap this in ServicesLayout to keep styling consistent, but NO protection */}
          <Route element={<ServicesLayout />}>
            <Route path="/services" element={<Services />} />
          </Route>

          {/* 3. PROTECTED TOOLS (Login Required) */}
          {/* These are also inside MainLayout, so they keep the Navbar */}
          <Route element={<ProtectedRoute><ServicesLayout /></ProtectedRoute>}>
            <Route path="/services/brand-book" element={<BrandBook />} />
            <Route path="/services/brand-book/editor" element={<Editor />} />
            <Route path="/services/gym-tracker" element={<GymTracker />} />
            <Route path="/services/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

        </Route> {/* <--- MainLayout CLOSES HERE */}

      </Routes>
    </Router>
  )
}

export default App