const axios = require('axios').default;

const getDadJoke = async (token) => {
  const options = {
    headers: { Authorization: `bearer ${token}` },
  };

  return new Promise((resolve) => {
    axios.get('https://oauth.reddit.com/r/dadjokes/top/.json?limit=1&t=day', options)
      .then((response) => {
        if (response.status === 200) {
          console.log('Dad joke retrieved successfully');
          const firstLine = response.data.data.children[0].data.title;
          const secondLine = response.data.data.children[0].data.selftext.replace(/[\r\n]{2,}/g, '\n');
          resolve(`\`Reddit dad-joke of the day\`\n*_${firstLine}_*\n*_${secondLine}_*`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = {
  getDadJoke,
};
