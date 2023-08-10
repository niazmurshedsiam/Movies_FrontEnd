import { useHistory } from "react-router";
import Button from "../utils/Button/Button";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../form/TextField";
export default function CreateGenres() {
    const history = useHistory();
    return (
        <>
            <Formik initialValues={{
                name: ""
            }}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(value);
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("This field is required").firstLetterUpperCase()
                })}
            >
                {(formikProps) => (
                    <Form>
                        <TextField field="name" displayField="Name"></TextField>
                        <Button disabled={formikProps.isSubmitting} type="submit">Save Change</Button>
                        <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                    </Form>
                )}


            </Formik>

        </>
    )
}