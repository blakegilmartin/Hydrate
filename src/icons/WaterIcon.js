import React from 'react';

function WaterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 140"
    >
      <defs>
        <path
          id="a"
          d="M3.941.3c-.144 0-.286.008-.43.027C1.693.56.41 2.214.647 4.019l16.21 123.544a3.313 3.313 0 003.294 2.869h59.966a3.313 3.313 0 003.295-2.869L99.62 4.02c.018-.142.027-.284.027-.425 0-1.82-1.486-3.294-3.322-3.294H3.941z"
        />
        <path
          id="c"
          d="M.784.769l13.107 89.24c.217 1.475 1.632 2.579 3.306 2.579H66.07c1.675 0 3.091-1.104 3.307-2.58L82.485.769H.784z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(0 4)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            fill="#FEFEFE"
            d="M-17.3076923 148.338235L117.573077 148.338235 117.573077 -17.6069779 -17.3076923 -17.6069779z"
            mask="url(#b)"
          />
        </g>
        <path
          fill="#29AAE1"
          d="M10 32h81l-12.994 89.417c-.215 1.477-1.618 2.583-3.28 2.583H26.274c-1.661 0-3.064-1.106-3.278-2.583L10 32z"
          transform="translate(0 4)"
        />
        <g transform="translate(0 4) translate(9 31)">
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <path
            fill="#29AAE1"
            d="M-14.2219535 104.065082L97.4902558 104.065082 97.4902558 -35.3016495 -14.2219535 -35.3016495z"
            mask="url(#d)"
          />
          <path
            fill="#29AAE1"
            d="M-12.2058256 105.491722L95.4741279 105.491722 95.4741279 -12.1350619 -12.2058256 -12.1350619z"
            mask="url(#d)"
          />
        </g>
      </g>
    </svg>
  );
}

export default WaterIcon;
