const { Router } = require("express");
const Message = require("../models/Messages");
const router = Router();

router.post("/", (request, response) => {
  console.log('hit backend post ', )
  const newMessage = new Message(request.body);
  newMessage.save((error, record) => {
    if (error) return response.status(500).json(error);
    console.log(record);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  console.log('hit backend get ', )

  Message.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});



module.exports = router;
