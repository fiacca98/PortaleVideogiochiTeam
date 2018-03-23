import { Genere } from "./Generi";

export class GameItem {


    id: string;
    nome: string;
    descrizione: string;
    genere: Genere;
    rating: number;
    prezzo: number;
    annoUscita: number
    image: string;

    constructor(id: string = "", nome: string = "", descrizione: string = "", genere: Genere, rating: number = 0, prezzo: number = 0, annoUscita: number = 0, image: string = "") {
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.genere = genere;
        this.rating = rating;
        this.prezzo = prezzo;
        this.annoUscita = annoUscita;
        this.image = image;
    }

}

