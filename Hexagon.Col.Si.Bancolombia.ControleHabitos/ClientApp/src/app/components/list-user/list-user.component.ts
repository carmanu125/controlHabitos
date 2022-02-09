import { Component, Inject, OnInit } from '@angular/core';
import { hxgn_Users } from 'src/app/models/hxgn_Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  
  public users: hxgn_Users[];

  url_base:string;
  result: string;

  constructor( private userService:UserService, @Inject('BASE_URL') baseUrl: string) {
    this.url_base = baseUrl;

    // this.form = this.formBuilder.group({

    //   name:['',[Validators.required]],
    //   idPost:['',[Validators.required]],
    //   idPartitionn:['',[Validators.required]]
      
    // })

    this.userService.getUsers(baseUrl+ "api/Users/").subscribe(result => {
      console.log(result);
      this.users = result;
    }, error => console.error(error));
   
  }


  ngOnInit() {
  }

  deleteCurrent(name: string, id:number) {
    if(confirm("¿Esta seguro que desea eliminar este registro ?  "+ name)) {
      this.userService.deleteUser(this.url_base+ "api/Users/"+id).subscribe(result => {
        console.log(result);
        window.location.reload();
        
      }, error => console.error(error));
  
    }
  }

}
