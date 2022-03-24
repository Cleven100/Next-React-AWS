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
