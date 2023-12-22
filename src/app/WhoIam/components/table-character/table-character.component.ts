import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'component-table-character',
  templateUrl: './table-character.component.html',
  styleUrls: ['./table-character.component.css']
})
export class TableCharacterComponent {

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();
  @Output()
  public onStartGame: EventEmitter<string> = new EventEmitter();

  @Input()
  public playersList: Player[] = [{
    id:'',
    user: '',
    character: ''
  }]
  onDeletePlayerById(id?:string):void{
    if(!id) return ;
    this.onDeleteById.emit(id);
  }
  StartGame(){
    if(this.playersList.length === 0) return ;
    this.onStartGame.emit();
  }
}
