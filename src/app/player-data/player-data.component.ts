import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayerModel } from '../models/PlayerModel';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrl: './player-data.component.css',
})
export class PlayerDataComponent {
  @Input() playerData: PlayerModel | undefined = undefined;
  @Output() saved = new EventEmitter<PlayerModel>();
  @Output() canceled = new EventEmitter();

  getData(event: any): string {
    return event.target.value;
  }

  cancel() {
    this.playerData = undefined;
    this.canceled.emit();
  }

  save() {
    this.saved.emit(this.playerData);
  }
}
