import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./components/Navbar";
import "./App.css";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";


import { initialize } from "./reducers/movieReducer";
import { clearSelectedMovie } from "./reducers/selectMovie";


const API = "https://api.themoviedb.org/3/movie/popular";
const KEY = "e366d974f73ae203397850eadc7bce1f";

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const selectedMovie = useSelector((state) => state.selectedMovie);

  useEffect(() => {
    axios.get(`${API}?api_key=${KEY}`).then((res) => {
      dispatch(initialize(res.data.results));
    });
  }, []);

  if (selectedMovie) {
    return (
      
      <MovieDetails
        movieId={selectedMovie}
        onClose={() => dispatch(clearSelectedMovie())}
      />
    );
  }

  return (
    <>
    <Navbar />
      <Header />
      <Carousel items={movies.slice(0, 8)} />

      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default App;




// npm install axios redux react-redux redux-thunk