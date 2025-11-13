import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          " bg-gradient-to-br from-primary to-secondary"
        )}
      ></div>
      <div
        className={cn(
          "relative z-10 rounded-3xl overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};