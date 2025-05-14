import React, { useEffect } from 'react';
import Circle from '@/components/Organisms/BannerCircle/Circle';
import { UITransactionDirection } from '@/enum/UITransaction';

interface IProps {
  circleDiameter: number;
  executeTransition: boolean;
  children?: React.ReactNode;
}

const BannerCircle: React.FC<IProps> = ({ circleDiameter, executeTransition = true, children }): React.JSX.Element => {
  const dots = Array.from({ length: 40 });
  const dotSize = 5;
  const radius = circleDiameter / 2;
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const animationFrameRef = React.useRef<number>();

  useEffect(() => {
    const ref = elementRef.current;
    if (!ref) return;

    let startTime: number | null = null;
    const rotationSpeed = 0.002;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const degree = (elapsed * rotationSpeed) % 360;

      ref.style.transform = `translate3d(0px, 0px, 0px) rotate(${degree}deg)`;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (executeTransition) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [executeTransition]);

  return (
    <div
      ref={elementRef}
      className="rounded-full! relative"
      style={{
        width: `${circleDiameter}px`,
        height: `${circleDiameter}px`,
        border: '2px dashed transparent',
        margin: '100px auto',
        background: 'transparent',
      }}
    >
      {dots.map((_, index) => (
        <Circle
          key={index}
          dotSize={dotSize}
          angle={(index / dots.length) * 360}
          baseRadius={radius}
          executeTransition={executeTransition}
          scalingDirection={Math.random() > 0.5 ? UITransactionDirection.UP : UITransactionDirection.DOWN}
        />
      ))}
      {children && children}
    </div>
  );
};

export default BannerCircle;
