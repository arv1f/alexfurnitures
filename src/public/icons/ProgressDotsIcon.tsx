import React from 'react';

interface ProgressDotsProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  activeColor?: string;
  inactiveColor?: string;
  inactiveOpacity?: number;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ProgressDotsIcon = React.forwardRef<SVGSVGElement, ProgressDotsProps>(
  ({ 
    width = 100, 
    height = 16, 
    activeColor = "#F3BC2B", 
    inactiveColor = "white", 
    inactiveOpacity = 0.3,
    className = '',
    ...props 
  }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 100 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill={activeColor} />
      <circle cx="36" cy="8" r="8" fill={inactiveColor} opacity={inactiveOpacity} />
      <circle cx="64" cy="8" r="8" fill={inactiveColor} opacity={inactiveOpacity} />
      <circle cx="92" cy="8" r="8" fill={inactiveColor} opacity={inactiveOpacity} />
    </svg>
  )
);

export const LeftArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 30, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 22 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path
        d="M27 2L9 20L27 38"
        stroke="#AFAFAF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

export const RightArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 30, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path
        d="M2 2L20 20L2 38"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);


ProgressDotsIcon.displayName = 'ProgressDotsIcon';
LeftArrowIcon.displayName = 'LeftArrowIcon';
RightArrowIcon.displayName = 'RightArrowIcon';