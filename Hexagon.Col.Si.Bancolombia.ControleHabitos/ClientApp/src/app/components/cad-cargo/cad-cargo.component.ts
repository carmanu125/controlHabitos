import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { hxgn_Post } from 'src/app/models/hxgn_Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-cad-cargo',
  templateUrl: './cad-cargo.component.html',
  styleUrls: ['./cad-cargo.component.css']
})
export class CadCargoComponent implements OnInit {

  form: FormGroup;
  url_base:string;
  result: string;

  showError:boolean = false;
  showSuccess:boolean = false;
  showID:boolean = false;

  idAccount: number;
  creationDate:Date;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private postService:PostService, @Inject('BASE_URL') baseUrl: string ){
    this.url_base = baseUrl;
    this.form = this.formBuilder.group({

      description:['',[Validators.required]]
      
    })
  }

  hideErrorMessage(){
    this.showError = false;
  }
  hideSuccessMessage(){
    this.showSuccess = false;
  }

  savePost( ) {
    //console.log(this.form);
    const postModel : hxgn_Post = {
      description: this.form.get('description').value
    }

    if(this.showID){
      postModel.idPost = this.idAccount;
      postModel.creationDate = this.creationDate;
      this.postService.updatePost(postModel, this.url_base + "api/Post/"+this.idAccount).subscribe(result => {
        console.log(result);
        this.clearValues();
      }, error => {
        console.error(error)
        this.showError=true;
      });
    }else{

      this.postService.savePost(postModel, this.url_base + "api/Post/").subscribe(result => {
        console.log(result);
        this.clearValues();
      }, error => console.error(error));  
    }
    
  }


  clearValues(){
    this.form.reset();
    this.showSuccess=true;
    if(this.showID){
      window.location.href = "/list-cargo";
      this.showID = false;
      this.idAccount = 0;
    }
  }


  loadCurrentAccount(){

    this.postService.getCurrentPost(this.url_base+ "api/Post/"+this.idAccount).subscribe(result => {
      console.log(result);
      // this.currentAccount = result;
      this.creationDate = result.creationDate;
      console.log(this.creationDate);
      this.form.setValue({
        description: result.description
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
