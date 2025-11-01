import React from 'react';
import { Link } from 'react-router-dom';
import { Pill } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Pill className="h-6 w-6 text-sky-600" />
            <span className="text-lg font-bold">MediCarePlus</span>
          </div>
          <div className="flex space-x-6 text-base text-muted-foreground">
            <a href="#features" className="hover:text-sky-600">Features</a>
            <a href="#how-it-works" className="hover:text-sky-600">How It Works</a>
            <Link to="/dashboard" className="hover:text-sky-600">Dashboard</Link>
          </div>
          <p className="text-base text-muted-foreground">&copy; 2025 MediCarePlus. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
