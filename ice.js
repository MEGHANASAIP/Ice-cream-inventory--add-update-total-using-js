const inventory={
    1:{flavour:"vennila",price:50,quantity:2},
    2:{flavour:"chocolate",price:80,quantity:5},
    2:{flavour:"cookie and cream",price:120,quantity:10},
    4:{flavour:"butterscotch",price:40,quantity:4}
}
addicecream(5,"blackcurrent",35,4);
addicecream(6,"strawberry",25,2);
updateicecream(2,"darkchocolate");
function addicecream(key,flavour,price,quantity)
{
    inventory[key]={flavour:flavour,price:price,quantity:quantity}
}
console.log(inventory)
function updateicecream(key,flavour)
{
    inventory[key].flavour=flavour;
}
let total=0;
for(let i in inventory)
{
    total=total+(inventory[i].price * inventory[i].quantity)
}
console.log("the total cost of all the icecreams in the inventory is");
console.log(total)




