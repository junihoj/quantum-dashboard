import React from "react";

type Props = React.SVGProps<SVGSVGElement> &
  React.PropsWithChildren & {
    absoluteStrokeWidth?: any;
    size?: number;
  };

const IconPathWrapper = (props: Props) => {
  const {
    xmlns = "http://www.w3.org/2000/svg",
    width = 24,
    height = 24,
    viewBox = "0 0 24 24",
    fill = "none",
    stroke = "currentColor",
    strokeWidth = 2,
    strokeLinecap = "round",
    strokeLinejoin = "round",
    absoluteStrokeWidth,
    size,
    children,
    ...rest
  } = props;
  return (
    <svg
      width={size ?? width}
      height={size ?? height}
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
      {children}
    </svg>
  );
};

export default IconPathWrapper;
