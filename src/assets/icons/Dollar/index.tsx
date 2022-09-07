import React from 'react';

function Dollar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="32"
      fill="none"
      viewBox="0 0 30 32"
    >
      <path
        fill="url(#paint0_linear_229_3788)"
        d="M25.607 4.386A14.915 14.915 0 0015 0 14.915 14.915 0 004.393 4.386 14.862 14.862 0 000 14.973c0 4 1.56 7.76 4.393 10.588a14.898 14.898 0 008.492 4.24l-.88.877L13.333 32l2.914-2.909-2.557-3.306-1.485 1.142.768.993c-6.278-.976-11.097-6.41-11.097-12.947C1.875 7.748 7.763 1.871 15 1.871s13.125 5.877 13.125 13.102c0 5.251-3.124 9.98-7.96 12.05l.74 1.719A14.963 14.963 0 0030 14.973c0-3.999-1.56-7.76-4.393-10.587z"
      ></path>
      <path
        fill="url(#paint1_linear_229_3788)"
        d="M15 10.912c1.061 0 1.924.701 1.924 1.563H18.8c0-1.6-1.218-2.95-2.861-3.327V7.742h-1.876v1.406c-1.643.378-2.861 1.726-2.861 3.327 0 1.894 1.704 3.434 3.799 3.434 1.061 0 1.924.701 1.924 1.563s-.863 1.563-1.924 1.563-1.924-.701-1.924-1.563H11.2c0 1.6 1.218 2.95 2.861 3.328v1.405h1.876V20.8c1.643-.379 2.861-1.727 2.861-3.328 0-1.893-1.704-3.434-3.799-3.434-1.061 0-1.924-.7-1.924-1.563 0-.861.863-1.563 1.924-1.563z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_229_3788"
          x1="0"
          x2="31.027"
          y1="1.237"
          y2="28.126"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F65130"></stop>
          <stop offset="1" stopColor="#E9941A"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_229_3788"
          x1="11.201"
          x2="22.335"
          y1="8.301"
          y2="13.709"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F65130"></stop>
          <stop offset="1" stopColor="#E9941A"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default React.memo(Dollar);
