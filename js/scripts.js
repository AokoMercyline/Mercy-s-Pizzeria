var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;

}

Getpizza.prototype.fullorder=function(){
    return this.name + ", " +  this.size + ", " + this.crust + ", " + this.topping
};

$(document).ready(function(){
    $("#myForm").submit(function(event){
        event.preventDefault();
        var name = $("#name").val();
        var size = $("#size").val();
        var crust = $("#crust").val();
        var topping = $("#topping").val();
        var quantity = $("#quantity").val();
        

        newpizzaorder = new Getpizza(name,size,crust,topping)
        alert("Your order is " + newpizzaorder.fullorder())

    });

}); 


























// $(document).ready(function(){
//     $("#button-pressed").click(function(){
//         $("#make-order").toggle("5000")
//     });
// });
// function Results (type,size,crust,toppings) {
//     this.type = type;
//     this.size= size;
//     this.crust= crust;
//     this.toppings=toppings;
// };
// Results.prototype.order = function() {
//     return "You have made an order of " + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
// };
// function TotalPrice (price, quantity, delivery,toppings,crust) {
//     this.price= price;
//     this.quantity=quantity;
//     this.delivery=delivery;
//     this.toppings=toppings;
//     this.crust=crust;
// };
// TotalPrice.prototype.finalTotal = function () {
//     return ( this.price + this.delivery + this.toppings + this.crust )* this.quantity ;
// };
// var sizePrices = [1000, 1300, 1700]
// var priceToppings = [100,130,140,150,120,100]
// var toppingsName= ["Roast chicken " , "Olive oil" , "Breade goat" ,"Spinach", "Romaine", "Tomato"]
// var crustNames= ["Thin Crust Pizza ", "Thick Crust Pizza "]
// var crustPrices = [50,60]
// var deliveryPrices = [0, 300];
// $(document).ready(function(){
//     $('form#myForm').submit(function (event) {
//         event.preventDefault();
//         var pizzaType = $('#name').val();
//         var pizzaSize = parseInt($('#size').val());
//         var pizzaToppings=parseInt($('#topping').val());
//         var priceCrust =parseInt($('#crust').val());
//         var pizzaTop = $('#top').val();
//         var pizzaQty = parseInt($('#quantity').val());
//         var pizzaPick = parseInt($('#delivery').val());
//         var price = sizePrices[pizzaSize - 1];
//         var DeliveryCost = deliveryPrices[pizzaPick - 1];
//         var ToppingsCost = priceToppings[pizzaToppings-1];
//         var crustCost = crustPrices[priceCrust-1]
//         var topNames = toppingsName[pizzaTop-1]
//         var crustName = crustNames[priceCrust-1]
//         newOrder = new Results(pizzaType,pizzaSize, crustName,topNames,crustName);
//         newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,crustCost);
//         if (pizzaPick===1){
//             alert( newOrder.order());
//             alert("Your bill is: " + newTotal.finalTotal());
//             alert("Thank you for shopping with us! " )
//             }else{
//                 if(pizzaPick===2){
//                 var location= prompt(" Where would your like your Pizza to be Delivered? ");
//                 var locations =["nairobi", "ngong road", "ngong lane plaza", "cbd", "moringa"]
//                 if((location !== locations[0]) && (location !== locations[1]) && (location !== locations[2]) && (location !== locations[3]) && (location !== locations[4]) && (location !== locations[5])){
//                     alert("Choose a location listed below")
//                     alert(locations)
//                 }
//                 else  {
//                     prompt("Please enter your phone number to facilitate communication and faster delivery.")
//                     alert("Your order has been received and it will be delivered to " + location + " An additional 200/= will be charged for delivery.");
//                     alert(newOrder.order());
//                     alert("Your bill is: " + newTotal.finalTotal());
//                     alert("Thank you for shopping with us! Your Order will be arriving soon." )
//                 }
//             }
//         }
//     })
// });