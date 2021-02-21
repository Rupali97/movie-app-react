import React from 'react'

interface Iprops{
  searchValue: string,
  setSearchValue: (event:any) => void,
}

function SearchBox(props: Iprops) {
  return (
    <div className='col col-sm-4'>
    <input
      className='form-control'
      value={props.searchValue}
      onChange={(event) => props.setSearchValue(event.target.value)}
      placeholder='Type to search...' />
  </div>
  )
}

export default SearchBox
