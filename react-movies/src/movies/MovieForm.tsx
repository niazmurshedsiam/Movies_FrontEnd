import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { movieCreationDTO } from "./movies.module";
import * as Yup from 'yup';
import TextField from "../form/TextField";
import Button from "../utils/Button/Button";
import { Link } from "react-router-dom";
import ImageField from "../form/ImageField";
import DateField from "../form/DateField";
import CheckBoxField from "../form/CheckBoxField";
export default function MovieForm(props: movieFormProps) {
    return (
        <>
            <Formik
                initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    title: Yup.string().required('This field is required').firstLetterUpperCase()
                })}
            >
                {(formikProps) => (
                    <Form>

                        <TextField displayName="Title" field="title" />
                        <CheckBoxField displayName="In Theaters" field="inTheaters" />
                        <TextField displayName="Trailer" field="trailer" />
                        <DateField displayName="Release Date" field="releaseDate" />
                        <ImageField displayName="Poster" field="poster"
                            imageURL={props.model.posterURL}
                        />
                        <Button disabled={formikProps.isSubmitting}
                            type='submit'>Save Changes</Button>
                        <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                    </Form>
                )}
            </Formik>
        </>
    )

}

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
}