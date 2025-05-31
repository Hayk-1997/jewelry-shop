'use client';

import React, { useRef } from 'react';
import BannerSection from '@/components/Templates/BannerSection';
import HomePageSections from '@/components/Templates/HomePageSections';
import JewelryModel from '@/components/Organisms/JewelryModel';

const HomePage: React.FC = (): React.JSX.Element => {
  const heroRef = useRef(null);

  return (
    <>
      <BannerSection parentRef={heroRef} />

      {/* 3D Jewelry Model Animation */}
      <JewelryModel />

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <p style={{ fontSize: '1rem' }}>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
