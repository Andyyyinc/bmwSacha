import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function PersonalMessage() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Послание от Андрея</h2>
          <div className="bg-white bg-opacity-10 rounded-lg p-8">
            <p className="text-xl text-white leading-relaxed">
              "Дорогой Александр, наблюдать за тем, как ты вырос в удивительного человека, 
              которым являешься сегодня, было невероятно. Твоя страсть к BMW и к жизни 
              по-настоящему вдохновляет. За многие годы дружбы, приключений и прекрасных 
              автомобилей! С 20-летием!"
            </p>
            <div className="mt-6 text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Heart className="text-red-500" />
                <span>Твой друг, Андрей Серапин</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}