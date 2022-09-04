import * as React from 'react';
import { SVGProps, memo } from 'react';

const BurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={21}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 16H0v-2.667h21V16Zm-6.125-6.667H0V6.667h14.875v2.666ZM21 2.667H0V0h21v2.667Z"
      fill="#fff"
    />
  </svg>
);
const Memo = memo(BurgerMenu);

export default Memo;
