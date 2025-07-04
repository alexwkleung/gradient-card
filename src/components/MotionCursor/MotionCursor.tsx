import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { SPRING_STIFFNESS, SPRING_DAMPING } from './constants/spring';

import type { MotionValue } from 'motion/react';

const MotionCursor = () => {
  const mouseCoordX: MotionValue<number> = useMotionValue(window.innerWidth / 2);
  const mouseCoordY: MotionValue<number> = useMotionValue(window.innerHeight / 2);

  const springX: MotionValue<number> = useSpring(mouseCoordX, {
    stiffness: SPRING_STIFFNESS,
    damping: SPRING_DAMPING,
  });

  const springY: MotionValue<number> = useSpring(mouseCoordY, {
    stiffness: SPRING_STIFFNESS,
    damping: SPRING_DAMPING,
  });

  useEffect(() => {
    const coordEvent = (e: MouseEvent) => {
      mouseCoordX.set(e.clientX - 16);
      mouseCoordY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', coordEvent);

    return () => window.removeEventListener('mousemove', coordEvent);
  }, [mouseCoordX, mouseCoordY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-gray-900 border border-gray-200 rounded-full pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
};

export default MotionCursor;
