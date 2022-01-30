import axios from 'axios';
(async () => {
  const headers = {
    'QB-Realm-Hostname': 'piedmontplumbers.quickbase.com',
    'User-Agent': 'Test',
    Authorization: `QB-USER-TOKEN ${process.env.QB_USER_TOKEN}`,
    'Content-Type': 'application/json',
  };
  const body = {
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
          value: 'Inserted from API',
        },
      },
    ],
    fieldsToReturn: [6, 7, 8, 9, 10, 11, 12],
  };
   try{
    const response = await axios({
      method: 'POST',
      url: 'https://api.quickbase.com/v1/records',
      headers,
      data: body,
    })
   }   
   catch(e){
    console.log(e);
   }
})();
