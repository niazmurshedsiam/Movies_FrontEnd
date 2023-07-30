import Loading from "../../utils/Loading/Loading";
import IndividualMovies from "../IndividualMovies/IndividualMovies";
import { moviesDTO } from "../movies.module"
import css from "./MovieList.module.css"
export default function MovieList(props: MovieListProps) {
    if (!props.Movies) {
        return <Loading></Loading>
    }
    else if (props.Movies.length === 0) {
        return <>There are no movies to display...</>
    }
    else {
        return (
            <div className={css.div}>
                {
                    props.Movies.map(Movies => <IndividualMovies {...Movies} key={Movies.id}></IndividualMovies>)
                }
            </div>
        )
    }

}

interface MovieListProps {
    Movies?: moviesDTO[];
}