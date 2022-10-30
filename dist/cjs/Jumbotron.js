"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jumbotron = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
exports.Jumbotron = React.forwardRef(function (props, ref) {
    var backgroundImage = props.backgroundImage, className = props.className, _a = props.height, height = _a === void 0 ? "100vh" : _a, _b = props.backgroundSize, backgroundSize = _b === void 0 ? "cover" : _b, _c = props.backgroundPosition, backgroundPosition = _c === void 0 ? "center" : _c, _d = props.backgroundRepeat, backgroundRepeat = _d === void 0 ? "no-repeat" : _d, style = props.style, children = props.children;
    return (React.createElement("div", { style: tslib_1.__assign({ backgroundImage: "url(".concat(backgroundImage, ")"), backgroundSize: backgroundSize, backgroundPosition: backgroundPosition, backgroundRepeat: backgroundRepeat, height: height }, style), className: className, ref: ref }, children));
});
exports.default = exports.Jumbotron;
//# sourceMappingURL=Jumbotron.js.map