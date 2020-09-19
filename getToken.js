const axios = require('axios').default;
const qs = require('querystring');

const ID = 'FILL_IN_REDDIT_APP_ID';
const SECRET = 'FILL_IN_REDDIT_APP_SECRET';
const USER = 'FILL_IN_REDDIT_USERNAME';
const PASSWORD = 'FILL_IN_REDDIT_PASSWORD';

const TOKEN_ENDPOINT = 'https://www.reddit.com/api/v1/access_token';

const body = {
  grant_type: 'password',
  username: USER,
  password: PASSWORD,
};

const options = {
  headers: {
    'User-Agent': 'Dad-joke-bot by /u/djentelmenis',
  },
  auth: {
    username: ID,
    password: SECRET,
  },
};

const getToken = () => new Promise((resolve) => {
  axios
    .post(TOKEN_ENDPOINT, qs.stringify(body), options)
    .then((response) => {
      if (response.status === 200) {
        console.log('Access token received successfully');
        resolve(response.data.access_token);
      }

      resolve(null);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = {
  getToken,
};
