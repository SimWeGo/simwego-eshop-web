import { motion } from "framer-motion";
import { Wifi, Smartphone, Globe, Zap, Shield, Clock } from "lucide-react";

export const FloatingIcons = () => {
  const icons = [
    { icon: Wifi, delay: 0, x: "10%", y: "20%" },
    { icon: Smartphone, delay: 1, x: "80%", y: "15%" },
    { icon: Globe, delay: 2, x: "20%", y: "70%" },
    { icon: Zap, delay: 0.5, x: "90%", y: "60%" },
    { icon: Shield, delay: 1.5, x: "15%", y: "45%" },
    { icon: Clock, delay: 2.5, x: "75%", y: "80%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconComponent 
              size={24} 
              className="text-white/30" 
            />
          </motion.div>
        );
      })}
    </div>
  );
};