import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const NovaDenteLogo: React.FC<LogoProps> = ({
  className = "w-full h-full",
  size,
  color = "#ffffff",
}) => {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: (size * 80) / 100 } : undefined}
    >
      {/* 
        Exact geometric vector reproduction of Nova Dente monogram logo:
        - N with left vertical bar, diagonal line
        - Right vertical bar of N extending upward
        - D letter overlapping and looping around the lower half to the right
      */}
      <g stroke={color} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left upright of N */}
        <line x1="16" y1="14" x2="16" y2="66" />
        
        {/* Diagonal stroke of N */}
        <line x1="16" y1="14" x2="56" y2="66" />
        
        {/* Right upright of N */}
        <line x1="56" y1="14" x2="56" y2="66" />
        
        {/* D letter shape overlapping and extending rightwards */}
        <path d="M42 46 L60 46 C76 46 88 52 88 64 C88 74 76 78 60 78 L42 78 Z" />
      </g>
    </svg>
  );
};
