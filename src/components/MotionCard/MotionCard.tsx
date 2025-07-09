import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import CardFace from './CardFace/CardFace';

interface CardTiltPos {
  rotateX: number;
  rotateY: number;
}

const MotionCard = () => {
  const [cardTiltPos, setCardTiltPos] = useState<CardTiltPos>({ rotateX: 0, rotateY: 0 });
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect: DOMRect = containerRef.current.getBoundingClientRect();

      const x: number = e.clientX - rect.left;
      const y: number = e.clientY - rect.top;

      const centerX: number = rect.width / 2;
      const centerY: number = rect.height / 2;

      const rotateY: number = ((x - centerX) / centerX) * 15;
      const rotateX: number = ((centerY - y) / centerY) * 15;

      setCardTiltPos({ rotateX, rotateY });
    }
  };

  const handleMouseLeave = () => {
    setCardTiltPos({ rotateX: 0, rotateY: 0 });
  };

  const handleCardFlip = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardFlip}
      className="relative"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{
          scale: 1.02,
          y: -8,
          rotateX: cardTiltPos.rotateX,
          rotateY: isCardFlipped ? 180 + cardTiltPos.rotateY : cardTiltPos.rotateY,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black rounded-lg opacity-20 blur-xl"
          animate={{
            scale: 1.05,
            y: 12,
            opacity: cardTiltPos.rotateX !== 0 || cardTiltPos.rotateY !== 0 ? 0.3 : 0.2,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        />
        <CardFace>
          <h1 className="text-center">Hello 你好!</h1>
          <p>This is Alex's small experimental project</p>
        </CardFace>
        <CardFace back>
          <h1 className="text-center">Back</h1>
          <p>This is the backside of the card</p>
        </CardFace>
      </motion.div>
    </motion.div>
  );
};

export default MotionCard;
