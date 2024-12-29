'use client'

import React from "react";
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border border-[#872CAF] bg-white p-2 text-center font-semibold w-full sm:w-auto min-w-[120px] text-[#872CAF] hover:text-white transition-colors duration-500",
        className,
      )}
      {...props}
    >
      <span className="inline-block transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-5 sm:group-hover:translate-x-10">
        {text}
      </span>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 text-white z-10">
        <span className="mr-2">Przejdź</span>
        <ArrowRight className="h-4 w-4" />
      </div>
      <div className="absolute inset-0 bg-[#872CAF] opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

