# reverb-project

### Test account Login credentials:

Email: reverbtest95@gmail.com
password: test12345

Run the following going to backend folder

1. In the terminal type psql
Run:
\i db/databasecreate/database.sql

--Database is created

2. Connect the database by # \c spotifyclone;
Run for schema and seed data copying all at once:

\i db/schema/01_users.sql
\i db/schema/02_playlists.sql
\i db/schema/03_likes.sql
\i db/schema/04_playlist_songs.sql

\i db/seeds/01_users_seed.sql
\i db/seeds/02_playlists_seed.sql
\i db/seeds/03_likes_seed.sql
\i db/seeds/04_playlist_songs_seed.sql

3. Go to backend/server/connection.js file and change your user and password from your database user and password.
4. Go to another terminal and go to server directory and run: npm start


In the Frontend and Backend Directory run:

### `npm install`

as well as the following command in both directories to start the application:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Screenshots

!["Screenshot of Login Page"](https://github.com/nathanpare/reverb-project/blob/main/docs/Login%20Page.png?raw=true)
!["Screenshot of Home Page"](https://github.com/nathanpare/reverb-project/blob/main/docs/Home%20Page.png?raw=true)
!["Screenshot of Search"](https://github.com/nathanpare/reverb-project/blob/main/docs/Search%20Page.png?raw=true)
!["Screenshot of Create Playlists Page"](https://github.com/nathanpare/reverb-project/blob/main/docs/Create%20Playlists.png?raw=true)
!["Screenshot of Library Page"](https://github.com/nathanpare/reverb-project/blob/main/docs/Library%20Page.png?raw=true)