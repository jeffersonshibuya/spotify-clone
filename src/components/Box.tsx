import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={twMerge(`h-fit w-full rounded-lg bg-neutral-900 `, className)}
    >
      {children}
    </div>
  );
};

export default Box;
