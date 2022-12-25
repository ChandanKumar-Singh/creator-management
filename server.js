const mongoose = require("mongoose");
const express = require("express");
const uri =
  "mongodb+srv://tds:rrr123@node-rest-app.9jvqlbd.mongodb.net/Creator_App";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



const app = express();
mongoose.connect(uri).then(() => {
  console.log("Connected to db ...");

 
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  app.get("/", (req, res, next) => {
    res.send({
      status: res.statusCode,
      message: "Hello people , welcome to My node api",
    });
  });


  ///User Apis
  const userApis=require('./apis/userApis');
  const notesApis=require('./apis/notesApis');
  const taskApis=require('./apis/taskApis');
  const collabsApis=require('./apis/collab');
  const responsedTaskApis=require('./apis/responsedTask');
  app.use('/user',userApis);
  app.use('/notes',notesApis);
  app.use('/tasks',taskApis);
  app.use('/collabs',collabsApis);
  app.use('/responsedTask',responsedTaskApis);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});

module.exports=app;