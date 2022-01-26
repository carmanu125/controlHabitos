import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { hxgn_Users } from 'src/app/models/hxgn_Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  url_base:string;
  result: string;

  constructor(private formBuilder: FormBuilder, private userService:UserService, @Inject('BASE_URL') baseUrl: string) { 
    this.url_base = baseUrl;

    this.form = this.formBuilder.group({

      
      user:['',[Validators.required]],
      password:['',[Validators.required]]
      
    })
  }

  login( ) {
    //console.log(this.form);
    const userModel : hxgn_Users = {
      
      login: this.form.get('user').value,
      password: this.form.get('password').value

    }

    this.userService.loginUser(userModel, this.url_base + "api/users/login").subscribe(result => {
      console.log(result);
      if(result.idUsers != 0){

        this.userService.setUserCookie(result.name,result.idUsers.toString());
        window.location.href = "/home";
      }
    }, error => console.error(error));
  
  }

  ngOnInit() {
  }

}
