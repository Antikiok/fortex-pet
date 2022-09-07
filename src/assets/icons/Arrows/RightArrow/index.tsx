import * as React from 'react';
import { SVGProps, memo } from 'react';

const RightArrwo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m1 1 8 8-8 8" stroke="#C4C4C4" strokeWidth={2} />
  </svg>
);

const Memo = memo(RightArrwo);
export default Memo;
