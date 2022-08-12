import React, { useState } from 'react';
import { UseDataLayerValue } from '../../DataLayer'

function Search({ searchResult, setSearchResult }) {
  const [{ token, search }, dispatch] = UseDataLayerValue();

  console.log("TOKEN", token);
  console.log("SEARCH", search)

  return (
    <div className='search'>
      <div className='search-field'>
      <form onSubmit={search} >
        <input
         type="text"
         placeholder='Search a song'
         onChange={e => setSearchResult(e.target.value)}
         ></input>
        <button className='btn btn-primary' type={"submit"}>Search</button>
      </form>
      </div>
    </div>
  )
}

export default Search