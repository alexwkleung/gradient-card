import type { ReactNode } from 'react';

interface CardFaceProps {
  children: ReactNode;
  back?: boolean;
}

const CardFace = ({ children, back = false }: CardFaceProps) => {
  return (
    <div
      className={`${back ? 'absolute inset-0 bg-neutral-50' : 'relative'} ${'h-180 w-125 border border-gray-500 rounded-2xl flex items-center justify-center overflow-hidden drop-shadow-lg hover:drop-shadow-2xl transition-shadow duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,200,1)_0%,rgba(255,255,200,0)_20%),radial-gradient(circle_at_50%_0%,rgba(250,219,234,1)_0%,rgba(250,219,234,0)_35%),radial-gradient(circle_at_50%_0%,rgba(250,219,234,0.3)_0%,rgba(250,219,234,0)_50%),linear-gradient(200deg,rgba(92,94,135,1)_0%)]'}`}
      style={{
        backfaceVisibility: 'hidden',
        transform: back ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}
    >
      <div className="relative z-10">
        <div className="select-none p-10 text-gray-50">{children}</div>
      </div>
    </div>
  );
};

export default CardFace;
