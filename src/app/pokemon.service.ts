import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../environments/environment.development';
import { PokemonListItem } from '../models/pokemon-list-item';
import { PokemonSearchResponse } from '../models/pokemon-search-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { 
    
  }

  getMany(name?: string, generation?: string, version?:string, type?:string, page?:number){
    let params: HttpParams = new HttpParams()
    if (name) params = params.append("name",name);
    if (generation) params = params.append("generation",generation.toLowerCase());
    if (version) params = params.append("version",version);
    if (type) params = params.append("type",type);
    if (page) params = params.append("page",page);
    
    return this.http.get<PokemonSearchResponse>(`${environment.apiUrl}/Pokemon`, {params} )

  }

  getPokemonById(id?: number) {
    return this.http.get<PokemonListItem>(`${environment.apiUrl}/Pokemon/${id}`)
  }
}
