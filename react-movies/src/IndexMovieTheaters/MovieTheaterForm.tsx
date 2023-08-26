import { Form, Formik, FormikHandlers, FormikHelpers } from "formik";
import TextField from "../form/TextField";
import Button from "../utils/Button/Button";
import { Link } from "react-router-dom";
import { movieTheaterCreationDTO } from "./movieTheaters.model";
import * as Yup from 'yup';
export default function MovieTheaterForm(props: movieTheaterForm) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUpperCase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name"></TextField>
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Change</Button>
                    <Link className="btn btn-secondary" to="/movieTheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    )

}

interface movieTheaterForm {
    model: movieTheaterCreationDTO;
    onSubmit(value: movieTheaterCreationDTO, action: FormikHelpers<movieTheaterCreationDTO>): void;
}

