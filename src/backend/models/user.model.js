const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstName: { type: String, required: true, max: 15 },
  lastName: { type: String, required: true, max: 15 },
  email: { type: String, required: true, max: 25 },
  password: { type: String, required: true, max: 25 }
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
