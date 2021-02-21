import React from 'react'

interface Movies{
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
}

interface Iprops{
  movies: Array<Movies>,
  handleFavouritesClick: (event:any) => void,
  favouriteComponent?:any,
}

function MovieList(props: Iprops) {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
    {props.movies.map((movie, index) => (
      <div className='image-container d-flex justify-content-start m-3' key={index}>
        <img src={movie.Poster} alt='movie'></img>
        <div
          onClick={() => props.handleFavouritesClick(movie)}
          className='overlay d-flex align-items-center justify-content-center'
        >
          <FavouriteComponent />
        </div>
      </div>
    ))}
  </>
  )
}

export default MovieList
