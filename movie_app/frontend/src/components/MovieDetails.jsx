import axios from "axios";
import { useEffect, useState } from "react";

const API = "https://api.themoviedb.org/3";
const KEY = "e366d974f73ae203397850eadc7bce1f";

const MovieDetails = ({ movieId, onClose }) => {
  const [data, setData] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [details, credits] = await Promise.all([
        axios.get(`${API}/movie/${movieId}?api_key=${KEY}`),
        axios.get(`${API}/movie/${movieId}/credits?api_key=${KEY}`),
      ]);

      setData(details.data);
      setCast(credits.data.cast.slice(0, 6));
    };

    fetchData();
  }, [movieId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="modal">
      <button onClick={onClose}>❌</button>

      <h2>{data.title}</h2>
      <p>⭐ {data.vote_average}</p>
      <p>{data.overview}</p>

      <h3>Cast</h3>
      <ul>
        {cast.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
