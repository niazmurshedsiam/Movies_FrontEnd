import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { movieCreationDTO, moviesDTO } from "./movies.module";
import * as Yup from 'yup';
import TextField from "../form/TextField";
import Button from "../utils/Button/Button";
import { Link } from "react-router-dom";
import ImageField from "../form/ImageField";
import DateField from "../form/DateField";
import CheckBoxField from "../form/CheckBoxField";
import MultipleSelector, { multipleSelectorModel } from "../form/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../IndexMovieTheaters/movieTheaters.model";
export default function MovieForm(props: movieFormProps) {

    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(mapToModel(props.nonSelectedMovieTheaters));


    function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
        return items.map(item => {
            return { key: item.id, value: item.name }
        })
    }

    return (
        <>
            <Formik
                initialValues={props.model}
                onSubmit={(values, actions) => {
                    values.genresIds = selectedGenres.map(item => item.key)
                    values.movieTheatersIds = selectedMovieTheaters.map(item => item.key)
                    props.onSubmit(values, actions)
                }}
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
                        <MultipleSelector
                            displayName="Genres"
                            nonSelected={nonSelectedGenres}
                            selected={selectedGenres}
                            onChange={(selected, nonSelected) => {
                                setSelectedGenres(selected);
                                setNonSelectedGenres(nonSelected);
                            }}
                        ></MultipleSelector>

                        <MultipleSelector
                            displayName="Movie Theaters"
                            nonSelected={nonSelectedMovieTheaters}
                            selected={selectedMovieTheaters}
                            onChange={(selected, nonSelected) => {
                                setSelectedMovieTheaters(selected);
                                setNonSelectedMovieTheaters(nonSelected);
                            }}
                        ></MultipleSelector>
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
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
}