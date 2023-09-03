// import { useHistory } from "react-router";
import axios from "axios";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";
import { urlGenres } from "../endpoints";
import { useHistory } from "react-router";
export default function CreateGenres() {
    const history = useHistory();
    async function create(genre: genreCreationDTO) {
        try {
            await axios.post(urlGenres, genre);
            history.push('/genres');
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>

            <h3>Create Genre</h3>
            <GenreForm model={{ name: '' }}
                onSubmit={async value => {
                    await create(value);
                }}
            ></GenreForm>

        </>
    )
}