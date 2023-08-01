import { Link } from "react-router-dom";

export default function IndexGenres() {
    return (
        <>
            <h3>Genres</h3>
            <a className="btn btn-primary" href="/genres/create">Create Genres</a>
        </>
    )
}