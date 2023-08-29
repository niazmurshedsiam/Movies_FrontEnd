export interface actorCreationDTO {
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: sting;
}

export interface actorMovieDTO {
    id: number;
    name: string;
    character: string;
    picture: string;
}