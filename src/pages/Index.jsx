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
            <li><Link to="/" className="hover:text-gray-300">GPT Engineer</Link></li>
            <li><Link to="/vision" className="hover:text-gray-300">Vision</Link></li>
            <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
            <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      {/* ... (rest of the main content remains the same) ... */}

      {/* Footer */}
      <footer className="mt-16 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <Link to="/" className="flex items-center mb-4 md:mb-0">
            <Heart className="text-white mr-2" size={24} />
            <span className="font-bold text-xl">lovable</span>
          </Link>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-2">GPT Engineer</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gray-300">Overview</Link></li>
                <li><Link to="/" className="hover:text-gray-300">For Everyone</Link></li>
                <li><Link to="/" className="hover:text-gray-300">For Developers</Link></li>
                <li><Link to="/" className="hover:text-gray-300">For Agencies</Link></li>
                <li><a href="#" className="hover:text-gray-300">Get early access ↗</a></li>
                <li><a href="#" className="hover:text-gray-300">Login ↗</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/vision" className="hover:text-gray-300">Vision</Link></li>
                <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
                <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/* ... (social media icons remain the same) ... */}
      </footer>
    </div>
  );
};

export default Index;