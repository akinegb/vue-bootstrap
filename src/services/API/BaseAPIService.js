import axios from 'axios';

export default class ApiService {

  getAuthHeaders({hash, timestamp, token}) {
    const header = {
      'ACCEPT': 'application/json',
      'TIMESTAMP': timestamp,
      'AUTHORISATION': hash,
      'Content-Type': 'application/json'
    };

    return header;
  }

}
