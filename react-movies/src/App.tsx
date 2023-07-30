import React from 'react';
import logo from './logo.svg';
import './App.css';
import { moviesDTO } from './movies/movies.module';
import MovieList from './movies/MovieList/MovieList';
import IndividualMovies from './movies/IndividualMovies/IndividualMovies';


function App() {
  const InTheaters: moviesDTO[] = [
    {
      id: 1,
      title: "Spider Man No Way Home",
      poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
    },
    {
      id: 2,
      title: "Luca",
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Luca_%282021_film%29.png/220px-Luca_%282021_film%29.png"
    },
    {
      id: 3,
      title: "Soul",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg"
    }
  ];
  const test: moviesDTO =
  {
    id: 5,
    title: "Heart of Stone",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Heart_of_stone_poster.png/220px-Heart_of_stone_poster.png"
  }

  const upcomingRelease: moviesDTO[] = [
    {
      id: 4,
      title: "Heart of Stone",
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Heart_of_stone_poster.png/220px-Heart_of_stone_poster.png"
    }
  ]
  return (
    <>
      <IndividualMovies {...test} ></IndividualMovies>
      <h3>In Theaters</h3>
      <MovieList Movies={InTheaters}></MovieList>
      <h3>Upcoming Release</h3>
      <MovieList Movies={upcomingRelease}></MovieList>
    </>
  );
}

export default App;
