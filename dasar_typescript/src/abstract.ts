abstract class Vehicle {
    abstract wheels:number;

    start(): void{
        console.log("brummm brummm");
    }
}


class Car extends Vehicle {
    wheels:number = 4;
}

let car = new Car();
console.log(car.wheels);
car.start();