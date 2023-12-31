import { Field, ErrorMessage } from "formik";
export default function TextField(props: TextFieldProps) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor={props.field}>{props.displayName}</label>
                <Field name={props.field} className="form-control"></Field>
                <ErrorMessage name={props.field}>{msg => <div className="text-danger">{msg}</div>}</ErrorMessage>
            </div>
        </>
    )
}
interface TextFieldProps {
    field: string
    displayName: string
}

