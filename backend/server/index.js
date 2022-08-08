
// const express = require('express');

// require('dotenv').config();

// const app = express();
// const axios = require('axios');
// const port = 3000;

// const cors = require('cors');

// const pool = require('./connection');



// app.use(cors());

// app.use(express.json());
// const querystring = require('query-string');
// const { response } = require('express');
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;

// app.listen(port, () => {
//   console.log(`database server running on port ${port}`);
//   console.log(REDIRECT_URI);
// });

// app.get("/playlists", async (req, res) => {

// });
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
  

//       const {access_token, token_type } = response.data;

//       axios.get('https://api.spotify.com/v1/me', {
//         headers: {
//           Authorization: `${token_type} ${access_token}`
//         }
//       })
//       .then(response => {
//         res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
//       })
//       .catch(error =>{
//         res.send(error);
//       })
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
