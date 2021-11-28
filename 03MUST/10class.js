// Def klasy
class User{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        return `${this.name} powiedz cześć!`;
    }
}

//Wykorzystanie
let user = new User("Dorota");
console.log(user.sayHello());

class Employee extends User{
    constructor(name, salary){
        // wywołanie konstruktora klasy User
        super(name);
        //dodanie nowej właściwości klasy
        this.salaty = salary;
    }

    //nowa metoda klasy
    raiseSalary(){
        this.salary +=10000;
        return this.salaty;
    }
}

// Wykorzystanie
let employee = new Employee("Jan",1999)
console.log(employee);
employee.raiseSalary();
console.log(employee);