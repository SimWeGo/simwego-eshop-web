import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const AnimatedNumber = ({ value, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const end = parseInt(value);
        const duration = 1000;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setDisplayValue(end);
            clearInterval(counter);
          } else {
            setDisplayValue(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: delay / 1000 
      }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;