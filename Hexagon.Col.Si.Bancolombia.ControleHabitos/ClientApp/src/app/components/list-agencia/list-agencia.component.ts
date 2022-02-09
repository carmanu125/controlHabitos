import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { hxgn_accountsMode } from 'src/app/models/hxgn_accountsMode';
import { AgenciaService } from 'src/app/services/agencia.service';

@Component({
  selector: 'app-list-agencia',
  templateUrl: './list-agencia.component.html',
  styleUrls: ['./list-agencia.component.css']
})
export class ListAgenciaComponent implements OnInit {

  public accounts: hxgn_accountsMode[];


  form: FormGroup;
  url_base:string;
  result: string;

  constructor( private agenciaService:AgenciaService, @Inject('BASE_URL') baseUrl: string) {
    this.url_base = baseUrl;

    this.agenciaService.getAccounts(baseUrl+ "api/Account/").subscribe(result => {
      console.log(result);
      this.accounts = result;
    }, error => console.error(error));
   
  }


  ngOnInit() {
    
  }

  deleteCurrent(name: string, id:number) {
    if(confirm("¿Esta seguro que desea eliminar este registro ?  "+name)) {
      this.agenciaService.deleteAccount(this.url_base+ "api/Account/"+id).subscribe(result => {
        console.log(result);
        window.location.reload();
        
      }, error => {
        console.error(error)
        
      });
  
    }
  }

}
