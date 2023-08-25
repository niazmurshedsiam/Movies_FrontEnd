import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../form/TextField";
import Button from "../utils/Button/Button";
import { Link } from "react-router-dom";
import { actorCreationDTO } from "./actors.model";
import * as Yup from 'yup';
import DateField from "../form/DateField";
import ImageField from "../form/ImageField";
import MarkdownField from "../form/MarkdownField";


export default function ActorForm(props: actorFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUpperCase(),
                dateOfBirth: Yup.date().nullable().required('This field is required')
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name"></TextField>
                    <DateField displayName="Date Of Birth" field="dateOfBirth"></DateField>
                    <ImageField displayName="Picture" field="picture" imageURL={props.model.pictureURL} />
                    <MarkdownField displayName="Biography" field="biography"></MarkdownField>
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link to="/actor" className="btn btn-secondary">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface actorFormProps {
    model: actorCreationDTO;
    onSubmit(value: actorCreationDTO, action: FormikHelpers<actorCreationDTO>): void;
}