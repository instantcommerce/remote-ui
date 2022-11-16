'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var baseHtm = require('htm');
var core = require('@remote-ui/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var baseHtm__default = /*#__PURE__*/_interopDefaultLegacy(baseHtm);

function createHtm(root) {
  return baseHtm__default["default"].bind((type, props, ...children) => {
    const normalizedChildren = [];

    for (const child of children) {
      if (child == null || child === false) continue;

      if (typeof child === 'object') {
        if (!core.isRemoteComponent(child)) {
          throw new Error(`Unexpected child: ${JSON.stringify(child)}`);
        }

        normalizedChildren.push(child);
      } else {
        normalizedChildren.push(String(child));
      }
    }

    return root.createComponent(type, props, normalizedChildren);
  });
}
function append(tree, parent) {
  if (Array.isArray(tree)) {
    for (const child of tree) {
      parent.appendChild(child);
    }
  } else {
    parent.appendChild(tree);
  }
}

exports.append = append;
exports.createHtm = createHtm;
