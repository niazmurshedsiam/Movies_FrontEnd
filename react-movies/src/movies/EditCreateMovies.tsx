import MovieForm from "./MovieForm";

export default function EditMovies() {
    return (
        <>
            <h3>Edit Movies</h3>
            <MovieForm model={{
                title: 'Tom', inTheaters: true, trailer: 'url',
                releaseDate: new Date('2023-08-27T00:00:00')
            }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}