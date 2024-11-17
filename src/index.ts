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


console.log(isLegal({firstname:"sachin",age:20}));
