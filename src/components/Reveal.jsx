import { motion } from 'framer-motion';

export default function Reveal({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
}