
import React from 'react';

interface RestaurantIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const RestaurantIcon: React.FC<RestaurantIconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    <line x1="17" y1="9" x2="17" y2="20"></line>
    <path d="M21 11v10"></path>
    <path d="M3 11v10"></path>
    <path d="M7 11.5V22"></path>
    <path d="M12 12.5V22"></path>
  </svg>
);

export default RestaurantIcon;
