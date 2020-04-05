const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    name: { 
      type: String
    },
    phoneNumber: { 
      type: String
    },
    notification : {
      type: Number 
    },
    timeZone : {
      type: String 
    },
    time : {
      type : Date, 
      index : true
    }
  });

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;