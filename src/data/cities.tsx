import citiesData from "./cities.json";

export interface City {
    name: string;
    continent: string;
    active: boolean;
    country: string;
    description: string;
    image: string;
    coords: {
        lat: number;
        lng: number;
    }
}

export const cities: City[] = citiesData;
