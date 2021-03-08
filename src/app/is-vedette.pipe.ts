import { Pipe, PipeTransform } from '@angular/core';

import { Forfait } from './forfait';

@Pipe({
  name: 'isVedette'
})
export class IsVedettePipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[]{
    return forfaits.filter(forfait => forfait.vedette)
  }

}
