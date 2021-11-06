class List<T>{
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(element: T): void {
        this.data.push(element);
    }

    // rest parameter ...elements
    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }


    getAll(): T[] {
        return this.data;
    }
}


// let numbers = new List<number>(1,2,3,4);
// numbers.add(58)
// numbers.addMultiple(15,25)
// console.log(numbers.getAll())


let random = new List<number | string>(1, 5, 'test', 4, "string 2");
random.add(55)
random.add("dsad")
random.addMultiple("dsadsa", 45)
console.log(random.getAll());