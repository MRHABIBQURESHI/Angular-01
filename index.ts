let Fun:(a:string , b:string) =>void
Fun : (Name:string , Greeting:string) => {
    console.log(`$(name) says $(greeting)`);

}

// Exmaple 2
let calc : (a: number , b: number ,c : string) => number;
calc = (numone : number , numbertwo : number , opration : string) =>{
    if(opration === 'add')
    {
        return numone + numbertwo;

    }
    else{
        return 0;
    }

}
