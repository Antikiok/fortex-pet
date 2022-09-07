import * as React from 'react';
import { SVGProps, memo } from 'react';

const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 1 2 9l8 8" stroke="#C4C4C4" strokeWidth={2} />
  </svg>
);

const Memo = memo(LeftArrow);
export default Memo;
