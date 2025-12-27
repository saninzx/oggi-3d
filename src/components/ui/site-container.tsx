import * as React from "react";
import { cn } from "@/lib/utils";

interface SiteContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const SiteContainer = React.forwardRef<HTMLDivElement, SiteContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SiteContainer.displayName = "SiteContainer";
