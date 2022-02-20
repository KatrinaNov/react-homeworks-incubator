import axios, {AxiosResponse} from 'axios'

// api
export const RequestsAPI = {
  createResponse(success: boolean) {
    return axios.post<{ success: boolean }, AxiosResponse<ResponseType>>('https://neko-cafe-back.herokuapp.com/auth/test', {success});
  }
}

export type ResponseType = {
  errorText: string
  info: string
  yourBody: {success: boolean}
  yourQuery: {}
}