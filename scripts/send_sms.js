const dotenv = require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUTN_AUTH_TOKEN;
const phoneNumOut = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
     body: 'Friendly Reminder: You have a Quarantivity to get to!',
     from: phoneNumOut,
     to: '+15185244700'
   })
  .then(message => console.log(message.sid));