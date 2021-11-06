"use strict";
//enum 
//numeric enum nilainya bisa di set
// enum Month {
//     JAN = 1,
//     FEB = 100,
//     MAR,
//     APR, 
//     MAY
// }
//stirng Enum
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
console.log(Month);
