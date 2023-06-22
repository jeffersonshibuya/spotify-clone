import { forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        className={twMerge(
          `flex w-full rounded-md border border-transparent  bg-neutral-700 
          px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium
          placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed
          disabled:opacity-50`,
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
