import * as React from "react";
export declare type backgroundSize = "cover" | "contain" | "auto" | "50%";
export declare type backgroundPosition = "center" | "top" | "bottom" | "left" | "right";
export declare type backgroundRepeat = "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
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
export declare const Jumbotron: React.ForwardRefExoticComponent<JumbotronProps & React.RefAttributes<HTMLDivElement>>;
export default Jumbotron;
