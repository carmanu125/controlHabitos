import { Component, Inject, OnInit } from '@angular/core';
import { hxgn_Settings } from 'src/app/models/hxgn_Settings';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-list-config',
  templateUrl: './list-config.component.html',
  styleUrls: ['./list-config.component.css']
})
export class ListConfigComponent implements OnInit {

  public config: hxgn_Settings[];

  url_base:string;
  result: string;

  constructor(private settingsService:SettingsService, @Inject('BASE_URL') baseUrl: string) {
    this.url_base = baseUrl;

    // this.form = this.formBuilder.group({

    //   name:['',[Validators.required]],
    //   idPost:['',[Validators.required]],
    //   idPartitionn:['',[Validators.required]]
      
    // })

    this.settingsService.getSettings(baseUrl+ "api/Settings/").subscribe(result => {
      console.log(result);
      this.config = result;
    }, error => console.error(error));
   
  }

  ngOnInit() {
  }

  deleteCurrent(name: string, id:number) {
    if(confirm("¿Esta seguro que desea eliminar este registro ?  "+ name)) {
      this.settingsService.deleteSetting(this.url_base+ "api/Settings/"+id).subscribe(result => {
        console.log(result);
        window.location.reload();
        
      }, error => console.error(error));
  
    }
  }

}
