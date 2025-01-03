import { Component } from '@angular/core';
import { PlayerModel } from './models/PlayerModel';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DartsPlayers';
  players: PlayerModel[] = [];
  modifiedPlayer: PlayerModel | undefined;
  newPlayer: PlayerModel | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPlayer().subscribe({
      next: (data: PlayerModel[]) => {
        this.players = data;
      },
      error: (err) => console.log(err),
    });
  }

  new() {
    this.newPlayer = {
      id: undefined,
      name: '',
      nationality: '',
      wchamptitles: 0,
      pdc_titles: 0,
      nickname: '',
      hometown: '',
      age: 0,
      active: true,
      walkOnSong: '',
    };
  }

  modify(player: PlayerModel) {
    this.modifiedPlayer = JSON.parse(JSON.stringify(player));
  }

  delete(player: PlayerModel) {}
}
