// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'removeDuplicate'
// })
// export class RemoveDuplicatePipe implements PipeTransform {

//   transform(value: any, ...args: any[]): any {
//     let newArr = new Array();
//     // On prend la value recu et on fait un filter pour enlever les duplicates
//     let uniqueArray = value.filter((element,index)=>{
//       Object.keys(element).forEach((key)=>{
//         if(newArr.includes(element[key])){
//           return false;
//         }else{
//           newArr.push(element[key])
//         }
//         return true;
//         console.log({newArr})
//         // console.log(element[key])
//       })
//     })
//     console.log({uniqueArray})
//     return uniqueArray;
//   }

// }



import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicate'
})
export class RemoveDuplicatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newArr = new Array();
    // On prend la value recu et on fait un filter pour enlever les duplicates
    let uniqueArray = value.filter((element,index,array)=>{
      // Si la destination a déja été ajouter , on retourn false pour éviter de l'avoir 2 fois
      if(newArr.includes(element.destination)){
        return false;
      }
      newArr.push(element.destination)
      return array.indexOf(element) == index;
    })
    console.log({uniqueArray})
    return uniqueArray;
  }

}
