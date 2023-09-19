import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { genreDTO } from "./genres.model"
import { urlGenres } from "../endpoints"
import GenericList from "../utils/GenericList/GenericList";
import Button from "../utils/Button/Button";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
export default function IndexGenres() {
    const [genres, setGenres] = useState<genreDTO[]>();
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    useEffect(() => {
        axios.get(urlGenres, {
            params: { page, recordsPerPage }
        })
            .then((response: AxiosResponse<genreDTO[]>) => {
                const totalAmountOfRecords =
                    parseInt(response.headers['totalAmountOfRecords'], 10);
                setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
                setGenres(response.data);
            })
    }, [page, recordsPerPage])
    return (
        <>
            <h3>Genres</h3>
            <a className="btn btn-primary" href="/genres/create">Create Genres</a>
            <RecordsPerPageSelect onChange={amountOfRecords => {
                setPage(1);
                setRecordsPerPage(amountOfRecords);
            }}></RecordsPerPageSelect>
            <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChanged={newPage => setPage(newPage)}></Pagination>
            <GenericList list={genres}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
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