import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
interface FormFields {
  to: string;
  data: { string: { string: string } }[];
  fieldsToReturn: number[];
}
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
  async updateField(body: FormFields) {
    const headers = {
      'QB-Realm-Hostname': 'piedmontplumbers.quickbase.com',
      'User-Agent': 'Test',
      Authorization: `QB-USER-TOKEN ${process.env.QB_USER_TOKEN}`,
      'Content-Type': 'application/json'
    };
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.quickbase.com/v1/records',
        headers,
        data: body
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default APIFunctions;
