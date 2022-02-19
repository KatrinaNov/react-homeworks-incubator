import axios from 'axios'

// api
export const RequestsAPI = {
  createResponse(success: boolean) {
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success});
  }
}