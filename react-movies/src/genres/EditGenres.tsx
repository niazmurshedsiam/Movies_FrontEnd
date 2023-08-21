import { useParams } from "react-router"
import GenreForm from "./GenreForm";

export default function EditGenres() {
    const { id }: any = useParams();
    return (
        <>
            <h3>Edit Genres</h3>
            <GenreForm model={{ name: 'Action' }}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 1))
                    console.log(id);
                    console.log(value);
                }}
            ></GenreForm>
        </>
    )
}