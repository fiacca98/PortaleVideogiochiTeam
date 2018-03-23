export class GameItem {
    
    id: string;
    nome: string;
    descrizione: string;
    genere: string;
    rating: number;
    prezzo: number;
    annoUscita: number

    constructor(id: string = "", nome: string = "", descrizione: string = "", genere: string = "", rating: number = 0, prezzo: number = 0, annoUscita: number = 0) {
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.genere = genere;
        this.rating = rating;
        this.prezzo = prezzo;
        this.annoUscita = annoUscita;
    }

}

