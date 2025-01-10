


 export interface Passenger {
    name: string;
    children?:string[];
}


const passenger1: Passenger = {
    name: "Jose",
}

const passenger2: Passenger = {
    name: "Melissa",
    children: ["Natalia","Elizabeth"]
}

const printChildren = (passenger: Passenger ) => {

const howManyChildren = passenger.children?.length;


    console.log(passenger.name,howManyChildren);

}

printChildren(passenger2);