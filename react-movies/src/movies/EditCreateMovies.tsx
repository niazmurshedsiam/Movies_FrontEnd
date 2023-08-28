import { movieTheaterDTO } from "../IndexMovieTheaters/movieTheaters.model";
import { genreDTO } from "../genres/genres.model";
import MovieForm from "./MovieForm";

export default function EditMovies() {
    const nonSelectedGenres: genreDTO[] = [{ id: 2, name: 'Drama' }]
    const selectedGenres: genreDTO[] = [{ id: 1, name: 'Comedy' }]

    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: 'Sambil' }]
    const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: 'Sambil' }]

    return (
        <>
            <h3>Edit Movies</h3>
            <MovieForm model={{
                title: 'Tom', inTheaters: true, trailer: 'url',
                releaseDate: new Date('2023-08-27T00:00:00')
            }}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={selectedMovieTheaters}
            />
        </>
    )
}