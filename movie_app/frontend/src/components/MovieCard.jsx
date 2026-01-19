import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../reducers/selectMovie";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
//  const [favourate, setFavourate] = useState(false);
  const img = movie.poster_path || movie.backdrop_path;

  return (
    <article
      className="movie-card"
      onClick={() => dispatch(setSelectedMovie(movie.id))}
    >
      <img
        src={`https://image.tmdb.org/t/p/w342${img}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview.slice(0, 120)}...</p>
      <button>View Details</button>
      <button 
      
      >Add in Favourate</button>  
    </article>
  );
};

export default MovieCard;


// git add . 
// git commit -m "Implemented MovieCard component with Redux integration"
// git push origin main
