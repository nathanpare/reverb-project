const songsForPlaylist = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
}

function NewPlaylist(inp) {
  const len = inp.length;
  const rando = Math.floor(Math.random() * len);
  return inp[rando]; 
}

console.log(NewPlaylist(songsForPlaylist));