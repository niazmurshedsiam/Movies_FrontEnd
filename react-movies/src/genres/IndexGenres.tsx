import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { genreDTO } from "./genres.model"
import { urlGenres } from "../endpoints"
import GenericList from "../utils/GenericList/GenericList";
import Button from "../utils/Button/Button";
export default function IndexGenres() {
    const [genres, setGenre] = useState<genreDTO[]>();

    useEffect(() => {
        axios.get(urlGenres)
            .then((response: AxiosResponse<genreDTO[]>) => {
                setGenre(response.data);
            })
    }, [])
    return (
        <>
            <h3>Genres</h3>
            <a className="btn btn-primary" href="/genres/create">Create Genres</a>
            <GenericList list={genres}>
                <table className="table table-striped">
                    <thead>
                        <th></th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {genres?.map(genre =>
                            <tr key={genre.id}>
                                <td>
                                    <a className="btn btn-success"
                                        href={`/genres/${genre.id}`}>Edit</a>
                                    <Button className="btn btn-danger">Delete</Button>
                                </td>
                                <td>
                                    {genre.name}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </GenericList>
        </>
    )
}