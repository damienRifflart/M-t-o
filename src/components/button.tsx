import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    setMousePos({
      x: event.clientX - buttonRect.left,
      y: event.clientY - buttonRect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        className="bg-[#0a1629] py-2 px-7 rounded-2xl border-2 border-[#1e3a8a] relative overflow-hidden"
        animate={{
          scale: [0, 1, 1.01, 1],
          opacity: [0, 1],
        }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href='#inscription' className="text-3xl font-bold text-[#3b82f6] relative z-10">
          {text}
        </a>
        {isMouseInside && (
          <motion.div 
            className="w-10 h-10 bg-[#3b82f6] rounded-full blur-lg absolute pointer-events-none opacity-30"
            initial={false}
            animate={{
              x: mousePos.x - 50,
              y: mousePos.y - 60,
            }}
            transition={{
              type: "spring",
              stiffness: 1000,
              damping: 50
            }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Button;