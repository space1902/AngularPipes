import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name:string = 'victor';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeCLient(){
    this.name = 'maria';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['maria', 'pedro', 'juan', 'victor', 'jose'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  public persona = {
    name: 'victor',
    age: 24,
    address: 'cucuta, colombia',
  }

  //asyn
  public myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de promesa');
    }, 3500);
  });

  public myObservable: Observable<number> = interval(1000).pipe(
    tap (val => console.log('tap', val))
  ) ;

  deleteClient(){
    this.clients.pop();
  }
}
