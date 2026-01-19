import { useState } from "react";

const Carousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const prev = () =>
    setIndex(index === 0 ? items.length - 1 : index - 1);
  const next = () =>
    setIndex(index === items.length - 1 ? 0 : index + 1);

  const movie = items[index];

  return (
    <div className="carousel">
      <button onClick={prev}>◀</button>
      <img
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt={movie.title}
      />
      <button onClick={next}>▶</button>
    </div>
  );
};

export default Carousel;
