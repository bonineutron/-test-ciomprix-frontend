import { HttpCall } from './http-call.service';
import { ResponseHttp } from '../interfaces/response-http.interface';
import { IResponseSearch } from '../interfaces/search-users.interface'
import { endPoints } from '../end-ponts/end-points';

class SearchUsersService {
    public async searchProfile(token: string): Promise<IResponseSearch> {
        const httpCall: HttpCall = new HttpCall();
        const url: string = `${endPoints.apiURL}/${endPoints.searchUsers}`;
        const header = { 'x-acess-token': token };
        const searchUsersResponse: ResponseHttp<IResponseSearch> = await httpCall.get(
            url,
            header
        );
        if (searchUsersResponse.response) {
            return searchUsersResponse.response;
        }
        if (searchUsersResponse.error) {
            return (searchUsersResponse.error.response.data)
        }
        return null
    }
}

export default new SearchUsersService();