
const express = require('express');

require('dotenv').config();

const app = express();
const axios = require('axios');
const port = 8080;

const cors = require('cors');

const pool = require('./connection');



app.use(cors());
const querystring = require('query-string');
const { response } = require('express');
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.listen(port, () => {
  console.log(`database server running on port ${port}`);
  // console.log(REDIRECT_URI);
});

app.delete("/playlists/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("Deleted playlist id: ", id);

    const deleteStep = await pool.query(
      "DELETE FROM playlist WHERE id = $1 RETURNING *", [id]
    )
    res.json("The song was deleted");
  }
  catch (err) {
    console.error(err.message);
  }
});

app.post("/playlists", async (req, res) => {
  try {
    const { name, user_id, image_url } = req.body;

    console.log("req body", req.body);

    const newPlaylist = await pool.query("INSERT INTO playlists(name, user_id, image_url) VALUES ($1, $2, $3) RETURNING *", [name, user_id, image_url])

    res.json(newPlaylist.rows[0])
    
  } catch(err){
    console.error(err.message)

  }
    
});
app.get("/playlistsongs", async (req, res) => {
  try {
    const getAllplaylistsongs = await pool.query(
      'SELECT playlist_id, user_id, spotify_song_id, spotify_song_name FROM playlist_songs'

    );
    res.json(getAllplaylistsongs.rows);
  }
  catch (err) {
    console.error(err.message);
  }
});

app.get('/', function(req, res, next) {
  return res.status(200).json({ message: 'Welcome to Express API template' });
});

app.get("/playlists", async (req, res) => {
  try {
    const getAllplaylistshere = await pool.query(
      'SELECT playlists.id, playlists.name FROM playlists JOIN users on users.id = playlists.user_id ORDER BY name ASC' 

    );
    res.json(getAllplaylistshere.rows);
  }
  catch (err) {
    console.error(err.message);
  }
});
app.delete("/deleteplaylists/:id", async (req, res) => {
  try {
    const id =parseInt(req.params.id);
    console.log("Deleted Playlist id: ", id );
    const deleteStep = await pool.query(
      "DELETE FROM playlists WHERE id = $1 RETURNING *", [id]
    )
    res.json("The playlist was deleted")

  }catch(err){
    console.log(err.message)
  }
});

app.get("/users", async (req, res) => {
  try {
    const getAllusers = await pool.query(
      'SELECT * FROM users ORDER BY id ASC' 

    );
    res.json(getAllusers.rows);
  }
  catch (err) {
    console.error(err.message);
  }
});
app.post("/users", async (req, res) => {
  try {
    const { spotify_name, spotify_user_id} = req.body;

    console.log("req body", req.body);

    const newUser = await pool.query("INSERT INTO users(spotify_name, spotify_user_id) VALUES ($1, $2) RETURNING *", [spotify_name, spotify_user_id]);

    res.json(newUser.rows[0]);
    
  } catch(err){
    console.error(err.message)

  }
    
});