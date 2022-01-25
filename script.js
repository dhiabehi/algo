var removecartitembuttons = document.getElementsByClassName("removee");
// console.log(removecartitembuttons)
for (var i = 0; i < removecartitembuttons.length; i++) {
  var button = removecartitembuttons[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
  
    
  });
}


var addto = document.getElementsByClassName('check');

for (var i = 0; i < addto.length; i++) {
    addto[i].addEventListener("click",eventt) 
}
function eventt (e){
    var Total= Number(document.getElementById('cart-total-price').innerHTML)
    var price= e.target.parentElement.parentElement.querySelector('.cart-price').innerHTML;
    
    var quantity= e.target.parentElement.parentElement.querySelector('.cart-quantity-input').value
    if (e.target.checked) {

        Total+= Number(price)*Number(quantity)
         e.target.parentElement.parentElement.querySelector('.cart-quantity-input').setAttribute("disabled", "");
    }
    else { 
        Total-= Number(price)*Number(quantity)
        e.target.parentElement.parentElement.querySelector('.cart-quantity-input').removeAttribute("disabled");
   
    }
    console.log(Total)
    document.getElementById('cart-total-price').innerHTML=Total;

}
var heart=document.getElementsByClassName('like');
for (var i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click",liked)
    
}
function liked(L){
    L.target.style.color='red'

}