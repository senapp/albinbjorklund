"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const React = require("react");
const TextInput_module_css_1 = require("./TextInput.module.css");
const TextInput = ({ label, containerClassName = '', maxLength, multiline, type = "text", value, onChange }) => {
    const onValueChange = (newValue) => {
        if (maxLength && newValue.length > maxLength) {
            newValue = newValue.slice(0, maxLength);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    return (React.createElement("div", { className: `${TextInput_module_css_1.default.container} ${containerClassName}`.trimEnd() },
        label && React.createElement("div", { className: TextInput_module_css_1.default.label },
            " ",
            label,
            " "),
        multiline
            ? React.createElement("textarea", { className: TextInput_module_css_1.default.input, value: value, onChange: (e) => onValueChange(e.target.value) })
            : React.createElement("input", { className: TextInput_module_css_1.default.input, type: type, value: value, onChange: (e) => onValueChange(e.target.value) })));
};
exports.TextInput = TextInput;
//# sourceMappingURL=TextInput.js.map