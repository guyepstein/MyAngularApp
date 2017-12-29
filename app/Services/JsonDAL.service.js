"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import { IKeyValuePair } from '../Models/General.Model';
require("rxjs/add/operator/catch");
/*import 'rxjs/add/operator/do';*/
require("rxjs/add/operator/map");
var JsonDaL = (function () {
    //private areasAndLocationsURL = "api/WorkerDemand/AreasAndLocation.json";
    function JsonDaL(_url, _http) {
        this._url = _url;
        this._http = _http;
    }
    Object.defineProperty(JsonDaL.prototype, "Http", {
        get: function () {
            return this._http;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonDaL.prototype, "Url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    JsonDaL.prototype.getJsonData = function () {
        return this.Http.get(this.Url).map(function (response) { return response.json(); });
    };
    return JsonDaL;
}());
JsonDaL = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [String, http_1.Http])
], JsonDaL);
exports.JsonDaL = JsonDaL;
//# sourceMappingURL=JsonDAL.service.js.map