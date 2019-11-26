import React from "react";

const SvgComponent = props => (
  <svg width={19.457} height={19.08} fill="#707070" {...props}>
    <g>
      <g>
        <path
          d="M1.244 10.784a.417.417 0 01-.29-.718L10.4.943a.417.417 0 01.58.6l-9.446 9.124a.415.415 0 01-.29.117z"
          transform="translate(-.827 -.826)"
        />
      </g>
      <g transform="translate(0 9.123)">
        <path
          d="M10.693 54.524a.416.416 0 01-.29-.117L.954 45.283a.417.417 0 11.579-.6l9.449 9.124a.417.417 0 01-.29.717z"
          transform="translate(-.827 -44.566)"
        />
      </g>
    </g>
    <g transform="translate(.058 9.142)">
      <path
        d="M20.088 45.491H1.524a.417.417 0 010-.834h18.564a.417.417 0 110 .834z"
        transform="translate(-1.107 -44.657)"
      />
    </g>
  </svg>
);

export default SvgComponent;
