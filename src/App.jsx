import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './App.css';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutMe/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const Blog = lazy(() => import('./pages/Blogs/Blog'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="container" style={{ padding: '2rem' }}>Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<Services />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;