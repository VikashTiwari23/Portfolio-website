import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

interface NeonGradientCardProps {
  className?: string;
  children?: ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: {
    firstColor?: string;
    secondColor?: string;
  };
}

export const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className = "",
  children,
  borderSize = 4,
  borderRadius = 160,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFa",
  },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const gradient = `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor}, ${neonColors.firstColor})`;

  return (
    <div
      ref={containerRef}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--pseudo-width": `${dimensions.width + borderSize * 2}px`,
          "--pseudo-height": `${dimensions.height + borderSize * 2}px`,
          "--card-content-radius": `${Math.max(0, borderRadius - borderSize)}px`,
        } as CSSProperties
      }
      className={`relative z-10 flex items-center justify-center rounded-[var(--border-radius)] ${className}`}
    >
      {/* Sharp Border Line */}
      <div
        style={{
          backgroundImage: gradient,
          backgroundSize: "100% 200%",
        }}
        className="
          absolute -top-[var(--border-size)] -left-[var(--border-size)] -z-10
          h-[var(--pseudo-height)] w-[var(--pseudo-width)]
          rounded-[var(--border-radius)]
          animate-background-position-spin
        "
      />

      {/* Subtle Outer Neon Glow */}
      <div
        style={{
          backgroundImage: gradient,
          backgroundSize: "100% 200%",
        }}
        className="
          absolute -top-[var(--border-size)] -left-[var(--border-size)] -z-20
          h-[var(--pseudo-height)] w-[var(--pseudo-width)]
          rounded-[var(--border-radius)]
          blur-md opacity-60
          animate-background-position-spin
        "
      />

      {/* Image Container with matching curve and no padding */}
      <div className="relative size-full overflow-hidden rounded-[var(--card-content-radius)]">
        {children}
      </div>
    </div>
  );
};

export default NeonGradientCard;