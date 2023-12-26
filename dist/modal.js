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
    children,
    onClose
  } = _ref;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-backdrop"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose
  }, "Fermer")));
};
var _default = exports.default = Modal;