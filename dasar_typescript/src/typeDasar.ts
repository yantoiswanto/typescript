//TYpe data di typescript harus di isi sesuai type yang sudah di deklarasikan
// apabila salah contoh string di isi dengan number maka dia akan error
//Stirng
let nama:string = "";
nama = "Yanto";

//Number 
let umur: number = 0;
umur = 45

//boolean
let isMarried:boolean;
isMarried=true;
isMarried=false;

//any type data yang bisa di isi apa saja di dalam variable
let heroes: any;
heroes = "heroes";
// heroes = 341;
// heroes = [];
// heroes = {};
// heroes = true || false || "string";


//union type 
// 32132133
// "09321321"
// cara mengatasi inputan 0 agar tidak di delete di system 

let phone: number | string ;
phone = 628129654552;
phone = "0812366554";

console.log(nama,umur, isMarried, heroes)