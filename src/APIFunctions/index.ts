import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import requestBody from './requestbody';
interface FormFields {
  to: string;
  data: { [key: string]: string }[];
  fieldsToReturn: number[];
}

const headers = {
  'QB-Realm-Hostname': 'piedmontplumbers.quickbase.com',
  Authorization: `QB-USER-TOKEN ${process.env.REQ_COUNT_TOKEN}`,
  'Content-Type': 'application/json'
};

class APIFunctions {
  constructor() {}
  getApp() {
    const response = axios.get('https://api.quickbase.com/v1/apps/br4tjpx8n', {
      method: 'GET',
      headers: headers
    });
    return response;
  }
  async updateField(body: FormFields) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.quickbase.com/v1/records',
        headers,
        data: body
      });
    } catch (e) {
      console.log(e);
    }
  }

  // Requires Table ID
  /*
  Pass in the table ID with the following format
  
  {
    "form": "br5n5hq8r",
  } 
   */
  async getRecords(form: string) {
    requestBody.from = form;
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.quickbase.com/v1/records/query',
        headers,
        data: requestBody
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async updateBag(itemId: number, newQty: number) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.quickbase.com/v1/records',
        headers,
        data: {
          to: 'br5ncsiv3',
          data: [
            {
              '3': {
                value: `${itemId}` // Record ID
              },
              '8': {
                value: `${newQty}` // ID
              }
            }
          ],
          fieldsToReturn: [6, 7]
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async updateBin(itemId: number, newQty: number) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.quickbase.com/v1/records',
        headers,
        data: {
          to: 'br5n5hn9q',
          data: [
            {
              '3': {
                value: `${itemId}` // Record ID
              },
              '8': {
                value: `${newQty}` // ID
              }
            }
          ],
          fieldsToReturn: [6, 7]
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async updateBox(itemId: number, newQty: number) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.quickbase.com/v1/records',
        headers,
        data: {
          to: 'br5n52s8d',
          data: [
            {
              '3': {
                value: `${itemId}` // Record ID
              },
              '7': {
                value: `${newQty}` // ID
              }
            }
          ],
          fieldsToReturn: [3, 7]
        }
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async updateCase(itemId: number, newQty: number) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.quickbase.com/v1/records',
        headers,
        data: {
          to: 'br5n55mqi',
          data: [
            {
              '3': {
                value: `${itemId}` // Record ID
              },
              '7': {
                value: `${newQty}` // Quantity
              }
            }
          ],
          fieldsToReturn: [6, 7]
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async updateEA(itemId: number, newQty: number) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.quickbase.com/v1/records',
        headers,
        data: {
          to: 'br5n56hx6',
          data: [
            {
              '3': {
                value: `${itemId}` // Record ID
              },
              '7': {
                value: `${newQty}` // ID
              }
            }
          ],
          fieldsToReturn: [6, 7]
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default APIFunctions;
