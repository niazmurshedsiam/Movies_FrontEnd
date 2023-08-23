import ActorForm from "./ActorForm";

export default function CreateActor() {
    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm model={{ name: '', dateOfBirth: new Date('2023-08-23T00:00:00') }}
                onSubmit={value => console.log(value)}
            ></ActorForm>
        </>
    )
}