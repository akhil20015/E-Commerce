import data from './product.json' assert {type: 'json'};

sessionStorage.setItem("products", JSON.stringify(data));
let val = sessionStorage.getItem("products");
let products = JSON.parse(val);
console.log(products);


// NAVBAR HAMBURGER MENU
const nav = document.getElementById('navbar');
const verNavbar = ()=>{
    nav.classList.toggle('active');
}

const closeNavbar = ()=>{
    nav.classList.remove('active');
}
  

// let main = document.getElementById('main-img');

// let change = ()=>{
//     main.setAttribute('src','imgs/products/f4.jpg');
// }

function Productcards() {
    const card = document.getElementById('pro-cont');
    for(let item in data){

        let cardElement = `
        <div class="pro">
            <img src="${data[item].imageUrl}" alt="">
            <div class="des">
                <span>${data[item].brand}</span>
                <h5>${data[item].name}</h5>
                <div class="star">
                    <i class="fas fa-star ${data[item].ratings >= 1 ? 'fa-gold' : 'fa-gray'}"></i>
                    <i class="fas fa-star ${data[item].ratings >= 2 ? 'fa-gold' : 'fa-gray'}"></i>
                    <i class="fas fa-star ${data[item].ratings >= 3 ? 'fa-gold' : 'fa-gray'}"></i>
                    <i class="fas fa-star ${data[item].ratings >= 4 ? 'fa-gold' : 'fa-gray'}"></i>
                    <i class="fas fa-star ${data[item].ratings == 5 ? 'fa-gold' : 'fa-gray'}"></i>
                </div>
            <h4>${data[item].price}</h4>
            </div>
            <a><i id="${data[item].id}" class="fa-sharp fa-solid fa-cart-shopping cart"></i></a>
        </div>`;
        card.innerHTML += cardElement;
    }
}
Productcards();


const badge = document.getElementById('cart-badge');
let quantity = [];
data.forEach(e =>{
    const shopBtn = document.getElementById(e.id);
    shopBtn.addEventListener('click', ele =>{
        quantity.push(ele.target.id);
        let count=quantity.length;
        badge.innerText = count;
        console.log(quantity);
        // sessionStorage.setItem("counter",quantity);
    });
});

let shoppingCart = sessionStorage.getItem("counter");
// console.log(shoppingCart);
// sessionStorage.removeItem("quantites")
// sessionStorage.setItem("quantites",shoppingCart);

// console.log(shopBtn);
// shopBtn.addEventListener('click', (e)=>{
//     console.log(e);
//     count++;
//     badge.innerText = count;

// });





function getShirt(shirtId) {
    let shirt = shirts.find(s=> s.id == shirtId);

}

function addShirtToCart(shirtId) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) ?? [];

    let alreadyAdded = cartItems.findIndex(cart=> cart.id == shirtId );

    if(alreadyAdded > -1) {
        alreadyAdded.quantity += 1;
    } else {
        let newItem = { dressId: shirtId, quantity: 1};
        cartItems.push(newItem);
    }

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}