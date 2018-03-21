import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../Beans/game-item';
import { Router } from '@angular/router';
import {GameListService} from '../../Services/game-list.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:GameItem[];

  constructor(private route:Router, private gameListService:GameListService) { }

  ngOnInit() {
    this.items=this.gameListService.getList();
  }

  selectItem(item:GameItem){
    this.route.navigate(['/detail/'+item.id])
  }

}
