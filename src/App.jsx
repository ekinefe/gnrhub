import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ServicesLayout from './layouts/ServicesLayout'; // <--- Import New Layout
import './App.css';

// Context
import { BrandProvider } from './pages/Services/BrandBook/context/BrandContext';

// Components
import BrandDashboard from './pages/Services/BrandBook/Dashboard';
import BrandEditor from './pages/Services/BrandBook/Editor';
import BrandPreview from './pages/Services/BrandBook/Preview';

// Lazy Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutMe/About'));
const Services = lazy(() => import('./pages/Services/Services')); // This is now just the GRID
const Blog = lazy(() => import('./pages/Blogs/Blog'));

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>      <Routes>

      {/* LEVEL 1: MAIN LAYOUT (Navbar + Footer) */}
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

        {/* LEVEL 2: SERVICES LAYOUT (Sidebar + Content) */}
        <Route path="/services" element={<ServicesLayout />}>

          {/* The Grid Dashboard (Default /services) */}
          <Route index element={
            <Suspense fallback={<div>Loading...</div>}><Services /></Suspense>
          } />

          {/* BRAND BOOK TOOLS (Nested inside Services Layout) */}
          <Route path="brand-book" element={
            <BrandProvider><BrandDashboard /></BrandProvider>
          } />

          <Route path="brand-book/editor" element={
            <BrandProvider><BrandEditor /></BrandProvider>
          } />

          {/* Note: Preview is here too, but ServicesLayout hides sidebar for it */}
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
// this is a test