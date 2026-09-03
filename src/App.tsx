/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project } from './types';

// Components (12-Section Architecture)
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudies } from './components/CaseStudies';
import { ToolsTech } from './components/ToolsTech';
import { WorkProcess } from './components/WorkProcess';
import { ProjectProof } from './components/ProjectProof';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ImageLightboxModal } from './components/ImageLightboxModal';

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<{
    src: string;
    title: string;
    caption?: string;
  } | null>(null);

  const handleOpenLightbox = (artwork: { src: string; title: string; caption?: string }) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseLightbox = () => {
    setSelectedArtwork(null);
  };

  return (
    <div className="min-h-screen bg-white text-[#4B2E9B] font-hind relative selection:bg-[#1267D3]/15 selection:text-[#1267D3]">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section (2-Column Desktop + Preserved AI Orb Signature) */}
        <Hero />

        {/* 3. About Section (আমার সম্পর্কে) */}
        <About />

        {/* 4. Core Services (আমি যেসব সার্ভিস দিই - 4 Cards) */}
        <Services />

        {/* 5. Selected Portfolio / Work (নির্বাচিত কাজ - 5 Category Filters) */}
        <SelectedWork onOpenLightbox={handleOpenLightbox} />

        {/* 6. Detailed Case Studies (কাজের পেছনের প্রক্রিয়া ও ফলাফল) */}
        <CaseStudies onOpenLightbox={handleOpenLightbox} />

        {/* 7. Tools & Skills (5 Structured Clusters) */}
        <ToolsTech />

        {/* 8. Work Process (আমি যেভাবে কাজ করি - 5 Steps) */}
        <WorkProcess />

        {/* 9. Client / Project Proof (কাজের প্রমাণ - Video Player & Deliverables) */}
        <ProjectProof />

        {/* 10. FAQ Section (সাধারণ জিজ্ঞাসা ও উত্তর - 6 Items) */}
        <FaqSection />

        {/* 11. Final Project CTA (আপনার পরবর্তী Project নিয়ে কথা বলা যাক) */}
        <FinalCta />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Image Zoom / Lightbox Modal */}
      <ImageLightboxModal
        artwork={selectedArtwork}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
