import { Hotel } from './Hotel'

export interface Forfait {
    _id: string,
    destination: String,
    villeDepart: String,
    srcImage: String,
    hotel: Hotel,
    dateDepart: String,
    dateRetour: String,
    prix: Number,
    rabais: Number,
    vedette: Boolean,
    da?: String,
}