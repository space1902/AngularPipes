import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public orderBy?: keyof Hero;
  public desc?: boolean = true;
  public isUpper: boolean = true;
  public hero:Hero[] = [{
    nombre: 'victor',
    canFly: true,
    color: Color.red
  },
  {
    nombre: 'yamile',
    canFly: false,
    color: Color.blue
  },
  {
    nombre: 'superman',
    canFly: true,
    color: Color.green
  },
  {
    nombre: 'pantera',
    canFly: false,
    color: Color.black
  }]

  toggleUpperCase(){
    this.isUpper = !this.isUpper;
  }

  changeOrderBy(order: keyof Hero){
    this.orderBy = order;
    this.desc =!this.desc;
  }
}
