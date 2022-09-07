import * as React from 'react';
import { SVGProps, memo } from 'react';

const Loupe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.45 8.901c1.837-2.543 1.223-6.063-1.371-7.863-2.593-1.8-6.185-1.199-8.02 1.344-1.837 2.543-1.223 6.063 1.37 7.863a5.85 5.85 0 0 0 6.252.254l4.242 4.134c.458.472 1.22.491 1.702.042a1.164 1.164 0 0 0 0-1.711L10.45 8.9Zm-4.7.385c-2.049 0-3.71-1.627-3.712-3.636 0-2.01 1.66-3.638 3.71-3.64 2.047 0 3.707 1.625 3.711 3.632.004 2.01-1.655 3.64-3.706 3.644h-.002Z"
      fill="#fff"
    />
  </svg>
);

const Memo = memo(Loupe);
export default Memo;
