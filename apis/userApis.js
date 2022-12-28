const express = require("express");
const { model, Schema } = require("mongoose");
const router = express.Router();
const User = require("../models/userModel");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null,__dirname);
    cb(null, `D:/NODE API PRACTICE/creater_management/Node_Backend/images/`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// router.post('/profile', upload, function (req, res, next) {
//   // req.body will hold the text fields, if there were any
//   // req.file is the `avatar` filecons
//   console.log(req.file);
// })

router.post("/uploadProfilePicture", (req, res, n) => {
  try {
    var result = upload.single("image");
    console.log(req.file);
    res.send({
      message: "Successful",
      data: result,
    });

    // Everything went fine.
  } catch (error) {
    if (error instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log(error);
      res.send({
        error: error,
      });
    } else {
      // An unknown error occurred when uploading.
      console.log(error);
      res.send({
        result: error,
      });
    }
  }
});

// router.post("/uploadProfilePicture",upload, (req, res, next) => {
//   console.log(req.file);
//  var result= upload;
//     if (result==null) {
//       res.send(result);
//     } else {
//       res.send("Success, Image uploaded!");
//     }
// });

///get all users
router.get("/getUsers", async (req, res, next) => {
  console.log('this is getUsers');
  var users = await User.find();
  res.send({
    status: res.statusCode,
    message: "Hello people , welcome to My get users api",
    count: users.length,
    data: users,
  });
});

///Add User Login
router.post("/updateProfile/:id", async (req, res, next) => {
  try {
    var result = await User.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      {
        $set: {
          first_name: req.body.first_name,
          // token: req.body.token,
          // token_type: req.body.token_type,
          // last_name: req.body.last_name,
          // youtube_url: req.body.youtube_url,
          // fullName: req.body.firsName+req.body.last_name,
          // role: req.body.firsName+req.body.role,
          // email: req.body.email,
          phone: req.body.phone,
          // status: req.body.status,
          // address: req.body.address,
          // insta_followers: req.body.insta_followers,
          // insta_username: req.body.insta_username,
          // youtube_subscribers: req.body.youtube_subscribers,
          profile_pic: req.body.profile_pic,
          device_token: req.body.device_token,
          // age: req.body.age,
        },
      }
    );

    if (result != null) {
      res.status(200).json({
        status: res.statusCode,
        message: "Updated successfully!",
        data: result,
      });
    } else {
      res.status(200).json({
        status: res.statusCode,
        message: "Updated failed! User did not found",
        data: result,
      });
    }
  } catch (err) {
    res.status(401).json({
      status: res.statusCode,
      message: "Updated failed!",
      data: err,
    });
  }
});

///Add User Login
router.post("/login", async (req, res, next) => {
  try {
    var result = await User.findOneAndUpdate(
      {
        id: req.body.id,
      },
      {
        $set: {
          device_token: "rermcrnnyercechf",
          phone: 37493543748,
        },
      }
    );
    console.log(result);
    if (result != null) {
      res.status(200).json({
        status: res.statusCode,
        message: "Login successfully!",
        data: result,
      });
    } else {
      let user = new User({
        id: req.body.id,
        device_token: req.body.device_token,
        phone: req.body.phone,
        token: "req.body.id",
        token_type: "Bearer",
      });
      result = await user.save();
    }
  } catch (err) {
    res.status(400).json({
      status: res.statusCode,
      message: err.code == 11000 ? "Task already Exist" : err,
      // data: result,
    });
  }
});

///Add User Login
router.post("/deleteAccount", async (req, res, next) => {
  try {
    var result = await User.findOneAndUpdate(
      {
        id: req.body.id,
      },
      {
        $set: {
          device_token: "rermcrnnyercechf",
          phone: 37493543748,
        },
      }
    );
    console.log(result);
    if (result != null) {
      res.status(200).json({
        status: res.statusCode,
        message: "Login successfully!",
        data: result,
      });
    } else {
      let user = new User({
        id: req.body.id,
        device_token: req.body.device_token,
        phone: req.body.phone,
        token: "req.body.id",
        token_type: "Bearer",
      });
      result = await user.save();
    }
  } catch (err) {
    res.status(400).json({
      status: res.statusCode,
      message: err.code == 11000 ? "Task already Exist" : err,
      // data: result,
    });
  }
});
module.exports = router;
