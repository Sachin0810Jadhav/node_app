interface User  {
    firstname : string;
    age: number;
}

const isLegal = (user: User ): boolean =>{
    if(user.age>=18){
        return true;
    }
    return false;
}

const printFirstName= (user :User):void=> {
    console.log(user.firstname)
}

printFirstName({firstname:"sachin",age:20})


console.log(isLegal({firstname:"sachin",age:20}));

// types and interface


interface User1 {           // interfaces can be implemented in classes creating a code strictness that a class should contain everything that a interface has or u will get compliation errors
    firstname : string;
    age: number;
    greet(phrase : string):void;
}


class Employee implements User1 {
    firstname : string;
    age: number;

    constructor(n: string, a: number){
        this.age= a;
        this.firstname = n;
    }

    greet(phrase:string): void {
        console.log(phrase)
    }
}
type User2  = {              // same as interface but cant be implemented and gives additonal features like union , or 
    firstname : string;
    lastname : string;
    age: number;

}

type User3  = {              // same as interface but cant be implemented and gives additonal features like union , or 
    firstname : string;
    greet(phrase: string): void,
    age: number;

}

// suppose a id thats a string or num

type IdType = number | string;

const id1  : IdType = "x2550";

const id2 : IdType = 25;

type unionPerson  = User2 & User3;

