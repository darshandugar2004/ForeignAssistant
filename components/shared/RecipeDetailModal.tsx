import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { Recipe } from '../../types';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
  anchorElement: HTMLDivElement | null;
}

const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, onClose, anchorElement }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    position: 'absolute',
    visibility: 'hidden',
    opacity: 0,
    transform: 'scale(0.95)',
    transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
  });
  const [isMeasuring, setIsMeasuring] = useState(false);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  // Step 1: When anchor/recipe changes, prepare for measurement
  useLayoutEffect(() => {
    if (anchorElement && recipe) {
      setStyle({
        position: 'absolute',
        visibility: 'hidden', // Keep hidden during initial placement for measurement
        opacity: 0,
        transform: 'scale(0.95)',
        // Important: Apply transition here so it's set before visibility/opacity change
        transition: 'opacity 0.15s ease-out, transform 0.15s ease-out', 
        left: '0px', // Place at 0,0 of container to be in layout flow
        top: '0px',
      });
      setIsMeasuring(true); // Trigger the measurement effect
    } else {
      // Not ready or closing, ensure it's hidden and reset measuring state
      setStyle(prev => ({ 
        ...prev, 
        visibility: 'hidden', 
        opacity: 0, 
        transform: 'scale(0.95)' 
      }));
      setIsMeasuring(false);
    }
  }, [anchorElement, recipe]);

  // Step 2: Perform measurement and positioning
  useLayoutEffect(() => {
    if (!isMeasuring || !modalContentRef.current || !anchorElement || !recipe) {
      return;
    }

    const modalNode = modalContentRef.current;
    
    const timerId = setTimeout(() => {
      if (!modalContentRef.current || !anchorElement || !recipe) { 
        return;
      }

      const currentModalWidth = modalNode.offsetWidth;
      const currentModalHeight = modalNode.offsetHeight;

      let newTop: string | number = '50%';
      let newLeft: string | number = '50%';
      let newTransform = 'translate(-50%, -50%)'; // Default to centering

      // Attempt to get overlay padding (assuming p-4 means 1rem)
      // A more robust way would be getComputedStyle if needed, but 16px is a common default for 1rem.
      const overlayPadding = 16; 


      if (currentModalWidth > 0 && currentModalHeight > 0) {
        const anchorRect = anchorElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const MODAL_VIEWPORT_PADDING = 15;

        // Calculate desired top-left corner of the modal in viewport coordinates
        let desiredViewportLeft = anchorRect.left + (anchorRect.width / 2) - (currentModalWidth / 2);
        let desiredViewportTop = anchorRect.bottom + MODAL_VIEWPORT_PADDING;

        // Adjust desiredViewportLeft to stay within viewport horizontal bounds
        if (desiredViewportLeft + currentModalWidth > viewportWidth - MODAL_VIEWPORT_PADDING) {
          desiredViewportLeft = viewportWidth - currentModalWidth - MODAL_VIEWPORT_PADDING;
        }
        if (desiredViewportLeft < MODAL_VIEWPORT_PADDING) {
          desiredViewportLeft = MODAL_VIEWPORT_PADDING;
        }

        // Adjust desiredViewportTop to stay within viewport vertical bounds
        if (desiredViewportTop + currentModalHeight > viewportHeight - MODAL_VIEWPORT_PADDING) {
          desiredViewportTop = anchorRect.top - currentModalHeight - MODAL_VIEWPORT_PADDING; // Try above
          if (desiredViewportTop < MODAL_VIEWPORT_PADDING) { // If still out of bounds (or modal too tall)
            desiredViewportTop = MODAL_VIEWPORT_PADDING; // Stick to top
          }
        }
         if (desiredViewportTop < MODAL_VIEWPORT_PADDING) { 
             desiredViewportTop = MODAL_VIEWPORT_PADDING;
         }
        
        // Convert viewport coordinates to style.top/left relative to the padded overlay parent
        newTop = desiredViewportTop - overlayPadding;
        newLeft = desiredViewportLeft - overlayPadding;
        newTransform = 'scale(1)'; // Use scale for final transform state
      }
      
      setStyle({
        position: 'absolute',
        top: `${typeof newTop === 'number' ? newTop + 'px' : newTop}`,
        left: `${typeof newLeft === 'number' ? newLeft + 'px' : newLeft}`,
        transform: newTransform, // This will be 'translate(-50%,-50%)' or 'scale(1)'
        visibility: 'visible',
        opacity: 1,
        transformOrigin: 'center center', 
        transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
      });

    }, 50); // Delay to allow browser to layout after isMeasuring state change

    return () => clearTimeout(timerId);

  }, [isMeasuring, anchorElement, recipe]);

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-75 p-4 z-50 overflow-auto flex items-center justify-center"
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="recipe-title"
        onClick={onClose} 
    >
      <div
        ref={modalContentRef}
        style={style}
        className="bg-[#F7A49E] rounded-lg shadow-xl p-6 max-w-lg overflow-y-auto custom-scrollbar max-h-[85vh]"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="recipe-title" className="text-2xl font-bold text-[#232220]">{recipe.name}</h2>
          <button 
              onClick={onClose} 
              className="text-[#4e4c4f] hover:text-[#232220] text-3xl leading-none p-1"
              aria-label="Close recipe details"
          >
              &times;
          </button>
        </div>
        <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-md mb-4"/>
        <p className="text-sm text-[#4e4c4f] mb-1">{recipe.cuisine} | Prep: {recipe.prepTime}, Cook: {recipe.cookTime}</p>
        <p className="text-[#4e4c4f] mb-4">{recipe.description}</p>
        
        <h4 className="font-semibold text-[#232220] mb-2">Ingredients:</h4>
        <ul className="list-disc list-inside text-sm text-[#4e4c4f] mb-4 pl-4">
          {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
        
        <h4 className="font-semibold text-[#232220] mb-2">Instructions:</h4>
        <ol className="list-decimal list-inside text-sm text-[#4e4c4f] space-y-1 pl-4">
           {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetailModal;
