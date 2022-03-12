// Inheritance

// Parent Class
class Vehicle {
    constructor(name, type, cc, engine, tags) {
        this.name = name || "";
        this.type = type || "";
        this.cc = cc || 0;
        this.engine = engine || false;
        this.tags = tags || []; // by default
    }
}

// Children Class
class Sedan extends Vehicle {
    constructor(name, cc, nitro) {
        super(name, "sedan", cc);
        this.nitro = nitro
    }
}
class Pickup extends Vehicle {
    constructor(name, cc, box) {
        super(name, "pickup", cc);
        this.box = box
    }
}
class SUV extends Vehicle {
    constructor(name, cc, wheel) {
        super(name, "suv", cc);
        this.wheel = wheel
    }
}
const civic = new Sedan("Civic", 1500, "N20")
const colt = new Pickup("Colt", 2500, 3)
const tiguan = new SUV("Tiguan", 5000, "4WD")

// console.log(civic)
// console.log(colt)
// console.log(tiguan)

// Factory Class => Class yang lebih berfokus terhadap method
// CRUD => Create Read Update Delete

class Showroom {
    constructor(rooms) {
        this.rooms = rooms || [];
    }
    addVehicle(vehicle) {
        this.rooms.push(vehicle);
    }
    showVehicles() {
        console.log("Vehicle List:")
        for (let i = 0; i < this.rooms.length; i++) {
            console.log(`${i + 1}. ${this.rooms[i].name}, type: ${this.rooms[i].type}, cc: ${this.rooms[i].cc}`)
        }
        // this.rooms.forEach((room,i) => {
        //     console.log(`${i+1}. ${room.name}, type: ${room.type}, cc: ${room.cc}`)
        // })
    }
    removeVehicle(vehicleName){
        // ES5
        // let tempArray = []
        // for(let i = 0; i < this.rooms.length; i++){
        //     if(this.rooms[i].name !== vehicleName){
        //         tempArray.push(this.rooms[i])
        //     }
        // }
        // this.rooms = tempArray;

        // ES6
        this.rooms = this.rooms.filter(room => room.name !== vehicleName)
        // feedback
        console.log(`Vehicle name: ${vehicleName} has been removed`)
    }
    editVehicle(vehicleName, newCC){
        // ES5
        // let tempArray = []
        // for(let i = 0; i < this.rooms.length; i++){
        //     if(this.rooms[i].name === vehicleName){
        //         this.rooms[i].cc = newCC
        //     }
        //     tempArray.push(this.rooms[i])
        // }
        // this.rooms = tempArray
        
        
        // ES 6
        this.rooms = this.rooms.map(room => {
            if(room.name === vehicleName){
                room.cc = newCC
            }
            return room
        })
        // feedback
        console.log(`Vehicle name: ${vehicleName} has been updated`)
    }
}

// showroom.rooms berisi array of instances
const showroom = new Showroom();
showroom.addVehicle(civic)
showroom.addVehicle(colt)
showroom.addVehicle(tiguan)
console.log(showroom.rooms)
showroom.removeVehicle("Colt")
showroom.editVehicle("Civic", 3500)
showroom.showVehicles()