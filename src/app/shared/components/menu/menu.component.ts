import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService  } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  public itemsMenu: MenuItem[] = [];

    ngOnInit() {
        this.itemsMenu = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                      label: 'Textos y Fechas',
                      icon: 'pi pi-align-left',
                      routerLink: 'int'
                    },
                    {
                      label: 'Numeros',
                      icon: 'pi pi-dollar',
                      routerLink: 'numbers'
                    },
                    {
                      label: 'No comun',
                      icon: 'pi pi-globe',
                      routerLink: 'uncommon'
                    },
                  ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                items: [
                    {
                      label: 'Personalisados',
                      icon: 'pi pi-align-left',
                      routerLink: 'pers'
                    }
                  ]
            }
        ];
    }
}
