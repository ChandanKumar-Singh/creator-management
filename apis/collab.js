const express = require("express");
const { model, Schema } = require("mongoose");
const router = express.Router();
const CollabHistory = require("../models/collabModel");

///get all notes
router.get("/getAllCollab", async (req, res, next) => {
  try {
    var collab = await CollabHistory.find({
      // userId: req.body.userId,
      // status: req.body.status,
    });
    res.send({
      status: res.statusCode,
      message: "Hello people , welcome to My get collab api",
      count: collab.length,
      data: collab,
    });
  } catch (err) {
    res.send({
      status: res.statusCode,
      message: "My get collab api failed",
      error:err
    });
  }
});

///Add addNote
router.post("/addCollab", async (req, res, next) => {

  const collab = new CollabHistory({
    id:Schema.Types.ObjectId,
    taskId: req.body.taskId,
    userId: req.body.userId,
    status: req.body.status,
    type: req.body.type,
  });
  try {
    var result = await CollabHistory.findOne({
      taskId: req.body.taskId,
      userId: req.body.userId,
    });
    if(result==null){
      result = await collab.save();
      res.status(200).json({
        status: res.statusCode,
        message: "Collab History Added successfully!",
        data: result,
      });
    }else{
      res.send({
        status: res.statusCode,
        message: "Collab History Already Exist!",
        data: result,
      });
    }
 
  } catch (err) {
    res.status(400).json({
      status: res.statusCode,
      message: err.code == 11000 ? `Collab already Exist \n ${err}` : err,
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
