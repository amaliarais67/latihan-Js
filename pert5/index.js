// OOP => Object Oriented Programming

class Cookie {
    constructor(name, price, ingredients, type){
      this.name = name || "";  
      this.price = price || 0;
      this.ingredients = ingredients || [];
      this.type = type || "";// by default 
    }
}
class Chocolate extends Cookie{
    constructor(name, price, ingredients,isSweat){
        super(name, price, ingredients)
        this.isSweat = isSweat || false;
    }

}
class Sweet extends Cookie{
    constructor(name, price, ingredients,isSweat){
        super(name, price, ingredients)
        this.isSweat = isSweat|| false;
    }
}
class Strawberry extends Cookie{
    constructor(name, price, ingredients,isSweat){
        super(name, price, ingredients)
        this.isSweat = isSweat || false;
    }
}

const chocosplit = new Chocolate ("Choco Split", 15000, ["Tepung", "Mentega","Chocolate"], false) 
const berrysplit = new Strawberry ("Berry Split", 25000, ["Tepung", "Mentega","Strawberry"], false) 
const sweetmeringue = new Sweet ("Sweet Meringue", 35000, ["Tepung", "Mentega","Gula"], false) 
// factory class => Class yang lebih berfokus terhadap method
// CRUD => Create Read Update Delete

class Kitchen {
    constructor(container){
        this.container = container ;
    }
    showCookies() {
        console.log("Cookie yang tersedia:")
        //ES6
        this.container.forEach((contain,index) => {
            console.log(`${index+ 1}. ${contain.name}, Price :${contain.price}, Ingredients :${contain.ingredients}, Type :${contain.type}, isSweat :${contain.isSweat}`);
        });

    }
    addBake(cookie){
        this.container.push(cookie);
    }
    removeEat(cookieName){
        this.container = this.container.filter(contain => contain.name !== cookieName)
        // feedback
        console.log(`Kue: ${cookieName} has been removed`)
    }
    // update
    addSugar(cookieName, newSweat){
        this.container = this.container.map(contain => {
            if(contain.name === cookieName){
                contain.isSweat= newSweat
            }
            return contain
        })
        // feedback
        console.log(`kue: ${cookieName} has been updated`)
    }
}


    













//let show = new Chocolate("cupcake", 15000, ["tepung","Air","Telur"]);
// showCookies.bake("cupcake")
const showcookies = new Kitchen([])
showcookies.addBake(berrysplit)
showcookies.addBake(chocosplit)
showcookies.addBake(sweetmeringue)
showcookies.removeEat("Sweet Meringue")
showcookies.addSugar("Berry Split",true)
showcookies.showCookies()