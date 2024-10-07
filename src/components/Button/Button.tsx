import * as React from 'react';
import { StyledButton } from "./Button.styles";
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : StyledButton;
    return <Comp {...props} ref={forwardedRef} />;
  }
);

Button.displayName = 'Button';