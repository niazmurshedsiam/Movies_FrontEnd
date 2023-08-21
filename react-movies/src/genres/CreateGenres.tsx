// import { useHistory } from "react-router";
import GenreForm from "./GenreForm";
export default function CreateGenres() {
    // const history = useHistory();
    return (
        <>

            <h3>Create Genre</h3>
            <GenreForm model={{ name: '' }}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 1))
                    console.log(value);
                }}
            ></GenreForm>

        </>
    )
}