import axios, { AxiosResponse } from 'axios';
import { ResponseHttp } from '../interfaces/response-http.interface';

export class HttpCall {
   constructor() {
      //...
   }
   public async get<T>(url: string, customHeaders?): Promise<ResponseHttp<T>> {
      try {
         const config = {
            headers: {
               ...customHeaders,
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*'
            }
         };
         const response: AxiosResponse<T> = await axios.get(url, config);
         return { response: response.data };
      } catch (error) {
         return { error };
      }
   }
   public async post<T>(url: string, body, customHeaders?): Promise<ResponseHttp<T>> {
      try {
         const config = {
            headers: {
               ...customHeaders,
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               Accept: 'application/json'
            }
         };
         const response: AxiosResponse<T> = await axios.post(url, { ...body }, config);
         return { response: response.data };
      } catch (error) {
         return { error };
      }
   }
}
