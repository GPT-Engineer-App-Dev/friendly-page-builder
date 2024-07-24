import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <Heart className="text-white mr-2" size={24} />
          <span className="font-bold text-xl">lovable</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/gpt-engineer" className="hover:text-gray-300">GPT Engineer</Link></li>
            <li><Link to="/vision" className="hover:text-gray-300">Vision</Link></li>
            <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
            <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8 w-32 h-32">
          <video autoPlay loop muted playsInline className="w-full h-full">
            <source src="https://lovable.dev/_astro/heart.vg-4UgjD.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-4xl font-bold mb-4">The last piece of software.</h1>
        <p className="max-w-2xl mb-12">
          We're building software that builds software. Our vision is to unlock
          human creativity — by enabling anyone to create software.
        </p>
        <div className="flex items-center mb-8">
          <img src="/placeholder.svg" alt="GPT Engineer logo" className="w-6 h-6 mr-2" />
          <span className="text-xl">GPTEngineer</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">It starts with an AI software engineer.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {['For Everyone', 'For Developers', 'For Agencies'].map((title, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 flex justify-between items-center">
                {title} <span>&gt;</span>
              </h3>
              <p className="text-sm">
                {index === 0 && "Chat with AI to build and deploy web apps, with no technical knowledge needed."}
                {index === 1 && "Collaborate in chat and code with an AI engineer, to build at lightning speed."}
                {index === 2 && "Partner with AI to streamline web app creation, iteration, and support."}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      {/* ... (footer code remains the same) ... */}
    </div>
  );
};

export default Index;