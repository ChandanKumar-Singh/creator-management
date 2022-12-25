const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const CollabHistory = new mongoose.Schema({
  id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId(),
  },

  taskId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
    default: 0,
  },

  type: {
    type: String,
    required: true,
    defaul: "Rejected",
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
module.exports = mongoose.model("CollabHistory", CollabHistory);
