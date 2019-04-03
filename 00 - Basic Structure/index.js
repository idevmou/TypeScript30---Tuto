"use strict";
var message = document.getElementById("message");
message.innerHTML = hello("Son");
function hello(word) {
    if (word === void 0) { word = 'world'; }
    return "Hello " + word + "! ";
}
//# sourceMappingURL=index.js.map