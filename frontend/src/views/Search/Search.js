import React, { useState } from 'react';
import { UseDataLayerValue } from '../../DataLayer'

function Search() {
  const [SearchInput, setSearchInput] = useState("");
  const [{ search }, dispatch] = UseDataLayerValue();

  return (
    <div className='search'>
      <div className='search-field'>
      <form>
        <input placeholder='Search for songs'
          type='input'
          onChange={event => setSearchInput(event.target.value)}></input>
        <button className='btn btn-primary' type={"submit"} onClick={() => { console.log("Search")}}>Search</button>
      </form>
      </div>
    </div>
  )
}

export default Search