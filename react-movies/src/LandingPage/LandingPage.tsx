import { useEffect, useState } from "react";
import { landingPageDTO } from "../movies/movies.module";
import MovieList from "../movies/MovieList/MovieList";

export default function LandingPage() {
    const [movies, setMovies] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
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
                ],
                upcomingRelease: [
                    {
                        id: 4,
                        title: "Heart of Stone",
                        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Heart_of_stone_poster.png/220px-Heart_of_stone_poster.png"
                    }
                ]
            })
        }, 1000);
        return () => clearTimeout(timerId);
    }, [])
    return (
        <>
            <h3>In Theaters</h3>
            <MovieList Movies={movies.inTheaters}></MovieList>
            <h3>Upcoming Release</h3>
            <MovieList Movies={movies.upcomingRelease}></MovieList>
        </>
    )
}