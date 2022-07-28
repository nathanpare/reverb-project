// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;

const LibraryPage = () => {
  return (
    <div className="Page-content">
      <div className="Page-top">
        <Header />
      </div>
 
      <div className="Page-center">
        <LeftBar />
        <Body />
        <RightBar />
      </div>
      <div className="Page-bottom">
        <PlayBar />
      </div>
    </div>
  );
 };
 
 const Header = () => {
  return (
    <div className="Page-header">
      <h1>Reverb</h1>
    </div>
  );
 };
 
const LeftBar = () => {
return (
    <div className="Left-bar">
      <button>Navigation</button>
      <button>Search</button>
    </div>
  );
};
 
const Body = () => {
  
let user = "TempUser111";
  
return (
    <div className="Center-content">
      <h4>Good Morning, {user}</h4>
        <div>Songs</div>
        <div>Artists</div>
        <div>Albums</div>
        <div>Podcasts</div>
        <div>Playlists</div>
        <div>Genres</div>
        {/* <GenreList /> */}
    </div>
  )
};
  
const RightBar = () => {
 
return (
    <div className="Right-bar">
      <button>Settings</button>
    </div> 
  ); 
};

const PlayBar = () => {
  return (
    <div className="Play-bar">
      <div className="Song-bar">THIS IS A SONG BAR</div>
    </div>
  )
};

 // const GenreList = () => {
 //   const mainGenreList = {
 //     "Pop": ["artist1", "artist2"],
 //     "Rock": [],
 //     "Hip Hop": [],
 //     "Country": [],
 //     "Classical": [],
 //     "Jazz": [],
 //     "Electronic": [],
 //     "Heavy Metal": [],
 //   };
 //   return (
 //     <MainGenreList />
 //   );
 // }
 
export default LibraryPage;
 