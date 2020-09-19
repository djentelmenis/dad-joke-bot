const fs = require('fs');
const API = require('facebook-chat-api');

const credentials = { email: 'FILL_IN_FACEBOOK_EMAIL', password: 'FILL_IN_FACEBOOK_PASSWORD' };

const logInToFB = () => new Promise((resolve) => {
  API(credentials, (err, api) => {
    if (err) return console.error(err);

    fs.writeFile('appstate.json', JSON.stringify(api.getAppState()), () => {
      console.log('Created log-in file successfully');
      resolve();
    });
  });
});

module.exports = {
  logInToFB,
};
