import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class APIFunctions {
  constructor() {}
  getApp() {
    let headers = {
      'QB-Realm-Hostname': 'piedmontplumbers.quickbase.com',
      'User-Agent': '{User-Agent}',
      Authorization: `QB-USER-TOKEN ${process.env.QB_USER_TOKEN}`,
      'Content-Type': 'application/json'
    };
    const response = axios.get('https://api.quickbase.com/v1/apps/br4tjpx8n', {
      method: 'GET',
      headers: headers
    });
    return response;
  }
}

export default APIFunctions;
