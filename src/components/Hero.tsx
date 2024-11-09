import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { motion } from 'framer-motion';
import { ru } from 'date-fns/locale';
import Countdown from './Countdown';

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const warsawTime = zonedTimeToUtc(new Date(), 'Europe/Warsaw');
      setTime(format(warsawTime, 'HH:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738"
          alt="BMW M5 F90"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-white"
        >
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bmw-blue via-white to-bmw-red">
              С 20-летием!
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Александр Гриневич</h2>
            <p className="text-2xl md:text-3xl mb-4">Время в Варшаве: {time}</p>
            <Countdown targetDate="2024-11-10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}