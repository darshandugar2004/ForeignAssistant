import React from 'react';
import { Recipe } from '../../types';

interface RecipeDetailPopupProps {
  recipe: Recipe;
  position: { top: number; left: number; width: number };
  onClose: () => void;
}

const RecipeDetailPopup: React.FC<RecipeDetailPopupProps> = ({ recipe, position, onClose }) => {
  return (
    <div
      className="absolute z-50 bg-white rounded-lg shadow-2xl border border-[#F7A49E] p-6"
      style={{
        top: position.top + window.scrollY,   // Use top of card
        left: position.left + window.scrollX, // Use left of card
        minWidth: position.width,
        maxWidth: 500,
      }}
    >
      <button
        className="absolute top-2 right-2 text-[#F7A49E] hover:text-[#232220] text-lg"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <h3 className="text-xl font-bold mb-2 text-[#232220]">{recipe.name}</h3>
      <p className="text-xs text-[#4e4c4f] mb-2">{recipe.cuisine} | Prep: {recipe.prepTime}, Cook: {recipe.cookTime}</p>
      <p className="text-sm text-[#4e4c4f] mb-3">{recipe.description}</p>
      <h4 className="font-semibold text-[#232220] text-base mb-2">Ingredients:</h4>
      <ul className="list-disc list-inside text-sm text-[#4e4c4f] mb-4 pl-4 space-y-1">
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <h4 className="font-semibold text-[#232220] text-base mb-2">Instructions:</h4>
      <ol className="list-decimal list-inside text-sm text-[#4e4c4f] space-y-1 pl-4">
        {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </div>
  );
};

export default RecipeDetailPopup;