import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/players.service';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isGameStart:Boolean = false;
  constructor(private playerService: PlayerService ,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  get players(): Player[]{
    return [...this.playerService.players];
  }

  onNewPlayer(player:Player){
    this.playerService.addPlayer(player);
  }
  onDeletePlayerById(id:string){
    this.playerService.onDeletePlayerById(id);
  }
  onStartGame():void {
    this.isGameStart = true;
    this.playerService.onMessPlayers();
  }

  onOtherGamer():void{
    this.isGameStart = false;
    this.playerService.onResetPlayers();
  }

}
