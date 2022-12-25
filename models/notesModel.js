const mongoose = require("mongoose");

const notesModel = new mongoose.Schema({
  id: {
    type: Date,
    unique: true,
    default:Date.now
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Number,
    default: 0,
  },
  color:{
    type:Number
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Note", notesModel);
