import { __assign } from "tslib";
import * as React from 'react';
/**
 * @component Jumbotron
 * @description Component Jumbotron.
 * @example
 * return (
 *   <Jumbotron backgroundImage="..." />
 * )
 */
export var Jumbotron = React.forwardRef(function (props, ref) {
    var backgroundImage = props.backgroundImage, className = props.className, _a = props.height, height = _a === void 0 ? '100vh' : _a, _b = props.backgroundSize, backgroundSize = _b === void 0 ? 'cover' : _b, _c = props.backgroundPosition, backgroundPosition = _c === void 0 ? 'center' : _c, _d = props.backgroundRepeat, backgroundRepeat = _d === void 0 ? 'no-repeat' : _d, style = props.style, children = props.children;
    return (React.createElement("div", { style: __assign({ backgroundImage: "url(".concat(backgroundImage, ")"), backgroundSize: backgroundSize, backgroundPosition: backgroundPosition, backgroundRepeat: backgroundRepeat, height: height }, style), className: className, ref: ref }, children));
});
Jumbotron.displayName = 'Jumbotron';
export default Jumbotron;
//# sourceMappingURL=Jumbotron.js.map