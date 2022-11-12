
export interface IAllCharacters {
    info: IInfo;
    results: ICharacter[];
}

    export interface IInfo {
        count: number;
        pages: number;
        next: string;
        prev?: any;
    }

    export interface IOrigin {
        name: string;
        url: string;
    }

    export interface ILocation {
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
        origin: IOrigin;
        location: ILocation;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }


export interface IAllEpisodes {
    info: EInfo;
    results: EEpisode[];
}
export interface EInfo {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}

export interface EEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
}



    export interface Info {
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
        info: Info;
        results: ILocation[];
    }










