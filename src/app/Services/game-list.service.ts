import { Injectable } from '@angular/core';
import { GameItem } from '../Beans/game-item';

@Injectable()
export class GameListService {

  constructor() { }

  private items: GameItem[] = [
    new GameItem("01", "Fifa 18", "Gioco di Calcio", "Sport", 7, 50, 2018),
    new GameItem("02", "Call Of Duty", "FPS", "Guerra", 6, 50, 2016),
    new GameItem("03", "Crash Bandicoot", "FP", "Avventura", 9, 30, 1996),
    new GameItem("04", "Lara Croft:Tomb Rider", "Umano", "Avventura", 8, 25, 1992),

  ];

  getList(): GameItem[] {
    return this.items;
  }

  getElementById(id: String): GameItem {
    for (let item of this.items) {
      if (item.id == id) {
        return item;
      }
    }
  }

  getElementByName(name: String): GameItem {
    for (let item of this.items) {
      if (item.nome == name) {
        return item;
      }
    }
  }

  editGame(editGame:GameItem){
    for (let item of this.items) {
      if (editGame.id == item.id) {
          editGame=item;
      }
    }
  }

}