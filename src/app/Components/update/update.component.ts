import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../Beans/game-item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameListService } from '../../Services/game-list.service';
import { Genere } from '../../Beans/Generi';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  nomeGioco: string;
  copyGame: GameItem;
  currentGame: GameItem;
  generi: Genere[];

  gameForm: FormGroup;

  constructor(private route: ActivatedRoute ,private gameListService: GameListService, private formBuilder: FormBuilder, private router: Router) {

    this.route.params.subscribe(params => {
      if(params["id"] != "" && params["id"] != null && params["id"] != "x"){
        this.copyGame = this.gameListService.getElementById(params["id"]);
        this.currentGame = gameListService.clone(this.copyGame);
        this.createForm();
      }
    });
    this.generi = gameListService.getGeneri();

  }

  createForm() {
    this.gameForm = this.formBuilder.group({
      nome: [this.currentGame.nome,Validators.required],
      descrizione: [this.currentGame.descrizione,Validators.required],
      genere: [this.currentGame.genere,Validators.required],
      rating: [this.currentGame.rating,[Validators.required,Validators.min(1), Validators.max(10)]],
      prezzo: [this.currentGame.prezzo,Validators.required],
      annoUscita: [this.currentGame.annoUscita,Validators.required],
    });
  }

  searchGame(){

    if(this.gameListService.findGame(this.nomeGioco) == true){

      this.copyGame = this.gameListService.getElementByName(this.nomeGioco);
      this.currentGame = this.gameListService.clone(this.copyGame);
      this.createForm();
    }
    else{
      alert("Gioco non presente");
    }

}
  saveData(){
    this.currentGame.nome = this.gameForm.get("nome").value;
    this.currentGame.descrizione = this.gameForm.get("descrizione").value;

    let num: number = Number.parseInt(this.gameForm.get("genere").value);
    let currGen: Genere = this.generi[num];
    this.currentGame.genere = currGen;
    this.currentGame.rating = this.gameForm.get("rating").value;
    this.currentGame.prezzo = this.gameForm.get("prezzo").value;
    this.currentGame.annoUscita = this.gameForm.get("annoUscita").value;
    this.gameListService.setGame(this.currentGame);
    this.router.navigate(['/dettaglio/'+this.currentGame.id]);
  }

  ngOnInit() { }

  ngFormReset(){
    this.gameForm.setValue({
      nome: this.currentGame.nome,
      descrizione: this.currentGame.descrizione,
      genere: this.currentGame.genere,
      rating: this.currentGame.rating,
      prezzo: this.currentGame.prezzo,
      annoUscita: this.currentGame.annoUscita,
    });
    this.currentGame = this.gameListService.clone(this.copyGame);
  }

  goToDetail(){
    
  }

}
