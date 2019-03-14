export function SearchRepository(_target: any, _propKey: string, descriptor: PropertyDescriptor) {
    const oldFun = descriptor.value
    descriptor.value = function () {
        return new Promise((resolve, reject) => {
            wx.request({
                url: 'https://api.github.com/search/repositories',
                data: oldFun(),
                method: 'GET',
                success: resolve,
                fail: reject
            })
        })
    }
}