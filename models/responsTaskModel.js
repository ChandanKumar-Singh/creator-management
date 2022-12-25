const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ResponsedTask = new mongoose.Schema({
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
    default: 0,
  },
  amount: {
    type: Number,
    default: 0,
  },
  data: {
    type: {
      image: String,
      url: String,
      description: String,
    },
    require: true,
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
module.exports = mongoose.model("ResponsedTask", ResponsedTask);
