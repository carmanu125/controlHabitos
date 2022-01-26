import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { hxgn_accountsMode } from 'src/app/models/hxgn_accountsMode';
import { AgenciaService } from 'src/app/services/agencia.service';

@Component({
  selector: 'app-cad-agencia',
  templateUrl: './cad-agencia.component.html',
  styleUrls: ['./cad-agencia.component.css']
})
export class CadAgenciaComponent implements OnInit{

  showError:boolean = false;
  showSuccess:boolean = false;
  showID:boolean = false;
  
  idAccount: number;
  creationDate:Date;
  currentAccount:hxgn_accountsMode;

  
  form: FormGroup;
  url_base:string;
  result: string;

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder, private agenciaService:AgenciaService, @Inject('BASE_URL') baseUrl: string ){
    this.url_base = baseUrl;
    this.form = this.formBuilder.group({
      code:['',[Validators.required]],
      name:['',[Validators.required]],
      accountNumber:['',[Validators.required]],
      mun:['',[Validators.required]],
      state:['',[Validators.required]],
      location:['',[Validators.required]],
      latitude:['',[Validators.required]],
      longitude:['',[Validators.required]],
      comments:['',[Validators.required]],
      isActive:['',[Validators.required]]
      
    })
  }

  hideErrorMessage(){
    this.showError = false;
  }
  hideSuccessMessage(){
    this.showSuccess = false;
  }

  saveAgencia( ) {
    //console.log(this.form);
    const accountsMode : hxgn_accountsMode = {
      code: this.form.get('code').value,
      name: this.form.get('name').value,
      accountNumber: this.form.get('accountNumber').value,
      mun: this.form.get('mun').value,
      state: this.form.get('state').value,
      location: this.form.get('location').value,
      latitude: this.form.get('latitude').value,
      longitude: this.form.get('longitude').value,
      comments: this.form.get('comments').value,
      isActive: this.form.get('isActive').value,

    }

    console.log(accountsMode);

    if(this.showID){
      accountsMode.idAccounts = this.idAccount;
      accountsMode.creationDate = this.creationDate;
      this.agenciaService.updateAgencia(accountsMode, this.url_base + "api/Account/"+this.idAccount).subscribe(result => {
        console.log(result);
        this.clearValues();
      }, error => {
        console.error(error)
        this.showError=true;
      });
    }else{
      this.agenciaService.saveAgencia(accountsMode, this.url_base + "api/Account/").subscribe(result => {
        console.log(result);
        this.clearValues();
      }, error => {
        console.error(error)
        this.showError=true;
      });
    }
  }

  clearValues(){
    this.form.reset();
    this.showSuccess=true;
    if(this.showID){
      window.location.href = "/list-agencia";
      this.showID = false;
      this.idAccount = 0;
    }
  }


  loadCurrentAccount(){

    this.agenciaService.getAccount(this.url_base+ "api/Account/"+this.idAccount).subscribe(result => {
      console.log(result);
      // this.currentAccount = result;
      this.creationDate = result.creationDate;
      console.log(this.creationDate);
      this.form.setValue({
        code: result.code,
        name:result.name,
        accountNumber:result.accountNumber, 
        mun:result.mun,
        state:result.state, 
        location:result.location,
        latitude:result.latitude,
        longitude:result.longitude,
        comments:result.comments,
        isActive:result.isActive
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

          this.loadCurrentAccount();
        }
      }
    );
  }
}
