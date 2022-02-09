import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { hxgn_Partition } from 'src/app/models/hxgn_Partition';
import { hxgn_Users } from 'src/app/models/hxgn_Users';
import { PartitionService } from 'src/app/services/partition.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit{

  public partitions: hxgn_Partition[];

  form: FormGroup;
  url_base:string;
  result: string;

  showError:boolean = false;
  showSuccess:boolean = false;
  showID:boolean = false;
  
  idAccount: number;
  creationDate:Date;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private userService:UserService, @Inject('BASE_URL') baseUrl: string, private partitionService:PartitionService) {
    this.url_base = baseUrl;

    this.form = this.formBuilder.group({

      name:['',[Validators.required]],
      idPost:['',[Validators.required]],
      idPartitionn:['',[Validators.required]]
      // login:['',[Validators.required]],
      // password:['',[Validators.required]]
      
    })

    this.partitionService.getPartition(baseUrl+ "api/Partition/").subscribe(result => {
      console.log(result);
      this.partitions = result;
    }, error => console.error(error));
    

   
  }

  saveUser( ) {
    //console.log(this.form);
    const userModel : hxgn_Users = {
      idPartitionn: this.form.get('idPartitionn').value,
      idPost: this.form.get('idPost').value,
      name: this.form.get('name').value
      // login: this.form.get('login').value,
      // password: this.form.get('password').value

    }

    if(this.showID){
      userModel.idUsers = this.idAccount;
      userModel.creationDate = this.creationDate;
      this.userService.updateUser(userModel, this.url_base + "api/Users/"+this.idAccount).subscribe(result => {
        console.log(result);
        this.clearValues();
      }, error => {
        console.error(error)
        this.showError=true;
      });
    }else{

      this.userService.saveUser(userModel, this.url_base + "api/Users/").subscribe(result => {
        console.log(result);
      }, error => console.error(error));
    }
  }

  hideErrorMessage(){
    this.showError = false;
  }
  hideSuccessMessage(){
    this.showSuccess = false;
  }

  clearValues(){
    this.form.reset();
    this.showSuccess=true;
    if(this.showID){
      window.location.href = "/list-user";
      this.showID = false;
      this.idAccount = 0;
    }
  }


  loadCurrentUser(){

    this.userService.getUser(this.url_base+ "api/Users/"+this.idAccount).subscribe(result => {
      console.log(result);
      // this.currentAccount = result;
      this.creationDate = result.creationDate;
      console.log(this.creationDate);
      this.form.setValue({
        idPartitionn: new FormControl(result.idPartitionn.toString()),
        idPost:result.idPost,
        name:result.name
        // login:result.login,
        // password:result.password
      });
    }, error => console.error(error));

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        if(params.Ak != undefined){
        //AK = ID Account
          this.idAccount = params.Ak;
          console.log(this.idAccount);  
          this.showID = true;

          this.loadCurrentUser();
        }
      }
    );
  }
}
