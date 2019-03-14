interface IAuthorizationClientOptions {
    clientId: string,
    clientSecret: string,
    scopes: [string],
}

export function AuthorizationBasic(authorizationClientOptions: IAuthorizationClientOptions): Function {
    const { clientId = '', clientSecret = '', scopes = [] } = authorizationClientOptions
    return (_target: any, _propKey: string, descriptor: PropertyDescriptor) => {
        const oldFun = descriptor.value
        descriptor.value = function () {
            return new Promise((resolve, reject) => {
                wx.request({
                    url: `https://api.github.com/authorizations/clients/${clientId}`,
                    method: 'PUT',
                    header: {
                        Accept: 'application/vnd.github.v3+json',
                        Authorization: `Basic ${oldFun()}`
                    },
                    data: {
                        client_secret: clientSecret,
                        scopes
                    },
                    success: res => {
                        resolve(res)
                    },
                    fail: reason => {
                        reject(reason)
                    }
                })
            })
        }
    }
}