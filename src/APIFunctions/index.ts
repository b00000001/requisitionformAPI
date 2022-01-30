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
      'Content-Type': 'application/json',
    };
    const response = axios.get('https://api.quickbase.com/v1/apps/br4tjpx8n', {
      method: 'GET',
      headers: headers,
    });
    return response;
  }
  async updateField() {
    const headers = {
      'QB-Realm-Hostname': 'piedmontplumbers.quickbase.com',
      'User-Agent': 'Test',
      Authorization: `QB-USER-TOKEN ${process.env.QB_USER_TOKEN}`,
      'Content-Type': 'application/json',
    };
    let body = {
      to: 'br4vj56h7',
      data: [
        {
          '6': {
            value: 'Test Location',
          },
          '7': {
            value: 'Test Phase',
          },
          '8': {
            value: 'Test Category',
          },
          '9': {
            value: 'Test Subcategory',
          },
          '10': {
            value: 'Test Item',
          },
          '11': {
            value: 'Test Qty',
          },
          '12': {
            value: 'Added from API',
          },
        },
      ],
      fieldsToReturn: [6, 7, 8, 9, 10, 11, 12],
    };
    const response = await axios({
      method: 'POST',
      url: 'https://api.quickbase.com/v1/records',
      headers,
      data: body,
    })
    return response;
  }
}

export default APIFunctions;
