const accountSid = 'AC5889407691659060b7ff697a0f58916b';
const authToken = '302d95cab4aca5e45bd4eef1edeee6a3';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12762121153',
     to: '+15185244700'
   })
  .then(message => console.log(message.sid));