import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
interface FormFields {
  to: string;
  data: { [key: string]: string }[];
  fieldsToReturn: number[];
};

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
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async getRecords(body: FormFields) {
      try{
        const response = await axios({
          method: 'POST',
          url: 'https://api.quickbase.com/v1/records/query',
          headers,
          data: body
        });
        return response;
      }
      catch(e){
        console.log(e);
      }    
  }
}

export default APIFunctions;
