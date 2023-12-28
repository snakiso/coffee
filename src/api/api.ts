import axios from "axios";

const instance = axios.create({
    baseURL: 'https://back-to-coffee.vercel.app/',

})


export class API {
    static getCoffee() {
        return instance.get<ResType[]>('coffee')
    }

    static getTea() {
        return instance.get<ResType[]>('tea')
    }

    static getDeserts() {
        return instance.get<ResType[]>('dessert')
    }
}


export type ResType = {
    id: string;
    name: string;
    description: string;
    size: SizeType[];
    additives: AdditivesType[];
    image: string;
}

export  type SizeType = {
    id: Sizes
    size: "S" | 'M' | 'L';
    volume: string;
    price: number;
}
export  type AdditivesType = {
    id: Additives;
    name: string;
    price: number;
}

export enum Additives {
    'first',
    'second',
    'third'
}

export enum Sizes {
    'S' = 0,
    'M' = 1,
    'L' = 2
}



