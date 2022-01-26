export class utils{

    constructor(){

    }

    public key_user_id:string = "keyUI";
    public key_user_name:string = "keyUN";

    getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');

        
        let caLen: number = ca.length;
        if(caLen<0){
            return '';
        }
        let cookieName = `${name}=`;
        let c: string;


        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }

    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }

    setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = `expires=${d.toUTCString()}`;
        let cpath:string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
}