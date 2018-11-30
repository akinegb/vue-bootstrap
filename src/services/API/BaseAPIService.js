import axios from 'axios';

export default class ApiService {

  constructor(url) {
    this.baseUrl = '/';
    this.url = this.baseUrl + url;
  }

  getAuthHeaders({hash, timestamp, token}) {
    const header = {
      'ACCEPT': 'application/json',
      'TIMESTAMP': timestamp,
      'AUTHORISATION': hash,
      'Content-Type': 'application/json'
    };

    return header;
  }

  get(id) {
    return axios.get(this.url + '/' + id)
  }

  getAll() {

  }

  post() {

  }

  put(id) {

  }

  patch() {

  }
}
