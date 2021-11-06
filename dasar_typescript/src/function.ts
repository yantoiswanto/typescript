// tipe data pada balikan function

//function String
// function getName(): string {
//     return "hello yanto iswanto"
// }
//  console.log(getName())

// //function Number
// function getAge(): number {
//     return 35;
// }

// console.log(getAge())

// // function void tidak bisa me return
// function printName(): void{
//     console.log("printName");
// }
//  console.log(printName());

// static typing
//argument types
//  function multiply(val1:number, val2:number):number {
//      return val1 * val2;
//  }

//  const result = multiply(10,5);
//  console.log(result);


//  // function as type
//  // setting value number pada inputan function dan hasilnya number
//  type Tambah = (val1:number, val2:number) => number;


//  const add: Tambah = (val1:number, val2:number):number =>{
//      return val1 + val2;
//  };


 //default parameter
//  const fullName = (first: string, last: string="Iswanto"):string => {
//      return first + " " + last;
//  }

//  console.log(fullName("Yanto"))
//  console.log(fullName("Yanto", "Saja"))

//optional parameter
// const getEmployee = (val1:string, val2?:string): string => {
//     return val1 + " " + val2;
// }

// console.log(getEmployee("Yanto"))
// console.log(getEmployee("Yanto", "Iswanto"))


// ketika menggunakan optional parameter di number maka return hasilnya harus string
// ketika returnnya number maka dia akan error
const getUmur = (val1:number, val2?:number): string => {
    return val1 + " " + val2;
}

console.log(getUmur(5, 52))

