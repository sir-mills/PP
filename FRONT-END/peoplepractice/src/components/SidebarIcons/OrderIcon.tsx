import * as React from "react";

const OrderIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 4.583h-11c-1.013 0-1.833.821-1.833 1.834v11c0 1.012.82 1.833 1.833 1.833h11c1.012 0 1.833-.82 1.833-1.833v-11c0-1.013-.82-1.834-1.833-1.834ZM14.667 2.75v3.667M7.333 2.75v3.667M3.667 10.083h14.666M10.083 13.75H11M11 13.75v2.75"
    />
  </svg>
)
export default OrderIcon;
