'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import Lenis from '@studio-freight/lenis';

// This component will load and render the 3D model
function JewelryModelObject({ scrollY }) {
  const { scene } = useGLTF('/models/jewelry_ring.glb');
  const modelRef = useRef();

  // Rotate the model based on scroll position
  useFrame(() => {
    if (modelRef.current) {
      // Horizontal rotation based on scroll - reduced speed
      modelRef.current.rotation.y = scrollY.current * 0.003;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.5} position={[0, 0, 0]} />;
}

const JewelryModel = () => {
  const scrollY = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update scrollY value on scroll
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="jewelry-model-section"
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        backgroundColor: '#f8f8f8',
        overflow: 'hidden',
      }}
    >
      <div className="model-container" style={{ height: '100%', width: '100%' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <JewelryModelObject scrollY={scrollY} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <div 
        className="model-overlay"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#333',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Exquisite Craftsmanship</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
          Discover our collection of handcrafted jewelry pieces, designed with precision and passion.
          Scroll to explore the intricate details of our signature ring.
        </p>
      </div>
    </section>
  );
};

export default JewelryModel;
