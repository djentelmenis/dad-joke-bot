const fs = require('fs');
const cron = require('node-cron');
const API = require('facebook-chat-api');

const l = require('./logIn');
const t = require('./getToken');
const j = require('./getDadJoke');

const receiver = 'FILL_IN_MESSENGER_THREAD';

const main = async () => {
  if (fs.existsSync('appstate.json')) {
    console.log('Log-in file already present');
  } else await l.logInToFB();

  const token = await t.getToken();
  const dadJoke = await j.getDadJoke(token);

  API({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error(err);

    api.sendMessage(dadJoke, receiver);
  });
};

console.log('Starting job...');

cron.schedule('0 12 * * *', () => {
  main();
});
