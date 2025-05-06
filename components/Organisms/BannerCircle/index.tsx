import React from 'react';
import Circle from '@/components/Organisms/BannerCircle/Circle';
import { UITransactionDirection } from '@/enum/UITransaction';

interface IProps {
  circleDiameter: number;
  children?: React.ReactNode;
}

const BannerCircle: React.FC<IProps> = ({ circleDiameter, children }): React.JSX.Element => {
  const dots = Array.from({ length: 40 });
  const dotSize = 5;
  const radius = circleDiameter / 2;

  const handleRef = (ref: HTMLDivElement | null) => {
    if (ref) {
      let startTime: number | null = null;
      const rotationSpeed = 0.002; // degrees per millisecond

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const degree = (elapsed * rotationSpeed) % 360;

        // Dynamically set rotation direction
        ref.style.transform = `translate3d(0px, 0px, 0px) rotate(${degree}deg)`;
        requestAnimationFrame(animate);
      };

      const animationFrame = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  };

  return (
    <div
      ref={handleRef}
      className="border-radious-50 position-relative"
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
          scalingDirection={Math.random() > 0.5 ? UITransactionDirection.UP : UITransactionDirection.DOWN}
        />
      ))}
      {children && children}
    </div>
  );
};

export default BannerCircle;
