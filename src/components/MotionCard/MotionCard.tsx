import { useState, useRef } from 'react';
import { motion } from 'motion/react';

const MotionCard = () => {
  const [cardTiltPos, setCardTiltPos] = useState({ rotateX: 0, rotateY: 0 });
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
        <div
          className="h-180 w-125 border border-gray-500 rounded-2xl flex items-center justify-center relative overflow-hidden drop-shadow-lg hover:drop-shadow-2xl transition-shadow duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,200,1)_0%,rgba(255,255,200,0)_20%),radial-gradient(circle_at_50%_0%,rgba(250,219,234,1)_0%,rgba(250,219,234,0)_35%),radial-gradient(circle_at_50%_0%,rgba(250,219,234,0.3)_0%,rgba(250,219,234,0)_50%),linear-gradient(200deg,rgba(92,94,135,1)_0%)]"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <div className="relative z-10">
            <div className="select-none p-10 text-gray-50">
              <h1 className="text-center">Hello 你好!</h1>
              <p>This is Alex's small experimental project</p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 h-180 w-125 border border-gray-500 rounded-2xl flex items-center justify-center bg-neutral-50 overflow-hidden drop-shadow-lg hover:drop-shadow-2xl transition-shadow duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,200,1)_0%,rgba(255,255,200,0)_20%),radial-gradient(circle_at_50%_0%,rgba(250,219,234,1)_0%,rgba(250,219,234,0)_35%),radial-gradient(circle_at_50%_0%,rgba(250,219,234,0.3)_0%,rgba(250,219,234,0)_50%),linear-gradient(200deg,rgba(92,94,135,1)_0%)]"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="relative z-10">
            <div className="select-none p-10 text-gray-50">
              <h1 className="text-center">Back</h1>
              <p>This is the backside of the card</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MotionCard;
