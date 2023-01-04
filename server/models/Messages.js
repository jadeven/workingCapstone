const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  beachChoice: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  //  time : { type : Date, default: new Date () }

});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;
