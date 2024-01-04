"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    show,
    onClose,
    children
  } = _ref;
  if (!show) {
    return null;
  }
  const handleBackdropClick = e => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-backdrop",
    onClick: handleBackdropClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button",
    onClick: onClose
  }, "\xD7"), children));
};
var _default = exports.default = Modal;