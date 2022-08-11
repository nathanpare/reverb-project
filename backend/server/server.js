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


// function generateRandomString(length) {
//   let result = '';
//   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() *
//       charactersLength));
//   }
//   return result;
// }
// const stateKey = 'spotify_auth_state';

// app.get("/login", async (req, res) => {
//   //after login
//   //gets token, puts in authorizatin bearer
//   //res.send("Login to Spotify");
//   const state = generateRandomString(16);
//   res.cookie(stateKey, state);
//   const scope = 'user-read-private user-read-email';
//   const queryParams = querystring.stringify({
//     response_type: 'code',
//     client_id: CLIENT_ID,
//     redirect_uri: REDIRECT_URI,
//     state: state,
//     scope: scope
//   });
//   console.log(CLIENT_ID);
//   res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);

// });

// app.get('/callback', (req, res) => {

//   const code = req.query.code || null;
//   //b64_auth_str = base64.urlsafe_b64encode(auth_str.encode()).decode()
//   axios({
//     method: 'post',
//     url: 'https://accounts.spotify.com/api/token',
//     data: querystring.stringify({
//       grant_type: 'authorization_code',
//       code: code,
//       redirect_uri: REDIRECT_URI
//     }),
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
//     },
//   }).then(response => {
//     if (response.status === 200) {


//       const { access_token, token_type } = response.data;

//       axios.get('https://api.spotify.com/v1/me', {
//         headers: {
//           Authorization: `${token_type} ${access_token}`
//         }
//       })
//         .then(response => {
//           res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
//         })
//         .catch(error => {
//           res.send(error);
//         })
//       // const { refresh_token } = response.data;

//       // axios.get(`http://localhost:3000/refresh_token?refresh_token=${refresh_token}`)
//       //   .then(response => {
//       //     res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
//       //   })
//       //   .catch((error) => {
//       //     res.send(error);
//       //   })
//     } else {
//       res.send(response);
//     }
//   })
//     .catch(error => {
//       res.send(error);
//     });
// });

// app.get('/refresh_token', (req, res) => {
//   const { refresh_token } = req.query;
//   axios({
//     method: 'post',
//     url: 'https://accounts.spotify.com/api/token',
//     data: querystring.stringify({
//       grant_type: 'refresh_token',
//       refresh_token: refresh_token
//     }),
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
//     },
//   })
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(error => {
//       res.send(error);
//     });
// });

// app.get("/playlists",  async (req, res) => {
//   try {
//     const getAllplaylists = await pool.query(
//       'SELECT name, user_id, image_url FROM playlists ORDER BY name'

//     );
//     //console.log(getAllplaylists.rows);
//     res.json(getAllplaylists);
//     //res.send("working")
//   }
//   catch (err) {
//     console.error(err.message);
//   }
// });
