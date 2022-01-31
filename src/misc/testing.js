(() => {
  const formEl = document.getElementById('fsForm4641298');
  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

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
          6: { value: document.getElementById('location').value },
          7: { value: document.getElementById('phase').value },
          8: { value: document.getElementById('category').value },
          9: { value: document.getElementById('subCategory').value },
          10: { value: document.getElementById('item').value },
          11: { value: document.getElementById('qty').value },
          12: { value: 'test' }
        }
      ],
      fieldsToReturn: [6, 7, 8, 9, 10, 11, 12]
    };

    fetch('http://localhost:3000/update', {
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
