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
Getpizza.prototype.totalprice=function(){
    return pizaaprice + toppizaa + crustpizaa
}

var prices =[1000,1300, 1700]
var toppingprice=[100,130,140,150,120,100]
var crustPrices = [50,60]


$(document).ready(function(){
    $("#myForm").submit(function(event){
        event.preventDefault();
        var name =parseInt($("#name").val());
        var size =parseInt($("#size").val());
        var crust =parseInt($("#crust").val());
        var topping =parseInt($("#topping").val());
        var quantity =parseInt($("input#quantity").val());
        var delivery = $("#delivery").val();
        
        pizaaprice = prices[size-1]
        // alert(pizaaprice)
        toppizaa=toppingprice[topping-1]
        // alert(toppizaa)
        crustpizaa= crustPrices[crust-1]
        // alert(crustpizaa)
        // alert(quantity)
        // alert(delivery)

       

        newpizzaorder = new Getpizza(pizaaprice,crustpizaa,toppizaa)
        // alert("Your order is " + newpizzaorder.fullorder())
        
      
        if(delivery ==="pick" && quantity>0){
           alert("Your order is" + (newpizzaorder.totalprice()) *quantity)

        }
        else if(delivery==="deliver" && quantity>0){
            prompt("enter your location")
            prompt("Your phone number")
            alert("Your total price for the pizza is" + (newpizzaorder.totalprice()) *quantity + "and your price for  delivery is ksh.500 ")

        }

    });

}); 


























