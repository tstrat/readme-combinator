const axios = require('axios');

axios
  .get('https://api.github.com/repos/tstrat/readme-combinator/readme')
  .then(res => {
    console.log('success!\n', res.data);
  });
