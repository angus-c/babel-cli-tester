'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usefulType = require('useful-type');

var _usefulType2 = _interopRequireDefault(_usefulType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _usefulType2.default)(2);
"use strict";

var _Math = Math;
var max = _Math.max;
var pow = _Math.pow;


console.log(pow(max(4, 9, 12), 2));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arraySum = function arraySum(array) {
  return array.reduce(function (a, b, c) {
    return a + b + c;
  });
};

exports.default = arraySum;

//# sourceMappingURL=bundle.js.map