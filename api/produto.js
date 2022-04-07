import { result } from "lodash";
import { BASE_PATH } from "../utils/constants";

export async function getLastProdutosApi(limit) {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItem = "_sort=createdAt:desc";
    const url = `${BASE_PATH}/produtos?${limitItems}&${sortItem}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}



export async function getProdutosPlatformApi(platform, limit, start) {
 
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = `_sort=createdAt:desc`;
    const startItems = `_start=${start}`;
    const url = `${BASE_PATH}/produtos?platform.url=${platform}&${limitItems}&${sortItems}&${startItems}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
  }


}


export async function getTotalProdutosPlatformApi(platform) {
  try {
     const url = `${BASE_PATH}/produtos/count?platform.url=${platform}`;
     const response = await fetch(url);
     const result = await response.json();
     return result;
     
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getProdutoByUrlApi(path) {

  try {
    const url = `${BASE_PATH}/produtos?url=${path}`;
    const response = await fetch(url);
    const result = await response.json();
    return result[0];
   

  } catch (error) {
    console.log(error);
    return null;
  }




}