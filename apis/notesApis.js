const express = require("express");
const { model, Schema } = require("mongoose");
const router = express.Router();
const Note = require("../models/notesModel");

///get all notes
router.get("/getNotes", async (req, res, next) => {
  var notes = await Note.find({
    userId: req.body.userId,
    status: req.body.status,
  });
  res.send({
    status: res.statusCode,
    message: "Hello people , welcome to My get notes api",
    count: notes.length,
    data: notes,
  });
});

///Add addNote
router.post("/addNote", async (req, res, next) => {
  const note = new Note({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });
  try {
    var result = await note.save();
    res.status(200).json({
      status: res.statusCode,
      message: "Note Added successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: res.statusCode,
      message: err.code == 11000 ? "Note already Exist" : err,
      // data: result,
    });
  }
});

///Add update Note
router.post("/updateNote", async (req, res, next) => {
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
