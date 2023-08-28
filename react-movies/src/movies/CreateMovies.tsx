import { movieTheaterDTO } from "../IndexMovieTheaters/movieTheaters.model";
import { genreDTO } from "../genres/genres.model";
import MovieForm from "./MovieForm";

export default function CreateMovies() {

    const nonSelectedGenres: genreDTO[] = [{ id: 1, name: 'Comedy' }, { id: 2, name: 'Drama' }]

    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: 'Sambil' }, { id: 2, name: 'Agora' }]

    // const selectedGenres: genreDTO[] = [{ id: 1, name: 'Comedy' }, { id: 2, name: 'Drama' }]
    return (
        <>
            <h3>Create Movies</h3>
            <MovieForm model={{ title: '', inTheaters: false, trailer: '' }}
                onSubmit={values => console.log(values)}
                selectedGenres={[]}
                nonSelectedGenres={nonSelectedGenres}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={[]}
            />

        </>
    )
}