import React from 'react';
import { Link } from 'react-router-dom';
import { Pill } from 'lucide-react';
import { Button } from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Pill className="h-8 w-8 text-sky-600" />
            <span className="text-2xl font-bold text-gray-800">MediCarePlus</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-lg font-medium text-gray-600 hover:text-sky-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-lg font-medium text-gray-600 hover:text-sky-600 transition-colors">
              How It Works
            </a>
          </nav>
          <Link to="/dashboard">
            <Button size="lg" className="text-lg">Login / Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
