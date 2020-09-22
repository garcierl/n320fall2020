class vendingmachine {
    constructor(name){
        this.name = name;
        this.item = 10;
        this.cost = 1.25;
    }

    render() {
        return `
    <div> ${this.name}</div>
    <div>Item: ${this.item}</div>
    <div>Cost: ${this.cost}</div>
        `;
    }

    buy() {
        this.item --;
    }
    
        
    
}

let firstCandy = new vendingmachine("Hershey");
let itemDiv =document.getElementById("itemDiv");
itemDiv.innerHTML = firstCandy.render();

function BuyItem1() {
    firstCandy.buy();
    itemDiv.innerHTML = firstCandy.render()
}

let SecondCandy = new vendingmachine("M&M");
let item3Div =document.getElementById("item3Div");
item3Div.innerHTML = SecondCandy.render();

function BuyItem2() {
    SecondCandy.buy();
    item3Div.innerHTML = SecondCandy.render()
} 

let firstChips = new vendingmachine("Lays");
let item2Div =document.getElementById("item2Div");
item2Div.innerHTML = firstChips.render();

function BuyItem3() {
    firstChips.buy();
    item2Div.innerHTML = firstChips.render()
}