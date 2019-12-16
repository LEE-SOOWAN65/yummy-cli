import React from "react";

const SvgComponent = props => (
  <svg width={38} height={28.638} {...props}>
    <text
      transform="rotate(8 -127.037 14.883)"
      fill="#ff6565"
      fontSize={18}
      fontFamily="Beta"
    >
      <tspan x={0} y={0}>
        {"B"}
      </tspan>
      <tspan y={0} fontSize={20}>
        {"eta"}
      </tspan>
    </text>
  </svg>
);

export default SvgComponent;
