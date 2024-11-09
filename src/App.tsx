import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PersonalMessage from './components/PersonalMessage';
import MessageGenerator from './components/MessageGenerator';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Gallery />
      <PersonalMessage />
      <MessageGenerator />
      <footer className="py-8 text-center bg-gradient-to-t from-black to-gray-900">
        <p className="text-gray-400">
          Создано с ❤️ для 20-летия Александра
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Разработано: Серапин Андрей
        </p>
      </footer>
    </div>
  );
}

export default App;