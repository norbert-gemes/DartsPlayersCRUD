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

  addPlayer(player: PlayerModel): Observable<PlayerModel> {
    return this.http.post<PlayerModel>(this.url, player);
  }

  modifyPlayer(player: PlayerModel): Observable<PlayerModel> {
    return this.http.put<PlayerModel>(`${this.url}/${player.id}`, player);
  }

  deletePlayer(player: PlayerModel): Observable<PlayerModel> {
    return this.http.delete<PlayerModel>(`${this.url}/${player.id}`);
  }
}
