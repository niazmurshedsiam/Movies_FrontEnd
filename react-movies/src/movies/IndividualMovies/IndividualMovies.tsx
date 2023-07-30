import { moviesDTO } from "../movies.module";
import css from "../IndividualMovies.module.css"
export default function IndividualMovies(props: moviesDTO) {
    const buildLink = () => `/movies/${props.id}`;
    return (
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.poster} alt="Poster" />
            </a>
            <p>
                <a href={buildLink()}>{props.title}</a>
            </p>
        </div>
    );
}