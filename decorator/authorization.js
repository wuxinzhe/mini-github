"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AuthorizationBasic(authorizationClientOptions) {
    var _a = authorizationClientOptions.clientId, clientId = _a === void 0 ? '' : _a, _b = authorizationClientOptions.clientSecret, clientSecret = _b === void 0 ? '' : _b, _c = authorizationClientOptions.scopes, scopes = _c === void 0 ? [] : _c;
    return function (_target, _propKey, descriptor) {
        var oldFun = descriptor.value;
        descriptor.value = function () {
            return new Promise(function (resolve, reject) {
                wx.request({
                    url: "https://api.github.com/authorizations/clients/" + clientId,
                    method: 'PUT',
                    header: {
                        Accept: 'application/vnd.github.v3+json',
                        Authorization: "Basic " + oldFun()
                    },
                    data: {
                        client_secret: clientSecret,
                        scopes: scopes
                    },
                    success: function (res) {
                        resolve(res);
                    },
                    fail: function (reason) {
                        reject(reason);
                    }
                });
            });
        };
    };
}
exports.AuthorizationBasic = AuthorizationBasic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxTQUFnQixrQkFBa0IsQ0FBQywwQkFBdUQ7SUFDOUUsSUFBQSx3Q0FBYSxFQUFiLGtDQUFhLEVBQUUsNENBQWlCLEVBQWpCLHNDQUFpQixFQUFFLHNDQUFXLEVBQVgsZ0NBQVcsQ0FBK0I7SUFDcEYsT0FBTyxVQUFDLE9BQVksRUFBRSxRQUFnQixFQUFFLFVBQThCO1FBQ2xFLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUE7UUFDL0IsVUFBVSxDQUFDLEtBQUssR0FBRztZQUNmLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDL0IsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDUCxHQUFHLEVBQUUsbURBQWlELFFBQVU7b0JBQ2hFLE1BQU0sRUFBRSxLQUFLO29CQUNiLE1BQU0sRUFBRTt3QkFDSixNQUFNLEVBQUUsZ0NBQWdDO3dCQUN4QyxhQUFhLEVBQUUsV0FBUyxNQUFNLEVBQUk7cUJBQ3JDO29CQUNELElBQUksRUFBRTt3QkFDRixhQUFhLEVBQUUsWUFBWTt3QkFDM0IsTUFBTSxRQUFBO3FCQUNUO29CQUNELE9BQU8sRUFBRSxVQUFBLEdBQUc7d0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNoQixDQUFDO29CQUNELElBQUksRUFBRSxVQUFBLE1BQU07d0JBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNsQixDQUFDO2lCQUNKLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFBO0lBQ0wsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQTNCRCxnREEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUF1dGhvcml6YXRpb25DbGllbnRPcHRpb25zIHtcbiAgICBjbGllbnRJZDogc3RyaW5nLFxuICAgIGNsaWVudFNlY3JldDogc3RyaW5nLFxuICAgIHNjb3BlczogW3N0cmluZ10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRob3JpemF0aW9uQmFzaWMoYXV0aG9yaXphdGlvbkNsaWVudE9wdGlvbnM6IElBdXRob3JpemF0aW9uQ2xpZW50T3B0aW9ucyk6IEZ1bmN0aW9uIHtcbiAgICBjb25zdCB7IGNsaWVudElkID0gJycsIGNsaWVudFNlY3JldCA9ICcnLCBzY29wZXMgPSBbXSB9ID0gYXV0aG9yaXphdGlvbkNsaWVudE9wdGlvbnNcbiAgICByZXR1cm4gKF90YXJnZXQ6IGFueSwgX3Byb3BLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEZ1biA9IGRlc2NyaXB0b3IudmFsdWVcbiAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vYXV0aG9yaXphdGlvbnMvY2xpZW50cy8ke2NsaWVudElkfWAsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke29sZEZ1bigpfWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X3NlY3JldDogY2xpZW50U2VjcmV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVzXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVhc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=