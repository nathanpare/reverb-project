import React from 'react';
import { Track, Tracklist, initialState, searchData, log} from './tracks';
import "./trackclick.css";
class Trackclicks extends React.Component {
	constructor(props) {
  	super(props);
    this.state = initialState;
    
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.isInList = this.isInList.bind(this);
  }
  
	render () {
  	return (
    	<div className='trackclick'>
       <h1>Playlist:</h1>
    	  <Tracklist 
    	    listType="playlist" 
    	    playlist={this.state.playlist} 
    	    clickHandler={this.remove}
          />
        <h1>Search result:</h1>
        <Tracklist 
          playlist={searchData.playlist}
          clickHandler={this.add} 
          isInList={this.isInList}
          />
          <pre>{log(this.state)}</pre>
       </div>
    )
  }
  add (newTrack) {
  	console.log('Add track', newTrack);
    if (this.state.playlist.filter(track => track.id === newTrack.id).length === 0) {
      this.setState({
        ...this.state,
				playlist: [
        	...this.state.playlist,
          newTrack
        ]
      });
    }
  }
  
  isInList (track) {
  	// used for displayling if search result track is already in playlist
  	return this.state.playlist.filter(playlistTrack => 
    	playlistTrack.id === track.id).length > 0;
  }
  
  remove (trackToRemove) {
  	console.log('remove', trackToRemove);
    this.setState({
    	...this.state,
      playlist: this.state.playlist.filter(track => track.id !== trackToRemove.id)
    });
  }
}
  export default Trackclicks;