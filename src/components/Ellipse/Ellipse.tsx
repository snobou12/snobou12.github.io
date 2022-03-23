
import React, { FC } from "react";
import "./Ellipse.scss";

interface EllipseProps {
  top: string;
  left: string;
  right: string;
  bottom: string;
  background: string;
  width: number;
  height: number;
  blurValue: number;
}

const Ellipse: FC<EllipseProps> = ({
  top,
  left,
  right,
  bottom,
  background,
  width,
  height,
  blurValue,
}) => {
  return (
    <div
      style={{
        top,
        left,
        right,
        bottom,
        background,
        width,
        height,
        filter: `blur(${blurValue}px)`,
      }}
      className="ellipse"
    ></div>
  );
};

export default Ellipse;
