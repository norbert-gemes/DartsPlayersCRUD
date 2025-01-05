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
      active: false,
      walkOnSong: '',
    };
  }

  modify(player: PlayerModel) {
    this.modifiedPlayer = JSON.parse(JSON.stringify(player));
  }

  saveNew(player: PlayerModel) {
    this.dataService.addPlayer(player).subscribe({
      next: (data: PlayerModel) => {
        this.players.push(data);
        this.modifiedPlayer = undefined;
        this.newPlayer = undefined;
      },
      error: (err) => console.log(err),
    });
  }

  saveModified(player: PlayerModel) {
    this.dataService.modifyPlayer(player).subscribe({
      next: (data: PlayerModel) => {
        const index = this.players.findIndex((play) => play.id == player.id);
        this.players[index] = data;
        this.modifiedPlayer = undefined;
        this.newPlayer = undefined;
      },
      error: (err) => console.log(err),
    });
  }

  delete(player: PlayerModel) {
    this.dataService.deletePlayer(player).subscribe({
      next: (data: PlayerModel) => {
        const index = this.players.findIndex((play) => play.id == player.id);
        this.players.splice(index, 1);
      },
      error: (err) => console.log(err),
    });
  }

  CanceledForm() {
    this.modifiedPlayer = undefined;
    this.newPlayer = undefined;
  }
}
