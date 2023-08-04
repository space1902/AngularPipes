import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | "", desc?:boolean ): Hero[] {
    let control:number ;
    (desc) ? control = 1 : control = -1;
    switch (sortBy) {
      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre) ? control : -1);
      case 'canFly':
        return heroes.sort((a, b) => (a.canFly > b.canFly) ? control : -1);
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? control : -1);
      default:
        return heroes;
  }
}
}
