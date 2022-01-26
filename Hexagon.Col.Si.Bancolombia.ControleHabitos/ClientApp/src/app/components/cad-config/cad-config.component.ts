import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { hxgn_accountsMode } from 'src/app/models/hxgn_accountsMode';
import { hxgn_Settings } from 'src/app/models/hxgn_Settings';
import { hxgn_SettingTime } from 'src/app/models/hxgn_SettingTime';
import { hxgn_SettingUser } from 'src/app/models/hxgn_SettingUser';
import { hxgn_Users } from 'src/app/models/hxgn_Users';
import { AgenciaService } from 'src/app/services/agencia.service';
import { SettingsService } from 'src/app/services/settings.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cad-config',
  templateUrl: './cad-config.component.html',
  styleUrls: ['./cad-config.component.css']
})
export class CadConfigComponent implements OnInit{

  public users: hxgn_Users[];
  public accounts: hxgn_accountsMode[];

  showError:boolean = false;
  showSuccess:boolean = false;
  showID:boolean = false;

  messageError:string = "";
  
  idSettings: number;
  creationDate:Date;


  public times: number[];
  // al seleccionar un check, se agrega el usuario para posteriormemte hacer los inserts correspondientes
  public userArmAlarm: number[] = new Array();
  public userDisarmAlarm: number[] = new Array();

  //Mismo proceso que los check de usuarios, pero esta vez identifica donde inicia y donde termina el horario
  public timesMo: number[] = new Array();
  public timesTu: number[] = new Array();
  public timesWe: number[] = new Array();
  public timesTh: number[] = new Array();
  public timesFr: number[] = new Array();
  public timesSa: number[] = new Array();
  public timesSu: number[] = new Array();


  showAccount: boolean = false;
  nameAccount: string;

