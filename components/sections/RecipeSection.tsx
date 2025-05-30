import React, { useState, useRef } from 'react';
import { Recipe } from '../../types';
import { PREDEFINED_RECIPES } from '../../constants';
import RecipeDetailPopup from './RecipeDetailPopup';

interface RecipeCardProps {
  recipe: Recipe;
  onShowDetail: (recipe: Recipe, rect: DOMRect) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onShowDetail }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      onShowDetail(recipe, rect);
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-[#F7A49E] rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${recipe.name}`}
    >
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-[#232220] mb-1">{recipe.name}</h3>
        <p className="text-xs text-[#4e4c4f] mb-2">{recipe.cuisine} | Prep: {recipe.prepTime}, Cook: {recipe.cookTime}</p>
        <p className="text-sm text-[#4e4c4f] mb-3 flex-grow">{recipe.description}</p>
      </div>
    </div>
  );
};

const RecipeSection: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number; width: number } | null>(null);

  const handleShowDetail = (recipe: Recipe, rect: DOMRect) => {
    setSelectedRecipe(recipe);
    setPopupPosition({ top: rect.top, left: rect.left, width: rect.width });
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
    setPopupPosition(null);
  };

  return (
    <div className="p-4 md:p-6 space-y-6 relative">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#232220] mb-2">Khana Khazana mai Aapka Swagat hai 😋</h2>
        <p className="text-[#4e4c4f]">
          Click on a card for details.
          Need a specific recipe or cooking advice? Use the chat assistant!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {PREDEFINED_RECIPES.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onShowDetail={handleShowDetail} />
        ))}
      </div>

      {selectedRecipe && popupPosition && (
        <RecipeDetailPopup
          recipe={selectedRecipe}
          position={popupPosition}
          onClose={handleClosePopup}
        />
      )}

      <div className="mt-8 text-center text-[#9f8d8d] italic">
        <p>Looking for a different recipe or have cooking questions? Click the chat icon to ask your assistant!</p>
      </div>
    </div>
  );
};

export default RecipeSection;