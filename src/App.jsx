import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ServicesLayout from './layouts/ServicesLayout';
import './App.css';
import ProtectedRoute from './components/auth/ProtectedRoute'; // <--- Imported

// Context
import { BrandProvider } from './pages/Services/BrandBook/context/BrandContext';

// Components
import BrandDashboard from './pages/Services/BrandBook/Dashboard';
import BrandEditor from './pages/Services/BrandBook/Editor';
import BrandPreview from './pages/Services/BrandBook/Preview';

import SignInPage from './components/auth/SignInPage';

// Lazy Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutMe/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const Blog = lazy(() => import('./pages/Blogs/Blog'));

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>

        {/* LEVEL 1: MAIN LAYOUT */}
        <Route element={<MainLayout />}>

          <Route path="/" element={
            <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>
          } />

          <Route path="/about" element={
            <Suspense fallback={<div>Loading...</div>}><About /></Suspense>
          } />

          <Route path="/blog/*" element={
            <Suspense fallback={<div>Loading...</div>}><Blog /></Suspense>
          } />

          <Route path="/sign-in" element={<SignInPage />} />

          {/* LEVEL 2: SERVICES LAYOUT (PROTECTED) */}
          {/* FIX: Wrap ServicesLayout with ProtectedRoute */}
          <Route path="/services" element={
            <ProtectedRoute>
              <ServicesLayout />
            </ProtectedRoute>
          }>

            {/* The Grid Dashboard */}
            <Route index element={
              <Suspense fallback={<div>Loading...</div>}><Services /></Suspense>
            } />

            {/* Brand Book Tools */}
            <Route path="brand-book" element={
              <BrandProvider><BrandDashboard /></BrandProvider>
            } />

            <Route path="brand-book/editor" element={
              <BrandProvider><BrandEditor /></BrandProvider>
            } />

            <Route path="brand-book/preview" element={
              <BrandProvider><BrandPreview /></BrandProvider>
            } />

          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;