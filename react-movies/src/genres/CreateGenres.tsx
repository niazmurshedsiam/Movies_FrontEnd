import { useHistory } from "react-router";
import Button from "../utils/Button/Button";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

export default function CreateGenres() {
    const history = useHistory();
    return (
        <>
            <Formik initialValues={{
                name: ""
            }}
                onSubmit={value => {
                    console.log(value);
                }}
            >
                <Form>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <Field name="name" className="form-control"></Field>
                    </div>
                    <Button type="submit">Save Change</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>

            </Formik>

        </>
    )
}