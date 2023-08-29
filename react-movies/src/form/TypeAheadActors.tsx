import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";


export default function TypeAheadActors(props: typeAheadActorsProps) {
    const actors: actorMovieDTO[] = [{
        id: 1, name: 'Felipe', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
        id: 2, name: 'Fernando', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg'
    },
    {
        id: 3, name: 'Jessica', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/220px-Meryl_Streep_December_2018.jpg'
    }]
    return (
        <div className="mb-3">
            <label htmlFor="">{props.displayName}</label>
            <Typeahead id="typeahead"
                onChange={actors => {

                    console.log(actors);
                }}
                options={actors}
                // labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
                flip={true}
            ></Typeahead>
        </div>
    )
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
}