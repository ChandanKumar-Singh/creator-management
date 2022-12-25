const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Wallet = new mongoose.Schema({
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
  amount: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
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
module.exports = mongoose.model("Wallet", Wallet);
