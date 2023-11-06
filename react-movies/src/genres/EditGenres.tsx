import GenreForm from "./GenreForm";
import { urlGenres } from "../endpoints";
import { genreCreationDTO, genreDTO } from "./genres.model";
import EditEntity from "../utils/EditEntity";

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

            <EditEntity<genreCreationDTO, genreDTO>
                url={urlGenres} entityName="Genres"
                indexURL="/genres"
            >
                {(entity, edit) =>
                    <GenreForm model={entity}
                        onSubmit={async value => {
                            await edit(value);
                        }}
                    ></GenreForm>}
            </EditEntity>
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