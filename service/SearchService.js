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
var search_1 = require("../decorator/search");
var SearchService = (function () {
    function SearchService() {
    }
    SearchService.prototype.searchRepository = function () {
        return { q: 'vue+in:name+Javascript+in:language', sort: 'stars', order: 'desc' };
    };
    __decorate([
        search_1.SearchRepository,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], SearchService.prototype, "searchRepository", null);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlYXJjaFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBdUQ7QUFFdkQ7SUFBQTtJQU1BLENBQUM7SUFIVSx3Q0FBZ0IsR0FBdkI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLG9DQUFvQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBQ3BGLENBQUM7SUFGRDtRQURDLHlCQUFnQjs7Ozt5REFHaEI7SUFDTCxvQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9kZWNvcmF0b3Ivc2VhcmNoXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcblxuICAgIEBTZWFyY2hSZXBvc2l0b3J5XG4gICAgcHVibGljIHNlYXJjaFJlcG9zaXRvcnkoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHsgcTogJ3Z1ZStpbjpuYW1lK0phdmFzY3JpcHQraW46bGFuZ3VhZ2UnLCBzb3J0OiAnc3RhcnMnLCBvcmRlcjogJ2Rlc2MnIH1cbiAgICB9XG59Il19