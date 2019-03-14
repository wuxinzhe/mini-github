"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SearchRepository(_target, _propKey, descriptor) {
    var oldFun = descriptor.value;
    descriptor.value = function () {
        return new Promise(function (resolve, reject) {
            wx.request({
                url: 'https://api.github.com/search/repositories',
                data: oldFun(),
                method: 'GET',
                success: resolve,
                fail: reject
            });
        });
    };
}
exports.SearchRepository = SearchRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBWSxFQUFFLFFBQWdCLEVBQUUsVUFBOEI7SUFDM0YsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQTtJQUMvQixVQUFVLENBQUMsS0FBSyxHQUFHO1FBQ2YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLDRDQUE0QztnQkFDakQsSUFBSSxFQUFFLE1BQU0sRUFBRTtnQkFDZCxNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsT0FBTztnQkFDaEIsSUFBSSxFQUFFLE1BQU07YUFDZixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFiRCw0Q0FhQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBTZWFyY2hSZXBvc2l0b3J5KF90YXJnZXQ6IGFueSwgX3Byb3BLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgY29uc3Qgb2xkRnVuID0gZGVzY3JpcHRvci52YWx1ZVxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IG9sZEZ1bigpLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==