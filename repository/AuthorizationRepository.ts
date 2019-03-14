import { AuthorizationBasic } from "../decorator/authorization";
import { Base64 } from 'js-base64'

export class AuthorizationRepository {
    
    /**
     * basicAuth
     * 基础认证模式
     */
    @AuthorizationBasic({
        scopes: ["public_repo"],
        clientSecret: 'a46f237ad73d65324f279ce88c972408be4f5b8d',
        clientId: 'c354bdca8045e123b91b'
    })
    public basicAuth(username: string, password: string): any {
        return Base64.encode(`${username}:${password}`)
    }
}