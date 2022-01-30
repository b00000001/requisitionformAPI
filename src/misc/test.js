(() => {
  var headers = {
    'QB-Realm-Hostname': 'piedmontplumbers.quickbase.com',
    'User-Agent': '{User-Agent}',
    Authorization: 'QB-USER-TOKEN b6p4j6_kauq_0_dcvntrphdhmxhcnpsjsxduvu2x6',
    'Content-Type': 'application/json'
  };
  var body = {
    to: 'br4vj56h7',
    data: [
      {
        6: { value: 'Test Location' },
        7: { value: 'Test Phase' },
        8: { value: 'Test Category' },
        9: { value: 'Test Subcategory' },
        10: { value: 'Test Item' },
        11: { value: 'Test Qty' },
        12: { value: 'Is this endpoint working?' }
      }
    ],
    fieldsToReturn: [6, 7, 8, 9, 10, 11, 12]
  };

  const formEl = document.getElementById('fsForm4641298');
  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('https://api.quickbase.com/v1/records', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
      .then((res) => {
        if (res.ok) {
          return res.json().then((res) => console.log(res));
        }
        return res
          .json()
          .then((resBody) =>
            Promise.reject({ status: res.status, ...resBody })
          );
      })
      .catch((err) => console.log(err));
  });
})();
