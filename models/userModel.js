const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  first_name: {
    type: String,
    // required: true,
  },
  last_name: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  profile_pic: {
    type: String,
  },
  address: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  token_type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "InActive",
  },
  insta_followers: {
    type: Number,
    default: 0,
  },
  youtube_subscribers: {
    type: Number,
    default: 0,
  },
  insta_username: {
    type: String,
  },
  device_token: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
  },
  role: {
    type: String,
  },
  youtube_url: {
    type: String,
  },
});
module.exports = mongoose.model("User", userModel);

// {
//   "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzlkMDg1ZDBmNTUzYjYwM2U0MTYyYzg0ODBmYjk2ZDE2Njg0NDdkNWNiNmVkNmVlMzk5ZjZjZWVkM2U0YWJkMjgxNzhiZmNjNDFhNjUwNTkiLCJpYXQiOjE2NzE4NjU2OTIuODk0NzA2MDEwODE4NDgxNDQ1MzEyNSwibmJmIjoxNjcxODY1NjkyLjg5NDcwNzkxODE2NzExNDI1NzgxMjUsImV4cCI6MTcwMzQwMTY5Mi44OTI1NDQ5ODQ4MTc1MDQ4ODI4MTI1LCJzdWIiOiIzNiIsInNjb3BlcyI6W119.oreKt-ZgRCG6WlgwE6KKxUW3MqYOVK5-EiSygLeT627_K3WKAoLcqkohYVgrHjvMxFTrCO4RczEaphbXNW5s7DaX-264IUFDsDmDP-3-xiRChGSxJolh2mA_vzz466Do9TzovTfdSezdWXISBElcRa4_XzQB9CRYltoznyA3_bpoHuCmSC4SwQOUU6CMC8LOHY7sjD3ZPlot06u55U1I4tCmEacUjRybs77bXTI-RmTSYaRXxOFkPQpmhdZgcPKbcCi8mZEsxfUdATpddslRg76UGsJ0wLzKyNn-Kf2Lxwqeefh6qMzEY3IU9kuTgREX79p5Q5cwUcgUlmgWwCTV4PQIt16eVadq3FuGfp9Fqm4ip3B_wTdEVXT1S81vHsv7iC92Yy4dPHz9B_HwxuU4pZaq7LAXCAV02JE_tz3k-Wx2b1lZAbFdDbDyhCu6gvOLrFdb8WtaFLps4sWz2kUCz64SyZ0xwQTTgiS5h40KrW0PxyX_XzYYwvmGfhCvLPXxdsesPFgXHtctkFndtpSPsYnneZe_LqkjpH1_FttN4Mrljm6NZWs1vA_YHUb4B75_6XbLXgilF1ZOXO6Ye1S0Wty7kwKut2ZUcwxtaXPN2SFHY18L1U5sW071aKcBXJ4hx3vchMNTq6lpnvWu0ltlY8wzeBvQtUfJfGUXbr-F8vM",
//   "token_type": "Bearer",
//   "expires_at": "2023-12-23 23:08:12",
//   "data": {
//       "id": 36,
//       "email": "chandankusingh4545@gmail.com",
//       "first_name": "Chandan Kumari",
//       "last_name": "Singh",
//       "phone": "9135324545",
//       "status": "Inactive",
//       "address": "LKO UP",
//       "profile_pic": "",
//       "insta_followers": 500000,
//       "insta_username": "cks_hi_bi",
//       "youtube_subscribers": 1540,
//       "youtube_url": "https://youtu.be/sK1v-XxbSyE",
//       "device_token": "uuuuuu",
//       "is_verified": 0,
//       "created_at": "2022-12-24T06:47:20.000000Z",
//       "updated_at": "2022-12-24T07:08:12.000000Z",
//       "fullName": "Chandan Kumari Singh"
//   },
//   "role": "user"
// }
