import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  absoluteStrokeWidth?: any;
  size?: number;
};

export const HomeIcon = (props: Props) => {
  const {
    xmlns = "http://www.w3.org/2000/svg",
    width = 24,
    height = 24,
    viewBox = "0 0 24 24",
    fill = "none",
    stroke = "currentColor",
    strokeWidth = 1.5,
    strokeLinecap = "round",
    strokeLinejoin = "round",
    absoluteStrokeWidth,
    size,
    ...rest
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={
        absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth
      }
      stroke={stroke}
      {...rest}
    >
      <path d="M2.95833 8.5H1.375L8.5 1.375L15.625 8.5H14.0417" />
      <path d="M2.95831 8.5V14.0417C2.95831 14.4616 3.12513 14.8643 3.42206 15.1613C3.71899 15.4582 4.12172 15.625 4.54165 15.625H12.4583C12.8782 15.625 13.281 15.4582 13.5779 15.1613C13.8748 14.8643 14.0416 14.4616 14.0416 14.0417V8.5" />
      <path d="M6.125 15.6251V10.8751C6.125 10.4552 6.29182 10.0524 6.58875 9.7555C6.88568 9.45856 7.28841 9.29175 7.70833 9.29175H9.29167C9.71159 9.29175 10.1143 9.45856 10.4113 9.7555C10.7082 10.0524 10.875 10.4552 10.875 10.8751V15.6251" />
    </svg>
  );
};
