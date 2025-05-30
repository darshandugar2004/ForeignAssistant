
import React from 'react';
import { Restaurant } from '../../types';
import { PREDEFINED_RESTAURANTS } from '../../constants';

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => (
  <div className="bg-[#F7A49E] rounded-lg shadow-lg overflow-hidden flex flex-col"> {/* New card color */}
    {/* <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover"/> */}
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-[#232220] mb-1">{restaurant.name}</h3>
      <p className="text-sm text-[#4e4c4f] mb-1"><span className="font-medium">Cuisine:</span> {restaurant.cuisine}</p>
      {restaurant.address && <p className="text-xs text-[#4e4c4f] mb-2"><span className="font-medium">Address:</span> {restaurant.address}</p>}
      {restaurant.notes && <p className="text-xs text-[#4e4c4f] italic mb-3 flex-grow">{restaurant.notes}</p>}
      {/* {restaurant.link && (
        <a
          href={restaurant.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block bg-[#4e4c4f] text-[#FBEFED] hover:bg-[#232220] hover:text-[#FBEFED] text-center py-2 px-3 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out"
          aria-label={`View ${restaurant.name} on Google Maps`}
        >
          View on Map
        </a> */}
      {/* )} */}
    </div>
  </div>
);

const RestaurantSection: React.FC = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#232220] mb-2">Vegetarian Restaurants Nearby 🍽️</h2>
        <p className="text-[#4e4c4f]">
          Hello J🌻 Here are some vegetarian-friendly places around the campus. 
          For more specific searches or other questions, please use the chat assistance!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {PREDEFINED_RESTAURANTS.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      
      {/* <div className="mt-8 text-center text-[#9f8d8d] italic">
        <p>Have a specific craving or need more options? Click the chat icon to ask your assistant!</p>
      </div> */}
    </div>
  );
};

export default RestaurantSection;