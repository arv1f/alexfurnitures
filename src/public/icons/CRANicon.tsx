import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CRANicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path 
        d="M23 12.5001L23 23.0001L20 23.0001L16 13.5L13 13.5L13 24" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
      <path 
        d="M10 4.87917V0.999975L1 1V10.5L10 10.5V7.07817" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
      <path 
        d="M13 11.5L13 5.97368M13 5.97368L13 1L23 1L23 5.97368L13 5.97368ZM13 5.97368L23 9.56579L23 11.5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
      <path 
        d="M1 24L1 19.0263M1 19.0263L1 13.5L10 13.5L10 19.0263M1 19.0263L10 19.0263M10 19.0263L9.99999 24" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
    </svg>
  )
);

CRANicon.displayName = 'DiagramIcon';
export default CRANicon;