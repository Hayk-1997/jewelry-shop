import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const sections = ['section1', 'section2', 'section3', 'section4'];

interface IProps {
  parentRef: React.RefObject<HTMLElement>;
}

const HomePageSections: React.FC<IProps> = ({ parentRef }): React.JSX.Element => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setShowDots(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    if (parentRef.current) heroObserver.observe(parentRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (parentRef.current) heroObserver.unobserve(parentRef.current);
    };
  }, [parentRef]);

  const scrollToSection = (index: number) => {
    const target = sectionRefs.current[index];
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  return (
    <div className="relative">
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {showDots && (
          <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 flex flex-col gap-4">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      {sections.map((section, index) => (
        <div
          key={section}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="h-screen flex items-center justify-center text-3xl font-semibold bg-white border-b border-gray-200"
        >
          {`Content of ${section}`}
        </div>
      ))}
    </div>
  );
};

export default HomePageSections;
