import { Component } from '@angular/core';
interface MenuItem{
  title: string,
  route: string
}
@Component({
  selector: 'share-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[]=[
    {title:'basicos', route: './reactive/basic'},
    {title:'dinámicos', route: './reactive/dynamic'},
    {title:'Switvhes', route: './reactive/switches'},

  ];

  public authMenu: MenuItem[] =[
    {title:'Registro', route: './auth'},
  ]
}
