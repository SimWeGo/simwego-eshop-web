import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export const ProcessSteps = ({ steps, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("relative max-w-5xl mx-auto", className)}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="relative mb-8 md:mb-16 last:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Connection Line */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute left-6 top-16 w-0.5 h-36 md:h-44 bg-white/30 z-0" />
          )}
          
          {/* Step Container */}
          <div className="relative z-10 flex items-center gap-6 md:gap-10">
            {/* Step Number Circle */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-lg font-black text-primary">
                  {step.number}
                </span>
              </div>
            </motion.div>
            
            {/* Step Content */}
            <motion.div
              className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Step Icon/Image */}
                {step.image && (
                  <div className="hidden lg:flex flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/10 p-3 flex items-center justify-center">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessSteps;