import Button from "../utils/Button/Button";
import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../form/TextField";
import { genreCreationDTO } from "./genres.model";
export default function GenreForm(props: genreFormProps) {
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required("This field is required").firstLetterUpperCase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name"></TextField>
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Change</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}


        </Formik>
    )
}

interface genreFormProps {
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}