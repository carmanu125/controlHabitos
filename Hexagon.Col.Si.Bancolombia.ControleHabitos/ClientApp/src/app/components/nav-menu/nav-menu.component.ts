import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
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
