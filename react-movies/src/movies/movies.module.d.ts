export interface moviesDTO {
    id: number,
    title: string,
    poster: string
}

export interface landingPageDTO {
    inTheaters?: moviesDTO[];
    upcomingRelease?: moviesDTO[];
}