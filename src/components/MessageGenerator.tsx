import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';

const messages = [
  "Пусть твои дороги будут такими же плавными, как управление BMW!",
  "За 20 лет жизни и множество будущих BMW!",
  "Желаю бесконечных поездок и идеальной погоды для вождения!",
  "Пусть этот год будет таким же мощным, как двигатель M серии!"
];

export default function MessageGenerator() {
  const [message, setMessage] = useState(messages[0]);

  const generateMessage = () => {
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(newMessage);
  };

  const shareMessage = async () => {
    try {
      await navigator.share({
        title: "Поздравления для Александра",
        text: message,
        url: window.location.href
      });
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Генератор Поздравлений</h2>
          <div className="bg-white bg-opacity-10 rounded-lg p-8 mb-6">
            <p className="text-xl text-white mb-6">{message}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={generateMessage}
                className="px-6 py-3 bg-bmw-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Новое Поздравление
              </button>
              <button
                onClick={shareMessage}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <Share2 size={20} />
                Поделиться
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}