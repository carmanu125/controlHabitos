import { Component, Inject, OnInit } from '@angular/core';
import { hxgn_Partition } from 'src/app/models/hxgn_Partition';
import { PartitionService } from 'src/app/services/partition.service';

@Component({
  selector: 'app-list-particao',
  templateUrl: './list-particao.component.html',
  styleUrls: ['./list-particao.component.css']
})
export class ListParticaoComponent implements OnInit {

  
  public partitions: hxgn_Partition[];

  url_base:string;
  result: string;

  constructor( private partitionService:PartitionService, @Inject('BASE_URL') baseUrl: string) {
    this.url_base = baseUrl;

    // this.form = this.formBuilder.group({

    //   name:['',[Validators.required]],
    //   idPost:['',[Validators.required]],
    //   idPartitionn:['',[Validators.required]]
      
    // })

    this.partitionService.getPartition(baseUrl+ "api/Partition/").subscribe(result => {
      console.log(result);
      this.partitions = result;
    }, error => console.error(error));
   
  }


  ngOnInit() {
  }

}
