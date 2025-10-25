import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

export function LockIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect 
        width="18" 
        height="11" 
        x="3" 
        y="11" 
        rx="2" 
        ry="2" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M7 11V7a5 5 0 0 1 10 0v4" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
