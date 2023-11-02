import { useHistory, useParams } from "react-router"
import GenreForm from "./GenreForm";
import axios, { AxiosResponse } from "axios";
import { urlGenres } from "../endpoints";
import { genreCreationDTO } from "./genres.model";
import { useEffect, useState } from "react";
import Loading from "../utils/Loading/Loading";
import DisplayErrors from "../utils/DisplayErrors/DisplayErrors";

export default function EditGenres() {
    // const { id }: any = useParams();
    // const [genre, setGenre] = useState<genreCreationDTO>();
    // const [errors, setErrors] = useState<string[]>([]);
    // const history = useHistory();
    // useEffect(() => {
    //     axios.get(`${urlGenres}/${id}`)
    //         .then((response: AxiosResponse<genreCreationDTO>) => {
    //             setGenre(response.data);
    //         })
    // }, [id]);
    // async function edit(genreToEdit: genreCreationDTO) {
    //     try {
    //         await axios.put(`${urlGenres}/${id}`, genreToEdit)
    //         history.push('/genres');
    //     }
    //     catch (e) {
    //         if (e)
    //             setErrors(errors);
    //     }

    // }


    return (
        <>
            {/* <h3>Edit Genres</h3>
            <DisplayErrors errors={errors}></DisplayErrors>
            {genre ? <GenreForm model={genre}
                onSubmit={async value => {
                    await edit(value);
                }}
            ></GenreForm> : <Loading></Loading>} */}
        </>
    )
}