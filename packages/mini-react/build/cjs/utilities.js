'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function removeNode(node) {
  var _node$parent;

  (_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.removeChild(node);
}

exports.removeNode = removeNode;
