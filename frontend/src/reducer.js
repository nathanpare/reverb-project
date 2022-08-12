export const initialState = {
  user: null,
  playing: false,
  item: null,
  playingTrack: {},
  // remove later
  // token: "BQA84mvzQSf5wBC4YI0bePTxfkaLAIjdkZfvS3D-si756NEPPi25CItCA776gMz9w3b-1XrhRaNYtADqalg5Gg_yZwjrakIsszxW4cmkQwJLyCQHpGZazt96VEVW_rDY7hWJGW2XmI2zLg9cBvHx2TI5ObZArKx3A5Y4mJ5s72XUzB_3VDdolhqG1aRzl8bD02CpGqI"
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLISTS" :
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_FEATURED" :
      return {
        ...state,
        featured: action.featured,
      };

    case "SET_SUMMERS" :
      return {
        ...state,
        summers: action.summers,
      };

    case "SET_RELEASES" :
      return {
        ...state,
        releases: action.releases,
      };

    case "SET_RECENTS" :
      return {
        ...state,
        recents: action.recents,
      };

    case "SET_SEARCH" :
      return {
        ...state,
        search: action.search,
      };

    case "SET_PLAYING_TRACK" :
      return {
        ...state,
        playingTrack: action.track,
      };

    default:
      return state;
  }
}

export default reducer;