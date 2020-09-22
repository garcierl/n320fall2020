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

function BuyItem() {
    firstCandy.buy();
    itemDiv.innerHTML = firstCandy.render()
}

/**let SecondCandy = new vendingmachine("M&M");
let itemDiv =document.getElementById("itemDiv");
itemDiv.innerHTML = SecondCandy.render();

function BuyItem() {
    SecondCandy.buy();
    itemDiv.innerHTML = SecondCandy.render()
}

let firstChips = new vendingmachine("Lays");
let itemDiv =document.getElementById("itemDiv");
itemDiv.innerHTML = firstChips.render();

function BuyItem() {
    firstChips.buy();
    itemDiv.innerHTML = firstChips.render()
} **/