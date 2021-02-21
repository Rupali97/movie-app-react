import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {

  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("avengers");

  useEffect(() => {
    const callFetch = async () => {
      const res = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`);
      const resjson = await res.json();
      console.log('test',resjson);
      if(resjson.Search){
        setMovies(resjson.Search)
      }
    }
    callFetch();
  }, [searchValue])

  useEffect(() => {
		const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites')!);

		if (movieFavourites) {
			setFavMovies(movieFavourites);
		}
	}, []);

  const addFavouriteMovie = (movie:any) => {
    const newList = [...favMovies, movie]
    setFavMovies(newList)
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(newList));
    console.log('movie', movie)
  }

  const removeFavouriteMovie = (movie: any) => {
    const newList = favMovies.filter((item:any) => item.imdbID !== movie.imdbID)
    setFavMovies(newList);
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(newList));
  }

  return (
    <div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favMovies}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
  );
}

export default App;
