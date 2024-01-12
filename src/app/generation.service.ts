import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {

  constructor(private http: HttpClient) { }

  getGenerations(){
    return this.http.get<String[]>(`${environment.apiUrl}/Generations`);
  }

}
