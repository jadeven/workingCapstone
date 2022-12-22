const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  beach: {
    type: String,
    required: true,
    enum: ["pyramid", "bellows", "hickam", "barbers", "pokai"]
  },
  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;
