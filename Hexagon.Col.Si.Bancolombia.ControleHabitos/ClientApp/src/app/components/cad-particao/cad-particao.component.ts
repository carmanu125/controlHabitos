import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { hxgn_Partition } from 'src/app/models/hxgn_Partition';
import { PartitionService } from 'src/app/services/partition.service';

@Component({
  selector: 'app-cad-particao',
  templateUrl: './cad-particao.component.html',
  styleUrls: ['./cad-particao.component.css']
})
export class CadParticaoComponent implements OnInit{

  form: FormGroup;
  url_base:string;
  result: string;

  showError:boolean = false;
  showSuccess:boolean = false;
  showID:boolean = false;
  
  idAccount: number;
  creationDate:Date;

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder, private partitionService:PartitionService, @Inject('BASE_URL') baseUrl: string ){
    this.url_base = baseUrl;
    this.form = this.formBuilder.group({

      orderNumber:['',[Validators.required]],
      description:['',[Validators.required]],
      isActive:['',[Validators.required]]
      
    })
  }

  savePartition( ) {
    //console.log(this.form);
    const partitionMode : hxgn_Partition = {
      orderNumber: this.form.get('orderNumber').value,
      description: this.form.get('description').value,
      isActive: this.form.get('isActive').value

    }

    if(this.showID){
      partitionMode.idPartition = this.idAccount;
      partitionMode.creationDate = this.creationDate;
      this.partitionService.updatePartition(partitionMode, this.url_base + "api/Partition/"+this.idAccount).subscribe(result => {
        console.log(result);
        this.clearValues();
      }, error => {
        console.error(error)
        this.showError=true;
      });
    }else{

      this.partitionService.savePartition(partitionMode, this.url_base + "api/Partition/").subscribe(result => {
        console.log(result);
        this.clearValues();
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
      window.location.href = "/list-partition";
      this.showID = false;
      this.idAccount = 0;
    }
  }


  loadCurrentAccount(){

    this.partitionService.getCurrentPartition(this.url_base+ "api/Partition/"+this.idAccount).subscribe(result => {
      console.log(result);
      // this.currentAccount = result;
      this.creationDate = result.creationDate;
      console.log(this.creationDate);
      this.form.setValue({
        orderNumber: result.orderNumber,
        description:result.description,
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
