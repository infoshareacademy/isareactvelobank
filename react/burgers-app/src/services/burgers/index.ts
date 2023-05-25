import { BurgerResponse, Burger, BurgerData } from "../../common/types";

export const getBurgers = async (): Promise<Burger[]> => {
    const r = await fetch('https://rest-api-b6410.firebaseio.com/burgers.json');
    const data: BurgerResponse = await r.json();
    const formattedData = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    return formattedData;
}

export const getBurger = async (id: string): Promise<BurgerData> => {
    const r = await fetch(`https://rest-api-b6410.firebaseio.com/burgers/${id}.json`);
    const data = await r.json()
    return data;
}