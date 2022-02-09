import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  isExpanded = false;
  userName:string;
  isLogin:boolean;
  usernameCurrent:string;

 

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.usernameCurrent = localStorage.getItem('currentUser');
    console.log("Nombre: " + this.usernameCurrent);

    if(this.usernameCurrent != undefined){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }
}
