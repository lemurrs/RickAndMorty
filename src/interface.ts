
export interface IAllCharacters {
    info: CharacterInfo;
    results: ICharacter[];
}

    export interface CharacterInfo {
        count: number;
        pages: number;
        next: string;
        prev?: any;
    }

    export interface CharacterOrigin {
        name: string;
        url: string;
    }

    export interface CharacterLocation {
        name: string;
        url: string;
    }

    export interface ICharacter {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: CharacterOrigin;
        location: CharacterLocation;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }

export interface IAllEpisodes {
    info: EpisodeInfo;
    results: IEpisode[];
}
export interface EpisodeInfo {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}

export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
}

    export interface LocationInfo {
        count: number;
        pages: number;
        next: string;
        prev?: any;
    }

    export interface ILocation {
        id: number;
        name: string;
        type: string;
        dimension: string;
        residents: string[];
        url: string;
        created: Date;
    }

    export interface IAllLocations {
        info: LocationInfo;
        results: ILocation[];
    }









