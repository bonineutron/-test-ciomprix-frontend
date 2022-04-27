import { HttpCall } from './http-call.service';
import { endPoints } from '../end-ponts/end-points';
import { ResponseHttp } from '../interfaces/response-http.interface';
import { IUserData } from '../interfaces/signin.interface'
import { INewUserData } from '../interfaces/signup.interface'
import { IToken } from '../interfaces/response-signup-signin.interface'

class HomeService {
    public async signin(user: IUserData): Promise<IToken> {
        const httpCall: HttpCall = new HttpCall();
        const url: string = `${endPoints.apiURL}/${endPoints.signin}`;
        const tokenResponse: ResponseHttp<IToken> = await httpCall.post(
            url,
            user
        );
        if (tokenResponse.response) {
            return tokenResponse.response;
        }
        if (tokenResponse.error) {
            return (tokenResponse.error.response.data)
        }
        return null
    }
    public async signup(newUser: INewUserData): Promise<IToken> {
        const httpCall: HttpCall = new HttpCall();
        const url: string = `${endPoints.apiURL}/${endPoints.signup}`
        const tokenResponse: ResponseHttp<IToken> = await httpCall.post(url, newUser)
        if (tokenResponse.response) {
            return tokenResponse.response;
        }
        if (tokenResponse.error) {
            return (tokenResponse.error.response.data)
        }
        return null
    }
}

export default new HomeService();