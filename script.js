import data from './product.json' assert {type: 'json'};

sessionStorage.setItem("products", JSON.stringify(data));
let val = sessionStorage.getItem("products");
let products = JSON.parse(val);
console.log(products);


// NAVBAR HAMBURGER MENU
const nav = document.getElementById('navbar');
const hamBur = document.getElementById('bar');
const close = document.getElementById('close');

hamBur.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
});

//  FUNCTION NOT BEING CALLED IN ONCLICK ATTRIBUTE
// const verNavbar = ()=>{

// }

// const closeNavbar = ()=>{
// }
  



// let main = document.getElementById('main-img');

// let change = ()=>{
//     main.setAttribute('src','imgs/products/f4.jpg');
// }

function Productcards() {
    const card = document.getElementById('pro-cont');
    data.forEach( val =>{
        let cardElement = `
        <div class="pro">
            <img src="${val.imageUrl}" alt="">
            <div class="des">
                <span>${val.brand}</span>
                <h5>${val.name}</h5>
                <div class="star">
                    <i class="fas fa-star ${val.ratings >= 1 ? 'fa-gold' : 'fa-gray'}"></i>
                    <i class="fas fa-star ${val.ratings >= 2 ? 'fa-gold' : 'fa-gray'}"></i>
                    <i class="fas fa-star ${val.ratings >= 3 ? 'fa-gold' : 'fa-gray'}"></i>
                    <i class="fas fa-star ${val.ratings >= 4 ? 'fa-gold' : 'fa-gray'}"></i>
                    <i class="fas fa-star ${val.ratings == 5 ? 'fa-gold' : 'fa-gray'}"></i>
                </div>
            <h4>${val.price}</h4>
            </div>
            <a><i id="${val.id}" class="fa-sharp fa-solid fa-cart-shopping cart"></i></a>
        </div>`;
        card.innerHTML += cardElement;
    });
}
Productcards();


const cart = ()=> {
    const badge = document.getElementById('cart-badge');
    let quantity = [];
    let count=0;
    data.forEach(e =>{
        const shopBtn = document.getElementById(e.id);
        shopBtn.addEventListener('click', ele =>{
                quantity.push(ele.target.id);
                count=quantity.length;
                badge.innerText = count;
                sessionStorage.setItem("counter",JSON.stringify(quantity));  
                // badge.style.display = "flex";
                // console.log(quantity); 
        });
        // badge.style.display = "none";
    });
    // let valu = sessionStorage.getItem("counter");
    // let proIds = JSON.parse(valu);
    // // return proIds;
    // displayCart(proIds);
};cart();

const shpCart = document.getElementById('shop');
const checkout = document.getElementById('shoppingCart');

shpCart.addEventListener('click',()=>{
    let items = sessionStorage.getItem("products");
    let x = JSON.parse(items);

    let val = sessionStorage.getItem("counter");
    let proIds = JSON.parse(val);
    let arr = Object.values(proIds);

    // let redund = arr.filter(arr =>{
        
    //     return arr;
    // });
    // console.log(redund);
   
    let unique = [];
    arr.forEach((id,key)=>{
        // console.log(key);
        let qty=0;
        if(!unique.includes(id)){
            unique.push(id);
            qty++;
        }
        else{
            qty++;
        }
       x.forEach(prod =>{
        console.log(typeof unique[0]);
        let uniquenum = unique.map(Number);
        // if(prod.id == id)
            if(prod.id == uniquenum[key])
            {
                let cartItems = `
                <div class="prodDetails">
                        <img src="${prod.imageUrl}" alt="">
                        <div class="des">
                            <span>${prod.brand}</span>
                            <h5>${prod.name}</h5>
                            <div class="star">
                                <i class="fas fa-star ${prod.ratings >= 1 ? 'fa-gold' : 'fa-gray'}"></i>
                                <i class="fas fa-star ${prod.ratings >= 2 ? 'fa-gold' : 'fa-gray'}"></i>
                                <i class="fas fa-star ${prod.ratings >= 3 ? 'fa-gold' : 'fa-gray'}"></i>
                                <i class="fas fa-star ${prod.ratings >= 4 ? 'fa-gold' : 'fa-gray'}"></i>
                                <i class="fas fa-star ${prod.ratings == 5 ? 'fa-gold' : 'fa-gray'}"></i>
                            </div>
                            <h4>${prod.price}</h4>
                        </div>
                        <div class="func"> 
                            <h5>${qty}</h5>
                            <h3>Remove</h3>
                            <h3>Buy</h3>
                        </div>
                    </div>`;
                    checkout.innerHTML += cartItems;
            }
       });
    });
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
    document.getElementsByClassName('overlay')[0].style.display = "block";
    document.getElementById('blur').style.display="block";

    // console.log(products);
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