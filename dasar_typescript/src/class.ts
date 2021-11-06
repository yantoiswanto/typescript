// export class User {
// //constructor 1
// //  public name:string;

// //  constructor(name:string){
// //      this.name = name;
// //  }

// //constructor 2 typescript
//  constructor(public name:string, public age:number){}

// }

// let user = new User("Yanto", 25);
// console.log(user)

// inheritence class turunan
// public = bisa diakses disemua class / fi luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunanya
// private = hanya bisa diakses dari class itu sendiri
export class User {
    name:string;

    constructor(name:string, public age:number) {
        this.name = name;  
    }

    setName(value:string):void{
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    }
}

// ketika admin extends ke user maka dia akan mewarisi sifat dari user di atas
class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone:string;
    private _email: string ="";

    //static tidak usah masuk ke constructor terlebih dahulu karna
    // sudah di set parameternya
    static getRoleName:string = "Admin";

    constructor(phone:string, name:string, age:number){
        super(name, age);
        this.phone = phone;
    }

    static getNameRole(){
        return "Static Admin"
    }

    getRule():{ read: boolean, write: boolean }{
        return {
            read: this.read,
            write: this.write
        }
    }

    // berfungsi untuk validasi data
    set email(value:string){
        if(value.length < 5){
            this._email = "Email Salah"
        } else {
            this._email =value;
        } 
    }
    
    //untuk mengambil data
    get email():string{
        return this._email;
    }
}

let admin = new Admin("0812565254412", 'Yanto', 25);

admin.getName();
admin.getRule();
admin.setName("Yanto");
admin.phone;


admin.email = "admin@example.com";
console.log(admin.email);

// static method
let staticAdmin = Admin.getRoleName;
let Role = Admin.getNameRole();
console.log(staticAdmin, Role);

