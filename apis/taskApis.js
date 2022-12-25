const express = require("express");
const { model, Schema } = require("mongoose");
const router = express.Router();
const Task = require("../models/taskModel");

///get all notes
router.get("/getTasks", async (req, res, next) => {
  var tasks = await Task.find({
    // userId: req.body.userId,
    // status: req.body.status,
  });
  res.send({
    status: res.statusCode,
    message: "Hello people , welcome to My get tasks api",
    count: tasks.length,
    data: tasks,
  });
});

///Add addNote
router.post("/addTask", async (req, res, next) => {
  const task = new Task({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    main_title: req.body.main_title,
    image: req.body.image,
    description: req.body.description,
    amount: req.body.amount,
    type: req.body.type,
    expire_date: req.body.expire_date,
    task_insta_followers: req.body.task_insta_followers,
    task_youtube_subscribers: req.body.task_youtube_subscribers,
    terms_conditions: req.body.terms_conditions,
    is_featured: req.body.is_featured,
  });
  try {
    var result = await task.save();
    res.status(200).json({
      status: res.statusCode,
      message: "Task Added successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: res.statusCode,
      message: err.code == 11000 ? "Task already Exist" : err,
      // data: result,
    });
  }
});


///*******Connect to User***///
///Add update Note
router.post("/userResponseOnTask", async (req, res, next) => {
  
  var result = await Note.updateOne(
    { id: req.body.id },
    {
      $set: {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      },
    }
  );

  res.status(200).json({
    status: res.statusCode,
    message: "Note Updated successfully!",
    data: result,
  });
});

///Add delete Note
router.post("/deleteNote", async (req, res, next) => {
  var result = await Note.deleteOne({ id: req.body.id });

  res.status(200).json({
    status: res.statusCode,
    message: "Note Deleted successfully!",
    data: result,
  });
});
module.exports = router;
