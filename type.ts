type ageNname = {name: string, age: number}



let logs: (obj: ageNname) => void;

logs = (avenger:ageNname ) => {
  console.log(`${avenger.name} is ${avenger.age} years old`);
}


let logsTwo: (obj: ageNname) => void;

logsTwo = (avenger: ageNname) => {
  console.log(`${avenger.name} is ${avenger.age} years old`);
}

let logsThree: (obj: ageNname) => void;

logsThree = (avenger: ageNname) => {
  console.log(`${avenger.name} is ${avenger.age} years old`);
}