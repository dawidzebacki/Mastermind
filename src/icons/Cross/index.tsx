import { SVGProps } from "react";
export const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
    height={28}
    width={28}
    viewBox="-3.2 -3.2 38.4 38.4"
    {...props}
  >
    <rect
      width={38.4}
      height={38.4}
      x={-3.2}
      y={-3.2}
      fill="#fff"
      stroke="none"
      strokeWidth={0}
      rx={19.2}
      transform="matrix(.5 0 0 .5 8 8)"
    />
    <title>{"cross-circle"}</title>
    <path
      fill="#000"
      fillRule="evenodd"
      stroke="none"
      d="M21.657 20.24a1.002 1.002 0 1 1-1.415 1.42l-4.236-4.24-4.266 4.27c-.394.39-1.032.39-1.426 0a1.015 1.015 0 0 1 0-1.43l4.266-4.27-4.236-4.23a1.006 1.006 0 0 1 0-1.42 1 1 0 0 1 1.414 0l4.236 4.24 4.298-4.3a1.014 1.014 0 0 1 1.425 0c.393.4.393 1.03 0 1.43l-4.297 4.3 4.237 4.23ZM16 0C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0Z"
    />
  </svg>
);
