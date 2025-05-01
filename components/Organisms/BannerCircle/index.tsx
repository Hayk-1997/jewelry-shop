import React from 'react';

interface IProps {
  circleDiameter: number;
  children?: React.ReactNode;
}

const BannerCircle: React.FC<IProps> = ({ circleDiameter, children }): React.JSX.Element => {
  const dots = Array.from({ length: 40 });
  const dotSize = 8;
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
        border: '2px dashed transparent', // optional border
        margin: '100px auto',
        background: 'transparent',
      }}
    >
      {dots.map((_, i) => {
        const angle = (i / dots.length) * 360;
        return (
          <div
            key={i}
            className="position-absolute border-radious-50"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: '#000',
              top: `calc(50% - ${dotSize / 2}px)`,
              left: `calc(50% - ${dotSize / 2}px)`,
              transform: `rotate(${angle}deg) translate(${radius}px)`,
              transformOrigin: 'center',
            }}
          />
        );
      })}
      {children && children}
    </div>
  );
};

export default BannerCircle;
