import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../Beans/game-item';
import { Router } from '@angular/router';
import {GameListService} from '../../Services/game-list.service'
import { Genere } from '../../Beans/Generi';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  generi: Genere[];
  filtro: string = "00";
  items:GameItem[];

  constructor(private route:Router, private gameListService:GameListService) {
    this.generi = gameListService.getGeneri();
   }

  ngOnInit() {
    this.items=this.gameListService.getList();
  }

  selectedItem(item:GameItem){
    this.route.navigate(['/dettaglio/'+item.id])
  }

}
