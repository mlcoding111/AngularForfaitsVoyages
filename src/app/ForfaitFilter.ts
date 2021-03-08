import { Hotel } from './Hotel'

export interface ForfaitFilter {
    destination: "Jamaïque",
    villeDepart: "",
    srcImage: "",
    hotel: {
      coordonnees: "",
      nom: "",
      nombreChambres: null,
      nombreEtoiles: null
    },
    prix: null,
    rabais: null,
    vedette: null,
    dateDepart: "",
    dateRetour: "",
}