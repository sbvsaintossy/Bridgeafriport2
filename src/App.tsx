/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Dynamic code-splitting for route pages
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const MarketsPage = lazy(() => import('./pages/MarketsPage').then(m => ({ default: m.MarketsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Lightweight corporate loading fallback
const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 bg-[#0E1A2B]">
    <div className="w-8 h-8 rounded-full border-2 border-[#1E334E] border-t-[#6BBF59] animate-spin" />
    <span className="font-mono text-xs text-[#E6E2D3]/60 tracking-wider uppercase">Loading Directorate Portal...</span>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#0E1A2B] text-[#F7F5EE] selection:bg-[#2E7D32]/50 selection:text-[#F7F5EE]">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/markets" element={<MarketsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
