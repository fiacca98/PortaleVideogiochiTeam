import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameListService } from '../../Services/game-list.service';
import { GameItem } from '../../Beans/game-item'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: GameItem;
  id: String;

  constructor(private route: Router, private gameListService: GameListService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {//
      if (params['id'] != '' && params['id'] != null) {
        this.item = this.gameListService.getElementById(params['id']);
      }
    });
  }

  ngOnInit() {
  }

  goToEdit() {
    this.route.navigate(['/modifica/' + this.item.id]);
  }

  goToList() {
    this.route.navigate(['/lista/']);
  }

}
