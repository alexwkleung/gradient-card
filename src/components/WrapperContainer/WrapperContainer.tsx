import type { ReactNode } from 'react';

const WrapperContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center justify-center min-h-screen">{children}</div>;
};

export default WrapperContainer;
