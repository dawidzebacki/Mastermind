import { SVGProps } from "react";
export const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={42.6}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="red" stroke="#fff" strokeWidth={0.5} d="M3.293 20.707a1 1 0 0 1 0-1.414l16-16a1 1 0 1 1 1.414 1.414l-16 16a1 1 0 0 1-1.414 0Z" />
  </svg>
);
