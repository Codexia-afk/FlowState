import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label?: string;
}

export default function AnimatedCounter({ end, duration = 2, suffix = '', label }: AnimatedCounterProps) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const top = document.documentElement.scrollTop;
      if (top > 100) setInView(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl font-bold text-emerald-400">
        {inView && <CountUp end={end} duration={duration} suffix={suffix} />}
      </div>
      {label && <p className="text-gray-300 mt-2">{label}</p>}
    </motion.div>
  );
}
