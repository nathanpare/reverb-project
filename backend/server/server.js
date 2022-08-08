// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const SpotifyWebApi = require("spotify-web-api-node");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// app.post("/refresh", (req, res) => {
//   const refreshToken = req.body.refreshToken
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: "http://localhost:3000/",
//     clientId: "ea696b669de04879856700d07e3f9ac0",
//     clientSecret: "0cb6984edf9e49dc86a7240f2018abe2",
//     refreshToken,
//   });

//   spotifyApi
//     .refreshAccessToken()
//     .then(data => {
//       res.json({
//         accessToken: data.body.accessToken,
//         expiresIn: data.body.expiresIn,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.sendStatus(400);
//     });
// });

// app.post("/login", (req, res) => {
//   const code = req.body.code
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: process.env.REDIRECT_URI,
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//   })

//   spotifyApi
//     .authorizationCodeGrant(code)
//     .then(data => {
//       res.json({
//         accessToken: data.body.access_token,
//         refreshToken: data.body.refresh_token,
//         expiresIn: data.body.expires_in,
//       })
//     })
//     .catch(err => {
//       res.sendStatus(400)
//     })
// })

// app.listen(3002);
