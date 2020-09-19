# Facebook messenger dad-joke bot

A simple bot that posts the top dad joke from r/dadjokes of the day to a Facebook messenger thread:
![Screenshot](https://i.imgur.com/N4F87Pz.jpg?1)

## Just for fun

This is made just for fun for my personal use in a group chat with my friends. Use at your own risk

## To use:

- Register to reddit
- Register an app to access the reddit API
- Create a Facebook account for the bot (Don't use your real one, because FB might block it for pulling these shenanigans)
- Get the thread ID you want the bot to post into. This can be either form the chat with a single person or from a group chat
- Add the bot to the group chat and/or make friend-requests if required
- Fill in the required details marked with `FILL_IN` in `getToken.js`, `login.js` and `index.js`
- Adjust the cron job in `index.js` to desired time
- Run `index.js`
