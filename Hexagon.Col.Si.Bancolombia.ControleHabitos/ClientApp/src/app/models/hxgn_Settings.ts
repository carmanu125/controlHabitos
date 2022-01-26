import { hxgn_SettingTime } from "./hxgn_SettingTime";
import { hxgn_SettingUser } from "./hxgn_SettingUser";

export class  hxgn_Settings{
    idSettings?:number;
    idAccounts:number;
    comments:string;
    isActive?:boolean;
    creationDate?:Date;
    creationUser?: number = 2 ;

    settingTime?:hxgn_SettingTime[];
    settingUser?:hxgn_SettingUser[];

}

