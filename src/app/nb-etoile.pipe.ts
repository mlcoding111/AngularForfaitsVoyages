import { Pipe, PipeTransform } from '@angular/core';

import { Forfait } from './Forfait'

@Pipe({
  name: 'nbEtoile'
})
export class NbEtoilePipe implements PipeTransform {

  transform(forfaits: Forfait[], value: number = 5): Forfait[] {
    return forfaits.filter(forfait => forfait.hotel.nombreEtoiles === value)
  }

}
