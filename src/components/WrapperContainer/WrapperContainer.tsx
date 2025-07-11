import type { ReactNode } from 'react';

interface WrapperContainerProps {
  children: ReactNode;
}

const WrapperContainer = ({ children }: WrapperContainerProps) => {
  return <div className="relative flex flex-col min-h-screen">{children}</div>;
};

export default WrapperContainer;
