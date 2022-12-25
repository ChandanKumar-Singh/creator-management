const express = require("express");
const { model, Schema } = require("mongoose");
const router = express.Router();
const ResponsedTask = require("../models/responsTaskModel");
const CollabHistory = require("../models/collabModel");

///getAllResponse
router.get("/getAllResponse", async (req, res, next) => {
  var response = await ResponsedTask.find({
    // userId: req.body.userId,
    // status: req.body.status,
  });
  res.send({
    status: res.statusCode,
    message: "Hello people , welcome to My get response task api",
    count: response.length,
    data: response,
  });
});

///addResponsedTask
router.post("/addResponsedTask", async (req, res, next) => {
  const response = new ResponsedTask({
    taskId: req.body.taskId,
    userId: req.body.userId,
    data: req.body.data,
  });
  try {
    var result = await ResponsedTask.findOne({
      taskId: req.body.taskId,
      userId: req.body.userId,
    });
    if (result == null) {
      result = await response.save();
      var collab = await CollabHistory.findOneAndUpdate(
        {
          taskId: req.body.taskId,
          userId: req.body.userId,
        },
        {
          $set: {
            status: 1,
          },
        }
      );
      res.status(200).json({
        status: true,
        message: "Responsed Task Added successfully!",
        data: result,
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Responsed Task Already Exist!",
        data: result,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: res.statusCode,
      message: err,
    });
  }
});

///*******Connect to User***///
///Add update Note
router.post("/adminResponseOnTask", async (req, res, next) => {

  try {
    var result = await ResponsedTask.findOne({
      taskId: req.body.taskId,
      userId: req.body.userId,
    });
    if (result != null) {
       result = await ResponsedTask.findOneAndUpdate(
        {
          taskId: req.body.taskId,
          userId: req.body.userId,
        },
        {
          $set: {
            status: req.body.status,
          },
        }
      );
      var collab = await CollabHistory.findOneAndUpdate(
        {
          taskId: req.body.taskId,
          userId: req.body.userId,
        },
        {
          $set: {
            status: req.body.status==1?2:3,
          },
        }
      );
      res.status(200).json({
        status: true,
        message: "Responsed Task Updated successfully!",
        data: result,
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Something went wrong",
        data: result,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: res.statusCode,
      message: err,
    });
  }
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
