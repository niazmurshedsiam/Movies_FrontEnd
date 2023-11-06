import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlGenres } from "../endpoints";
import { genreCreationDTO } from "../genres/genres.model";
import DisplayErrors from "./DisplayErrors/DisplayErrors";
import GenreForm from "../genres/GenreForm";
import Loading from "./Loading/Loading";
import { ReactElement } from "react-markdown/lib/react-markdown";
export default function EditEntity<TCreation, TRead>(props: editEntityProps<TCreation, TRead>) {
    const { id }: any = useParams();
    const [entity, setEntity] = useState<TCreation>();
    const [genre, setGenre] = useState<genreCreationDTO>();
    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();
    useEffect(() => {
        axios.get(`${props.url}/${id}`)
            .then((response: AxiosResponse<TRead>) => {
                setEntity(props.transform(response.data));
            })
    }, [id]);
    async function edit(EditEntity: TCreation) {
        try {
            await axios.put(`${props.url}/${id}`, EditEntity)
            history.push(props.indexURL);
        }
        catch (e) {
            if (e)
                setErrors(errors);
        }

    }

    return (
        <>
            <h3>Edit {props.entityName}</h3>
            <DisplayErrors errors={errors}></DisplayErrors>
            {entity ? props.children(entity, edit) : <Loading></Loading>}
        </>
    )
}

interface editEntityProps<TCreation, TRead> {
    url: string;
    entityName: string;
    indexURL: string;
    transform(entity: TRead): TCreation;
    children(entity: TCreation, edit: (entity: TCreation) => void): ReactElement;
}

EditEntity.defaultProps = {
    transform: (entity: any) => entity
}