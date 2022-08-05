const log = (val) => JSON.stringify(val, null, 2);

const Track = (props) => {

	const displayIcon = (type) => {
  	const adding = type === 'add';
  	return (
  		<span title={adding? 'add track' : 'remove track'}>{adding ? '+' : '-'}</span>
  	)
  };
  
	return (
  	<span onClick={() => props.clickHandler(props.track)}>
      {displayIcon(props.type)} {props.track.title ||props.track.name} - {props.track.artist}
    </span>
  )
}

const Tracklist = (props) => {
	const listType = props.listType;
	return (
  	<div>
      {props.playlist.length === 0 ?
        ( <strong>No tracks in list yet.</strong> ) :
        ( <ul>
            
          { props.playlist.map((track) => 
          	(
              <li key={track.id} >
                { listType === 'playlist' ? 
                  <Track 
                    clickHandler={props.clickHandler} 
                    type="remove" 
                    track={track} /> : 
                  <Track 
                    clickHandler={props.clickHandler} 
                    type="add" 
                    track={track} /> }
                <span>{props.isInList && props.isInList(track) ? 
                ' - added' : null
                }
                </span>
              </li>
            )
          )}
        </ul> )
      }
    </div>
  )
}

const initialState = {
	playlist: [{
  	user_id: 0,
    name:'Black or White',
    image_url: 'Michael Jackson'
  },
  {
  	user_id: 1,
    name:'Bad',
    image_url: 'Michael Jackson'
  },
  ]
};

const searchData = {
    	playlist: [
      	{user_id: 's1', name:'biggiesearch',image_url:'biggiesmallssearch',album:'reaady to diesearch'},				
        {user_id: 's2', name:'nassearch',image_url:'nasessearch',album:'illmaticsearch'},		
      	{user_id: 's3', name:'eminemsearch',image_url:'emsearch',album:'marshall matherssearch'}
      ]
};

export { Track, Tracklist, initialState, searchData, log};