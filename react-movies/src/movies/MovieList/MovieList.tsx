import IndividualMovies from "../IndividualMovies/IndividualMovies";
import { moviesDTO } from "../movies.module"
import css from "./MovieList.module.css"
export default function MovieList(props: MovieListProps) {
    return (
        <div className={css.div}>
            {
                props.Movies.map(Movies => <IndividualMovies {...Movies} key={Movies.id}></IndividualMovies>)
            }
        </div>
    )
}

interface MovieListProps {
    Movies: moviesDTO[];
}