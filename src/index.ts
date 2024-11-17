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
