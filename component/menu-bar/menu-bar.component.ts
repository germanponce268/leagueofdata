import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items : MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Inicio',
        routerLink:'/'
      }
      ,
      {
        label:'LoL',
        items:[
          {
            label:'Buscar Invocador',
            icon: 'pi pi-search',
            routerLink:'lol'
          }
        ]
      },
      {
        label:'Fotos',

      }
    ]
  }




}
