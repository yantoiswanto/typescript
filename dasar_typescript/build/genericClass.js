"use strict";
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    // rest parameter ...elements
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
// let numbers = new List<number>(1,2,3,4);
// numbers.add(58)
// numbers.addMultiple(15,25)
// console.log(numbers.getAll())
var random = new List(1, 5, 'test', 4, "string 2");
random.add(55);
random.add("dsad");
random.addMultiple("dsadsa", 45);
console.log(random.getAll());
