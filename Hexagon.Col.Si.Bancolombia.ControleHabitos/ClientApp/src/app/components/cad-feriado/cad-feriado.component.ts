import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { hxgn_Calendar } from 'src/app/models/hxgn_Calendar';
import { CalendarService } from 'src/app/services/calendar.service';


@Component({
  selector: 'app-cad-feriado',
  templateUrl: './cad-feriado.component.html',
  styleUrls: ['./cad-feriado.component.css']
})
export class CadFeriadoComponent implements OnInit{
  public holidays: hxgn_Calendar[];

  form: FormGroup;
  url_base:string;
  result: string;

  showError:boolean = false;
  showSuccess:boolean = false;
  showID:boolean = false;

  idAccount: number;
  creationDate:Date;

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder, private calendarService:CalendarService, @Inject('BASE_URL') baseUrl: string) {
    this.url_base = baseUrl;

    this.form = this.formBuilder.group({

      date:['',[Validators.required]],
      description:['',[Validators.required]]
      
    })
  
  }

  saveCalendar( ) {
    //console.log(this.form);

    let currentDate = new Date(this.form.get('date').value);

    let dd = String(currentDate.getDate() + 1).padStart(2, '0');
    let mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = currentDate.getFullYear();

    let dateFormat =  yyyy + '/' +dd + '/' + mm ;

    console.log(dateFormat);
    
    const calendarModel : hxgn_Calendar = {
      date: dateFormat,
      description: this.form.get('description').value
      // creationUser:2
    }

    if(this.showID){
      calendarModel.idCalendar = this.idAccount;
      calendarModel.creationDate = this.creationDate;
      this.calendarService.updateCalendar(calendarModel, this.url_base + "api/Calendar/"+this.idAccount).subscribe(result => {
        console.log(result);
        this.clearValues();
      }, error => {
        console.error(error)
        this.showError=true;
      });
    }else{

      this.calendarService.saveCalendar(calendarModel, this.url_base + "api/Calendar/").subscribe(result => {
        console.log(result);
        window.location.href = '/';
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
      window.location.href = "/";
      this.showID = false;
      this.idAccount = 0;
    }
  }


  loadCurrentAccount(){

    this.calendarService.getCurrentCalendar(this.url_base+ "api/Calendar/"+this.idAccount).subscribe(result => {
      console.log(result);
      // this.currentAccount = result;
      this.creationDate = result.creationDate;
      console.log(this.creationDate);
      this.form.setValue({
        date:result.date,
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
