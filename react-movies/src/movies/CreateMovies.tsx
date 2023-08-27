import MovieForm from "./MovieForm";

export default function CreateMovies() {
    return (
        <>
            <h3>Create Movies</h3>
            <MovieForm model={{ title: '', inTheaters: false, trailer: '' }}
                onSubmit={values => console.log(values)}
            />

        </>
    )
}