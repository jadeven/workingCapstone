const { Router } = require("express");
const Message = require("../models/Messages");
const router = Router();

router.post("/", (request, response) => {
  console.log('hit backend post ')
  const newMessage = new Message(request.body);
  newMessage.save((error, record) => {
    if (error) return response.status(500).json(error);
    console.log(record);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Message.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
// router.get("/:id", (request, response) => {
//   Pizza.findById(request.params.id, (error, record) => {
//     if (error) return response.status(500).json(error);
//     return response.json(record);
//   });
// });

// router.delete("/:id", (request, response) => {
//   Pizza.findByIdAndRemove(request.params.id, {}, (error, record) => {
//     if (error) return response.status(500).json(error);
//     return response.json(record);
//   });
// });

// router.put("/:id", (request, response) => {
//   const body = request.body;
//   Pizza.findByIdAndUpdate(
//     request.params.id,
//     {
//       $set: {
//         // Take note that the customer is not included, so it can't
//         crust: body.crust,
//         cheese: body.cheese,
//         sauce: body.sauce,
//         toppings: body.toppings
//       }
//     },
//     {
//       new: true,
//       upsert: true
//     },
//     (error, record) => {
//       if (error) return response.status(500).json(error);
//       return response.json(record);
//     }
//   );
// });

module.exports = router;
