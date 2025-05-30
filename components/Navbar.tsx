
import React from 'react';
import { AppSection } from '../types';
import RestaurantIcon from './icons/RestaurantIcon';
import RecipeIcon from './icons/RecipeIcon';
import LanguageIcon from './icons/LanguageIcon';

interface NavbarProps {
  activeSection: AppSection;
  onSectionChange: (section: AppSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { section: AppSection.Restaurants, label: 'Restaurants', Icon: RestaurantIcon },
    { section: AppSection.Recipes, label: 'Recipes', Icon: RecipeIcon },
    { section: AppSection.Language, label: 'Language Help', Icon: LanguageIcon },
  ];

  return (
    <nav className="bg-[#232220] text-[#ffddba] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold">Jeenu's Taiwan Helper</h1>
          <div className="flex space-x-1 sm:space-x-2">
            {navItems.map(({ section, label, Icon }) => (
              <button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2
                  ${activeSection === section 
                    ? 'bg-[#F7A49E] text-[#232220] shadow-inner' // New active state
                    : 'hover:bg-[#F7A49E] hover:text-[#232220] hover:shadow-md transition-all duration-150 ease-in-out' // New hover state
                  }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;