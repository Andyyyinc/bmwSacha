import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const timeLabels = {
  days: 'дней',
  hours: 'часов',
  minutes: 'минут',
  seconds: 'секунд'
};

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <motion.div
          key={key}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm"
        >
          <div className="text-4xl font-bold">{value}</div>
          <div className="text-sm uppercase">{timeLabels[key as keyof typeof timeLabels]}</div>
        </motion.div>
      ))}
    </div>
  );
}