import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    caption: 'BMW M5 Competition'
  },
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a',
    caption: 'Современная Элегантность'
  },
  {
    url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
    caption: 'Мощь и Характер'
  },
  {
    url: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
    caption: 'Драйв и Страсть'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Моменты с BMW
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.caption}
                loading="lazy"
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl font-semibold">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}