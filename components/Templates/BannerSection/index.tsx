import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import BannerCircle from '@/components/Organisms/BannerCircle';

import '@assets/styles/banner.min.scss';

const BannerSection: React.FC = (): React.JSX.Element => {
  const sectionRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const videoDiv = videoRef.current;

      if (videoDiv) {
        const maxScroll = window.innerHeight * 1.6;
        const progress = Math.min(scrollY / maxScroll, 1) * 4;

        // Calculate the new clipPath size based on scroll progress
        const clipSize = 20 + progress * 40; // Start at 20% and increase up to 50%
        const verticalPosition = 74 + progress * 28; // Start at 74% and increase up to 84%

        if (verticalPosition > 110) {
          return;
        }
        videoDiv.style.clipPath = `circle(${clipSize}% at 50% ${verticalPosition}%)`;

        // Optionally, you can also scale the div size if needed
        const scale = 1 + progress * 0.5; // Scale up to 1.5x
        videoDiv.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="position-absolute text-center top-100 z-index-10">
        <h1 className="font-size-4xl font-weight-bold color-white">Zakarian Jewelry and online shop </h1>
        <p className="font-size-base margin-top-1rem color-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <div className="banner_wrapper position-absolute">
        <BannerCircle circleDiameter={1200}>
          <BannerCircle circleDiameter={1000}>
            <BannerCircle circleDiameter={800} />
          </BannerCircle>
        </BannerCircle>
      </div>

      <div ref={videoRef} className="hero__video cursor-text">
        <video autoPlay loop muted playsInline>
          <source
            src="https://media2.bulgari.com/video/upload/f_auto,q_auto/v1715000019/HJ/collection/24/meshup-16x9.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default BannerSection;
