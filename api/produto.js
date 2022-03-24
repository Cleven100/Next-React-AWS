import { BASE_PATH } from "../utils/constants";


export async function getLastProdutosApi(limit){
    try {
        const limitItems = `_limit=${limit}`
       const url = `${BASE_PATH}/produtos?${limit}`;       
 


    } catch (error) {
        console.log(error);
        return null;
    }
}