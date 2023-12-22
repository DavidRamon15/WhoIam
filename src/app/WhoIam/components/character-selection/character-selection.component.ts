import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'component-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent {

  @Output()
  public onNewPlayer: EventEmitter <Player> = new EventEmitter();

  public player :Player ={
    user:'',
    character:''
  }

  emitCharacter():void{

    if(this.player.user.length === 0) return;
    this.onNewPlayer.emit( this.player );
    this.player ={ user:'', character:'' }

  }

}
