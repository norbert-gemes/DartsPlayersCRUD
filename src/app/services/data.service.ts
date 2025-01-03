import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerModel } from '../models/PlayerModel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:3000/darstplayers';

  constructor(private http: HttpClient) {}

  getPlayer(): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(this.url);
  }
}
