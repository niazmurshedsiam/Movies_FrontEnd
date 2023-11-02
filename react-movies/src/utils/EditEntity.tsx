import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlGenres } from "../endpoints";
import { genreCreationDTO } from "../genres/genres.model";
import DisplayErrors from "./DisplayErrors/DisplayErrors";
import GenreForm from "../genres/GenreForm";
import Loading from "./Loading/Loading";
export default function EditEntity<TCreation>(props: editEntityProps) {
    const { id }: any = useParams();
    const [entity, setEntity] = useState<TCreation>();
    const [genre, setGenre] = useState<genreCreationDTO>();
    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();
    useEffect(() => {
        axios.get(`${urlGenres}/${id}`)
            .then((response: AxiosResponse<genreCreationDTO>) => {
                setGenre(response.data);
            })
    }, [id]);
    async function edit(genreToEdit: genreCreationDTO) {
        try {
            await axios.put(`${urlGenres}/${id}`, genreToEdit)
            history.push('/genres');
        }
        catch (e) {
            if (e)
                setErrors(errors);
        }

    }

    return (
        <>
            <h3>Edit Genres</h3>
            <DisplayErrors errors={errors}></DisplayErrors>
            {genre ? <GenreForm model={genre}
                onSubmit={async value => {
                    await edit(value);
                }}
            ></GenreForm> : <Loading></Loading>}
        </>
    )
}

interface editEntityProps { }