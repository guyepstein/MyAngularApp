"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var Shared = (function () {
    function Shared() {
    }
    Shared.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json() /*.error*/ || 'Server Error');
    };
    return Shared;
}());
exports.Shared = Shared;
//# sourceMappingURL=shared.js.map