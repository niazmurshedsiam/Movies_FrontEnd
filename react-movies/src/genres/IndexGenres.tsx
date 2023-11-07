import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { genreDTO } from "./genres.model"
import { urlGenres } from "../endpoints"
import GenericList from "../utils/GenericList/GenericList";
import Button from "../utils/Button/Button";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import customConfirm from "../utils/customConfirm";
import IndexEntity from "../utils/IndexEntity";
export default function IndexGenres() {

    return (
        <>
            <IndexEntity>
                url={urlGenres} createUrl="genres/create" entityName="Genre"
            >
                {(genres, buttons) => <>
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
                                </td>
                                <td>
                                    {buttons(`genres/edit/${genre.id}`,genre.id)}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </>}

            </IndexEntity>

        </>
    )
}