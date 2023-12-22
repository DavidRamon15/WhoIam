import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Player } from '../interfaces/player.interface';

@Injectable({providedIn: 'root'})
export class PlayerService {
  public players: Player[] = [];

  constructor() {
    const storedPlayers = localStorage.getItem('players');
    this.players = storedPlayers ? JSON.parse(storedPlayers) : [];
   }

  addPlayer(player:Player):void{
    const newPlayer: Player = { id:uuid() , ...player };
    this.players.push(newPlayer);
    localStorage.setItem('players', JSON.stringify(this.players));
  }
  onDeletePlayerById(id:string){
    this.players = this.players.filter(player => player.id !== id);
  }
  onMessPlayers():void{
    this.players = this.players.sort( () => Math.random() - 0.5);
  }
  onResetPlayers():void{
    this.players = [];
    localStorage.removeItem('players');
  }
}
