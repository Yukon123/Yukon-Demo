"use strict";

require("core-js/modules/es.array.at.js");
require("core-js/modules/es.object.has-own.js");
console.log(['a', 'b', 'c'].at(-1)); // 使用 Array.prototype.at
console.log(Object.hasOwn({
  key: 'value'
}, 'key')); // 使用 Object.hasOwn
Promise.resolve().finally();

// Babel Input: ES2015 arrow function
[1, 2, 3].map(n => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
const fn = () => 1;