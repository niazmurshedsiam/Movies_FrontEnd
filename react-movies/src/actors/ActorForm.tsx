import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../form/TextField";
import Button from "../utils/Button/Button";
import { Link } from "react-router-dom";
import { actorCreationDTO } from "./actors.model";
import * as Yup from 'yup';

export default function ActorForm(props: actorFormProps) {
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
                    <TextField displayField="Name" field="name"></TextField>
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <a href="/actor" className="btn btn-secondary">Cancel</a>
                </Form>
            )}
        </Formik>
    )
}

interface actorFormProps {
    model: actorCreationDTO;
    onSubmit(value: actorCreationDTO, action: FormikHelpers<actorCreationDTO>): void;
}