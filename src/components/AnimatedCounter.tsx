import { useEffect, useRef, useState } from 'react';
import { useInView, useSpring, useTransform, motion } from 'motion/react';

export default function AnimatedCounter({ value, duration = 2 }: { value: number | string, duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse numeric part and suffix (e.g. "150+" -> num: 150, suffix: "+")
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) : value;
  const suffix = typeof value === 'string' ? value.replace(/[0-9]/g, '') : '';
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView && !hasAnimated && !isNaN(numericValue)) {
      spring.set(numericValue);
      setHasAnimated(true);
    }
  }, [isInView, spring, numericValue, hasAnimated]);

  if (isNaN(numericValue)) return <span>{value}</span>;

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
