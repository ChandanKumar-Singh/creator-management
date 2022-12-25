const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },

  title: {
    type: String,
    required: true,
  },
  main_title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  expire_date: {
    type: Date,
    required: true,
  },
  task_insta_followers: {
    type: Number,
  },
  task_youtube_subscribers: {
    type: Number,
  },
  status: {
    type: String,
    default: "Active",
  },
  terms_conditions: {
    type: String,
  },
  is_featured: {
    type: Number,
    default: 0,
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
module.exports = mongoose.model("Task", taskModel);
