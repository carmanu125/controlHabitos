import { Component, Inject, OnInit } from '@angular/core';
import { hxgn_Post } from 'src/app/models/hxgn_Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-cargo',
  templateUrl: './list-cargo.component.html',
  styleUrls: ['./list-cargo.component.css']
})
export class ListCargoComponent implements OnInit {

  
  public posts: hxgn_Post[];

  url_base:string;
  result: string;

  constructor(private postService:PostService, @Inject('BASE_URL') baseUrl: string) {
    this.url_base = baseUrl;

    // this.form = this.formBuilder.group({

    //   name:['',[Validators.required]],
    //   idPost:['',[Validators.required]],
    //   idPartitionn:['',[Validators.required]]
      
    // })

    this.postService.getPost(baseUrl+ "api/Post/").subscribe(result => {
      console.log(result);
      this.posts = result;
    }, error => console.error(error));
   
  }


  ngOnInit() {
  }

  deleteCurrent(name: string, id:number) {
    if(confirm("¿Esta seguro que desea eliminar este registro ?  "+ name)) {
      this.postService.deletePost(this.url_base+ "api/Post/"+id).subscribe(result => {
        console.log(result);
        window.location.reload();
        
      }, error => console.error(error));
  
    }
  }

}
