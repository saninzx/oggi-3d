import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ image, imageAlt, title, description, className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full rounded-2xl overflow-hidden relative",
          "border border-white/10 backdrop-blur-sm",
          "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]",
          className
        )}
      >
        {/* 16:9 Image Container */}
        <div className="relative w-full aspect-[16/9]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          
          {/* Caption/Content */}
          <div className="absolute left-4 bottom-4 right-4">
            <h3 className="text-3xl font-extrabold leading-tight text-white mb-2">
              {title}
            </h3>
            {description && (
              <p className="text-[15px] text-white/80 max-w-prose leading-relaxed">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";
