function getData(value:any){
    return value;
}

console.log(getData("Yanto Iswanto").length);
console.log(getData(1235));


//Generic
function myData<T>(value:T) {
    return value;
}

// arrow function generic pada jsx
const arrFunc = <T,>(value:T) => {

}
