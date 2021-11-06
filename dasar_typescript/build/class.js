"use strict";
// export class User {
// //constructor 1
// //  public name:string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
// ketika admin extends ke user maka dia akan mewarisi sifat dari user di atas
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.getNameRole = function () {
        return "Static Admin";
    };
    Admin.prototype.getRule = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        //untuk mengambil data
        get: function () {
            return this._email;
        },
        // berfungsi untuk validasi data
        set: function (value) {
            if (value.length < 5) {
                this._email = "Email Salah";
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    //static tidak usah masuk ke constructor terlebih dahulu karna
    // sudah di set parameternya
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
var admin = new Admin("0812565254412", 'Yanto', 25);
admin.getName();
admin.getRule();
admin.setName("Yanto");
admin.phone;
admin.email = "admin@example.com";
console.log(admin.email);
// static method
var staticAdmin = Admin.getRoleName;
var Role = Admin.getNameRole();
console.log(staticAdmin, Role);
