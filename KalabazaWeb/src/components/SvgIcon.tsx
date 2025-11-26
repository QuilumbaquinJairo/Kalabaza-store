import React, { type SVGProps } from 'react';

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  iconName: string; 
  size?: number | string; 
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ 
  iconName, 
  size = 24, 
  
}) => {
  const spritePath = '/sprite.svg';
  const iconRef = `${spritePath}#${iconName}`;

  return (
    <svg 
      width={size} 
      height={size} 
    >
      <use xlinkHref={iconRef} />
    </svg>
  );
};

export default SvgIcon;