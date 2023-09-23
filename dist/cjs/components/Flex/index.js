"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var FlexComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  gap: ", ";\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  gap: ", ";\n"])), function (_a) {
    var direction = _a.direction;
    return direction;
}, function (_a) {
    var justify = _a.justify;
    return justify;
}, function (_a) {
    var align = _a.align;
    return align;
}, function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
});
var Flex = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'row' : _b, _c = _a.justify, justify = _c === void 0 ? 'start' : _c, _d = _a.align, align = _d === void 0 ? 'start' : _d, _e = _a.gap, gap = _e === void 0 ? 0 : _e, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(FlexComponent, { direction: direction, justify: justify, align: align, gap: gap, children: children }));
};
exports.default = Flex;
var templateObject_1;
//# sourceMappingURL=index.js.map