import React from "react";
import InputMask from "react-input-mask";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string;
  className?: string;
}

export const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, className, ...props }, ref) => {
    return (
      <InputMask
        mask={mask}
        {...props}
      >
        {(inputProps: any) => (
          <Input 
            {...inputProps}
            ref={ref}
            className={cn("bg-background/50 border-primary/20 focus:border-primary", className)}
          />
        )}
      </InputMask>
    );
  }
);