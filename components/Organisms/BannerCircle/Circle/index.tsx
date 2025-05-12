import React, { useEffect, useRef } from 'react';
import { UITransactionDirection } from '@/enum/UITransaction';

interface IProps {
  dotSize: number;
  angle: number;
  baseRadius: number;
  scalingDirection: UITransactionDirection;
  executeTransition: boolean;
}

const Circle: React.FC<IProps> = ({
  dotSize,
  angle,
  baseRadius,
  scalingDirection,
  executeTransition,
}): React.JSX.Element => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const growing = useRef(true);
  const animationFrameRef = React.useRef<number>();

  useEffect(() => {
    let scale = scalingDirection === UITransactionDirection.UP ? 1 : 2; // Initial scale based on animationType
    const animate = () => {
      if (circleRef.current) {
        // Update scale value
        if (growing.current && scale >= 2) {
          growing.current = false;
        } else if (!growing.current && scale <= 1) {
          growing.current = true;
        }
        scale = growing.current ? scale + 0.01 : scale - 0.01;

        // Apply combined transform styles
        circleRef.current.style.transform = `rotate(${angle}deg) translate(${baseRadius}px) scale(${scale})`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (executeTransition) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (circleRef.current && animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [angle, baseRadius, scalingDirection, executeTransition]);

  return (
    <div
      ref={circleRef}
      className="absolute rounded-full"
      style={{
        width: dotSize,
        height: dotSize,
        backgroundColor: ['gray', 'blue', 'yellow'][Math.floor(Math.random() * 3)],
        top: `calc(50% - 4px)`,
        left: `calc(50% - 4px)`,
        transformOrigin: 'center',
      }}
    />
  );
};

export default Circle;
