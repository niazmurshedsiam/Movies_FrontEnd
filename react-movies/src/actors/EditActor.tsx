import ActorForm from "./ActorForm";

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{ name: 'Tom Holland', dateOfBirth: new Date('2023-08-23T00:00:00') }}
                onSubmit={value => console.log(value)}
            ></ActorForm>
        </>
    )
}