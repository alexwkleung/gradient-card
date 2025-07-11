import type { ReactNode } from 'react';

interface WrapperContainerProps {
  children: ReactNode;
}

const WrapperContainer = ({ children }: WrapperContainerProps) => {
  return <div className="flex items-center justify-center min-h-screen">{children}</div>;
};

export default WrapperContainer;
