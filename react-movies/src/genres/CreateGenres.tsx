import { useHistory } from "react-router";
import Button from "../utils/Button/Button";

export default function CreateGenres() {
    const history = useHistory();
    return (
        <>
            <h3>Create Genres</h3>
            <Button onClick={() => { history.push("/genres") }}>Save Change</Button>
        </>
    )
}