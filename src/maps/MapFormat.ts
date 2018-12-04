

export interface Map {
    details: Details;
    objects: Object[];
    spawns:  Array<Spawn[]>;
}

export interface Details {
    name: string;
}

export interface Object {
    name: string;
    area: Area;
    options?: any;
}

export interface Area {
    from: number[];
    to:   number[];
}

export interface Spawn {
    area: Area;
}