  form: FormGroup;
  url_base: string;
  result: string;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, @Inject('BASE_URL') baseUrl: string, private agenciaService: AgenciaService, private settingsService:SettingsService) {
    this.url_base = baseUrl;

    this.form = this.formBuilder.group({

      //name: ['', [Validators.required]],
      idAccounts: ['', [Validators.required]],
      comment: ['', [Validators.required]]

    })

    this.userService.getUsers(baseUrl + "api/Users/").subscribe(result => {
      //console.log(result);
      this.users = result;
    }, error => console.error(error));


    this.times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  }

  showHideAccount() {
    this.showAccount = this.showAccount ? false : true;

    this.nameAccount = this.form.get('idAccounts').value
  }

  showAccountDiv() {
    this.showHideAccount();
    this.agenciaService.getAccounts(this.url_base + "api/Account/").subscribe(result => {
      console.log(result);
      this.accounts = result;
    }, error => console.error(error));
  }

  showHoursError(){
    this.messageError = "Error, solo puedes elegir la hora inicial y la hora de cierre."
    this.showError = true;
  }

  hoursChangeMo(values: any) {
    if (values.currentTarget.checked) {
      if(this.timesMo.length == 2){
        this.showHoursError();
        values.currentTarget.checked = false;
      }else{
        this.timesMo.push(values.currentTarget.defaultValue)
      }
    } else {
      let pos = this.timesMo.indexOf(values.currentTarget.defaultValue)
      this.timesMo.splice(pos, 1)
    }
    console.log(this.timesMo);
  }

  hoursChangeTu(values: any) {
    if (values.currentTarget.checked) {
      if(this.timesTu.length == 2){
        this.showHoursError();
        values.currentTarget.checked = false;
      }else{
        this.timesTu.push(values.currentTarget.defaultValue)
      }
    } else {
      let pos = this.timesTu.indexOf(values.currentTarget.defaultValue)
      this.timesTu.splice(pos, 1)
    }
    console.log(this.timesTu);
  }

  hoursChangeWe(values: any) {
    if (values.currentTarget.checked) {
      if(this.timesWe.length == 2){
        this.showHoursError();
        values.currentTarget.checked = false;
      }else{
        this.timesWe.push(values.currentTarget.defaultValue)
      }
    } else {
      let pos = this.timesWe.indexOf(values.currentTarget.defaultValue)
      this.timesWe.splice(pos, 1)
    }
    console.log(this.timesWe);
  }

  hoursChangeTh(values: any) {
    if (values.currentTarget.checked) {
      if(this.timesTh.length == 2){
        this.showHoursError();
        values.currentTarget.checked = false;
      }else{
        this.timesTh.push(values.currentTarget.defaultValue)
      }
    } else {
      let pos = this.timesTh.indexOf(values.currentTarget.defaultValue)
      this.timesTh.splice(pos, 1)
    }
    console.log(this.timesTh);
  }

  hoursChangeFr(values: any) {
    if (values.currentTarget.checked) {
      if(this.timesFr.length == 2){
        this.showHoursError();
        values.currentTarget.checked = false;
      }else{
        this.timesFr.push(values.currentTarget.defaultValue)
      }
    } else {
      let pos = this.timesFr.indexOf(values.currentTarget.defaultValue)
      this.timesFr.splice(pos, 1)
    }
    console.log(this.timesFr);
  }

  hoursChangeSa(values: any) {
    if (values.currentTarget.checked) {
      if(this.timesSa.length == 2){
        this.showHoursError();
        values.currentTarget.checked = false;
      }else{
        this.timesSa.push(values.currentTarget.defaultValue)
      }
    } else {
      let pos = this.timesSa.indexOf(values.currentTarget.defaultValue)
      this.timesSa.splice(pos, 1)
    }
    console.log(this.timesSa);
  }

  hoursChangeSu(values: any) {
    if (values.currentTarget.checked) {
      if(this.timesSu.length == 2){
        this.showHoursError();
        values.currentTarget.checked = false;
      }else{
        this.timesSu.push(values.currentTarget.defaultValue)
      }
    } else {
      let pos = this.timesSu.indexOf(values.currentTarget.defaultValue)
      this.timesSu.splice(pos, 1)
    }
    console.log(this.timesSu);
  }

  ActivateAlarmChange(values: any) {
    if (values.currentTarget.checked) {
      this.userArmAlarm.push(values.currentTarget.defaultValue)
    } else {
      let pos = this.userArmAlarm.indexOf(values.currentTarget.defaultValue)
      this.userArmAlarm.splice(pos, 1)
    }
    console.log(this.userArmAlarm);
  }

  DisableAlarmChange(values: any) {
    if (values.currentTarget.checked) {
      this.userDisarmAlarm.push(values.currentTarget.defaultValue)
    } else {
      let pos = this.userDisarmAlarm.indexOf(values.currentTarget.defaultValue)
      this.userDisarmAlarm.splice(pos, 1)
    }
    console.log(this.userDisarmAlarm);
  }

  pushSettingsTimes(values: number[], day: string) {
    let time: hxgn_SettingTime = new hxgn_SettingTime;
    let count: number = 0;

    values.forEach(function (elemento, indice, array) {
      console.log(count);

      if (count == 0) {
        time.startTime = elemento.toString();
        count += 1;
      } else {
        time.endTime = elemento.toString();
      }
    });
    count = 0;
    time.dayOfTheWeek = day;

    return time;
  }

  pushSettingsUsers() {
    this.userArmAlarm.sort();
    this.userDisarmAlarm.sort();

    if(this.userArmAlarm[0] != this.userDisarmAlarm[0] 
      && this.userArmAlarm[this.userArmAlarm.length-1] == this.userDisarmAlarm[this.userDisarmAlarm.length-1]){
        this.userArmAlarm.reverse();
        this.userDisarmAlarm.reverse();
      }

    let users: hxgn_SettingUser[] = new Array();
    let indexUsers: number[] = new Array();

    for (let i = 0; i < this.userArmAlarm.length; i++) {

      if (this.userArmAlarm[i] == this.userDisarmAlarm[i]) {
        let user: hxgn_SettingUser = new hxgn_SettingUser;

        user.isArm = true;
        user.isDisarm = true;
        user.idUser = this.userArmAlarm[i];
        indexUsers.push(i);

        users.push(user);
      }

      console.log(this.userArmAlarm[i]);
      console.log(this.userDisarmAlarm[i]);
    }

    if (indexUsers.length != this.userArmAlarm.length) {
      for (let i = 0; i < this.userArmAlarm.length; i++) {
        if (!this.isStored(i, indexUsers)) {
          let user: hxgn_SettingUser = new hxgn_SettingUser;
          user.isArm = true;
          user.isDisarm = false;
          user.idUser = this.userArmAlarm[i];
          users.push(user);
        }
      }
    }

    if (indexUsers.length != this.userDisarmAlarm.length) {
      for (let i = 0; i < this.userDisarmAlarm.length; i++) {
        if (!this.isStored(i, indexUsers)) {
          let user: hxgn_SettingUser = new hxgn_SettingUser;
          user.isArm = false;
          user.isDisarm = true;
          user.idUser = this.userDisarmAlarm[i];
          users.push(user);
        }
      }
    }
    return users;
  }


  isStored(index: number, indexUsers: number[]) {

    let isCorrect: Boolean = false;

    indexUsers.forEach(function (elemento, indice, array) {

      if (index == elemento) {
        isCorrect = true;
      }
    });

    return isCorrect;

  }

  saveConfig() {

    let sTimes: hxgn_SettingTime[] = new Array();
    let sUsers: hxgn_SettingUser[] = new Array();

    this.timesMo.sort();
    console.log(this.timesMo);

    sTimes.push(this.pushSettingsTimes(this.timesMo, "Mon"));
    sTimes.push(this.pushSettingsTimes(this.timesTu, "Tur"));
    sTimes.push(this.pushSettingsTimes(this.timesWe, "Wen"));
    sTimes.push(this.pushSettingsTimes(this.timesTh, "Thu"));
    sTimes.push(this.pushSettingsTimes(this.timesFr, "Fri"));
    sTimes.push(this.pushSettingsTimes(this.timesSa, "Sat"));
    sTimes.push(this.pushSettingsTimes(this.timesSu, "Sun"));

    sUsers = this.pushSettingsUsers();

    console.log(sTimes);
    console.log(sUsers);

    
    let idSplit:string[] = this.nameAccount.split("--");
    const settingsModel : hxgn_Settings = {
      idAccounts: parseInt(idSplit[0]),
      comments: this.form.get('comment').value,
      settingTime: sTimes,
      settingUser:sUsers
    }

    if(this.showID){
      settingsModel.idSettings = this.idSettings;
      settingsModel.creationDate = this.creationDate;
      this.settingsService.updateSetting(settingsModel, this.url_base + "api/Settings/"+this.idSettings).subscribe(result => {
        console.log(result);
        this.clearValues();
      }, error => {
        console.error(error)
        this.showErrorServer();
      });
    }else{

      this.settingsService.saveSettings(settingsModel, this.url_base + "api/Settings/").subscribe(result => {
        console.log(result);
      }, error => console.error(error));
    }
  }

  showErrorServer(){
    this.showError=true;
    this.messageError="Error al cargar los datos desde el servidor";
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
      window.location.href = "/list-config";
      this.showID = false;
      this.idSettings = 0;
    }
  }


  loadCurrentSetting(){

    // console.log("Entro a el load");
    this.settingsService.getSetting(this.url_base+ "api/Settings/"+this.idSettings).subscribe(result => {
      console.log(result);
      this.idSettings = result.idSettings;
      this.creationDate = result.creationDate;
      this.loadUserAlarms(result.settingUser);
    }, error => console.error(error));

  }
  loadUserAlarms(settingUser: hxgn_SettingUser[]) {
    
    settingUser.forEach(element => {
      
      if(element.isArm){
        this.userArmAlarm.push(element.idUser)
        
        var checkCurrent = <HTMLInputElement>document.getElementById('rba'+element.idUser);
        checkCurrent.checked = true;
        console.log(checkCurrent);
        
      }

      if(element.isDisarm){
        this.userDisarmAlarm.push(element.idUser)
        var checkCurrent = <HTMLInputElement>document.getElementById('rbd'+element.idUser);
        //checkCurrent.checked = true;
      }

    });

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        console.log(this.idSettings = params.Ak);

        if(params.Ak != undefined){
        //AK = ID Account
          this.idSettings = params.Ak;
          console.log(this.idSettings);  
          this.showID = true;

          console.log("Antes de load");
          this.loadCurrentSetting();
        }
      }
    );
  }

}
