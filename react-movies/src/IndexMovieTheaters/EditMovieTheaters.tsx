import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheaters() {
    return (
        <>
            <h3>Edit Movie Theaters</h3>
            <MovieTheaterForm model={{ name: 'Siam' }}
                onSubmit={value => console.log(value)}
            ></MovieTheaterForm>
        </>
    )
}