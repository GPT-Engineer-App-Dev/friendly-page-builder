import React from 'react';
import { Heart } from 'lucide-react';

const Vision = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Heart className="text-white mr-2" size={24} />
          <span className="font-bold text-xl">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>GPT Engineer</li>
            <li>Vision</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center px-4 md:px-20 lg:px-40 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight">
          Unlock human creativity — by enabling anyone to create software
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            For three decades, software has been the most significant tool to unleash the world's ambition. Still, less
            than 1% of the world has the skills required to create software.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Vision</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            If we succeed, everyone will have the same capabilities that entire product development teams at stellar
            tech companies have today – which we think will unlock a new era of innovation.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're reducing the barriers to build and staying committed to unleashing human creativity on an
            unprecedented scale.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="text-white mr-2" size={24} />
            <span className="font-bold text-xl">lovable</span>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-2">GPT Engineer</h4>
              <ul className="space-y-2">
                <li>Overview</li>
                <li>For Everyone</li>
                <li>For Developers</li>
                <li>For Agencies</li>
                <li>Get early access ↗</li>
                <li>Login ↗</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul className="space-y-2">
                <li>Vision</li>
                <li>News</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-6">
          {/* Social media icons (same as in Index.jsx) */}
          {/* ... */}
        </div>
      </footer>
    </div>
  );
};

export default Vision;