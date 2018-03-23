import { Injectable } from '@angular/core';
import { GameItem } from '../Beans/game-item';
import { Genere } from '../Beans/Generi';

@Injectable()
export class GameListService {

  constructor() { }


  generi: Genere[] = [
    new Genere("00", "Tutti"),
    new Genere("01", "Simulazione"),
    new Genere("02", "Sparatutto"),
    new Genere("03", "Avventura"),
    new Genere("04", "Rompicapo"),
    new Genere("05", "Azione"),
    new Genere("06", "MOBA"),
    new Genere("07", "RPG"),
    new Genere("08", "Picchiaduro")
  ];

  private items: GameItem[] = [
    new GameItem("01", "Fifa 18", "Gioco di Calcio", this.generi[1], 7, 50, 2018),
    new GameItem("02", "Call Of Duty", "FPS", this.generi[2], 6, 50, 2016),
    new GameItem("03", "Crash Bandicoot", "FP", this.generi[3], 9, 30, 1996),
    new GameItem("04", "Lara Croft:Tomb Rider", "Umano", this.generi[5], 8, 25, 1992),

  ];

  getList(): GameItem[] {
    return this.items;
  }

  findGame(nome: string): boolean{
    let found: boolean = false;
    for(let game of this.items)
    {
      if(game.nome == nome)
      {
        found = true;
        
      }
    }
    return found;
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

  clone(item: GameItem){
    return new GameItem(item.id, item.nome, item.descrizione, item.genere, item.rating, item.prezzo, item.annoUscita);
  }

  setGame(item: GameItem){
    for(let game of this.items)
    {
      if(game.id == item.id)
      {
        game.nome = item.nome;
        game.annoUscita = item.annoUscita;
        game.prezzo = item.prezzo; 
        game.descrizione = item.descrizione;
        game.genere = item.genere;
        game.rating = item.rating;
        alert("modificato");
      }
    }
  }

  getGeneri(): Genere[] {
    return this.generi;
  }

}
