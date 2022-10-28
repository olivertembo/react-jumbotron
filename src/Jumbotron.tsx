import * as React from "react";

export type backgroundSize = "cover" | "contain" | "auto" | "50%";
export type backgroundPosition = "center" | "top" | "bottom" | "left" | "right";
export type backgroundRepeat = "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
export interface JumbotronProps {
  backgroundImage: string;
  className?: string;
  height?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Jumbotron = React.forwardRef(
  (props: JumbotronProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      backgroundImage,
      className,
      height = "100vh",
      backgroundSize = "cover",
      backgroundPosition = "center",
      backgroundRepeat = "no-repeat",
      style,
      children,
    } = props;

    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: backgroundRepeat,
          height: height,
          ...style,
        }}
        className={className}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default Jumbotron;
