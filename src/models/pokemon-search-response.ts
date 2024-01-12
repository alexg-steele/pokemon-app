
import { PokemonListItem } from "./pokemon-list-item"


export interface PokemonSearchResponse {
     pageNumber: number
     pageSize :  number ,
     totalPages : number,
     data : PokemonListItem[],
}