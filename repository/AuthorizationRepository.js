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
var authorization_1 = require("../decorator/authorization");
var js_base64_1 = require("js-base64");
var AuthorizationRepository = (function () {
    function AuthorizationRepository() {
    }
    AuthorizationRepository.prototype.basicAuth = function (username, password) {
        return js_base64_1.Base64.encode(username + ":" + password);
    };
    __decorate([
        authorization_1.AuthorizationBasic({
            scopes: ["public_repo"],
            clientSecret: 'a46f237ad73d65324f279ce88c972408be4f5b8d',
            clientId: 'c354bdca8045e123b91b'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Object)
    ], AuthorizationRepository.prototype, "basicAuth", null);
    return AuthorizationRepository;
}());
exports.AuthorizationRepository = AuthorizationRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aG9yaXphdGlvblJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBdXRob3JpemF0aW9uUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDREQUFnRTtBQUNoRSx1Q0FBa0M7QUFFbEM7SUFBQTtJQWNBLENBQUM7SUFIVSwyQ0FBUyxHQUFoQixVQUFpQixRQUFnQixFQUFFLFFBQWdCO1FBQy9DLE9BQU8sa0JBQU0sQ0FBQyxNQUFNLENBQUksUUFBUSxTQUFJLFFBQVUsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFGRDtRQUxDLGtDQUFrQixDQUFDO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUN2QixZQUFZLEVBQUUsMENBQTBDO1lBQ3hELFFBQVEsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQzs7Ozs0REFHRDtJQUNMLDhCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aG9yaXphdGlvbkJhc2ljIH0gZnJvbSBcIi4uL2RlY29yYXRvci9hdXRob3JpemF0aW9uXCI7XG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tICdqcy1iYXNlNjQnXG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uUmVwb3NpdG9yeSB7XG4gICAgXG4gICAgLyoqXG4gICAgICogYmFzaWNBdXRoXG4gICAgICog5Z+656GA6K6k6K+B5qih5byPXG4gICAgICovXG4gICAgQEF1dGhvcml6YXRpb25CYXNpYyh7XG4gICAgICAgIHNjb3BlczogW1wicHVibGljX3JlcG9cIl0sXG4gICAgICAgIGNsaWVudFNlY3JldDogJ2E0NmYyMzdhZDczZDY1MzI0ZjI3OWNlODhjOTcyNDA4YmU0ZjViOGQnLFxuICAgICAgICBjbGllbnRJZDogJ2MzNTRiZGNhODA0NWUxMjNiOTFiJ1xuICAgIH0pXG4gICAgcHVibGljIGJhc2ljQXV0aCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIEJhc2U2NC5lbmNvZGUoYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YClcbiAgICB9XG59Il19