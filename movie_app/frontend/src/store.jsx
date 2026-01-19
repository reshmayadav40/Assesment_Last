import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";
import selectedMovieReducer from "./reducers/selectMovie";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    selectedMovie: selectedMovieReducer,
  },
});

export default store;


//install @reduxjs/toolkit and react-redux if not installed