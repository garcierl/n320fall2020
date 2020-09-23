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
        if(this.item == 0)this.buyButton.setProperty("enabled", false);
            this.item --;
        }
    

    
        
    
}

let firstCandy = new vendingmachine("Hershey");
let itemDiv =document.getElementById("itemDiv");
itemDiv.innerHTML = firstCandy.render();

function BuyItem1() {
    firstCandy.buyButton = document.getElementById("BuyButton")
    firstCandy.buy();
    itemDiv.innerHTML = firstCandy.render()
}

let SecondCandy = new vendingmachine("M&M");
let item2Div =document.getElementById("item2Div");
item2Div.innerHTML = SecondCandy.render();

function BuyItem2() {
    SecondCandy.buyButton = document.getElementById("BuyButton")
    SecondCandy.buy();
    item2Div.innerHTML = SecondCandy.render()
} 

let firstChips = new vendingmachine("Lays");
let item3Div =document.getElementById("item3Div");
item3Div.innerHTML = firstChips.render();

function BuyItem3() {
    firstChips.buyButton = document.getElementById("BuyButton")
    firstChips.buy();
    item3Div.innerHTML = firstChips.render()
}