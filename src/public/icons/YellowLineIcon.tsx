import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const YellowLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 30, height = 2, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path 
        d="M1 1H13" 
        stroke="#F3BC2B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
);

YellowLine.displayName = 'MinusIcon';
export default YellowLine;