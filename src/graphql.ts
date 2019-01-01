/* tslint:disable */
export class City {
    id: number;
    name: string;
    slug: string;
    type: string;
    nameWithType: string;
    districts?: District[];
}

export class District {
    id: number;
    name: string;
    slug: string;
    type: string;
    nameWithType: string;
}

export abstract class IQuery {
    abstract city(id: number): City | Promise<City>;

    abstract district(id: number): District | Promise<District>;

    abstract temp__(): boolean | Promise<boolean>;
}
