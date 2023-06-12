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



// document.getElementsByClassName('close2')[0].addEventListener('click', () => {
//     // document.getElementsByTagName('body')[0].style.overflow = "visible";
//     // document.getElementsByClassName('overlay')[0].style.display = "none";
//     // document.getElementById('blur').style.display="none";
//     console.log("hi");
// });

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
            <h4>Rs ${val.price}</h4>
            </div>
            <a><i id="${val.id}" class="fa-sharp fa-solid fa-cart-shopping cart"></i></a>
        </div>`;
        card.innerHTML += cardElement;
    });
}
Productcards();

let qtob = [];
const cart = ()=> {
    const badge = document.getElementById('cart-badge');
    let quantity = [];
 
    data.forEach(e =>{
        const shopBtn = document.getElementById(e.id);
        shopBtn.addEventListener('click', ele =>{
                quantity.push(ele.target.id);

                console.log(qtob);
                if(qtob.length == 0)
                {
                    qtob.push({id:ele.target.id,qty:1});
                }
                else{
                    qtob.forEach((val , id) => {
                       if(!(val.id == ele.target.id))
                       {
                        qtob.push({id:ele.target.id,qty:1});
                        // break;
                       }
                       else{
                        val.qty+= 1;
                       }
                    });
                }
                // console.log(quantity);
                badge.innerText = quantity.length;
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
console.log(qtob);

const shpCart = document.getElementById('shop');
const checkout = document.getElementById('shoppingCart');

shpCart.addEventListener('click',(e)=>{
    let items = sessionStorage.getItem("products");
    let x = JSON.parse(items);

    let val = sessionStorage.getItem("counter");
    let proIds = JSON.parse(val);
    let arr = Object.values(proIds);

    // let redund = arr.filter(arr =>{
        
    //     return arr;
    // });
    // console.log(redund);

    console.log(arr)
    let unique = [];
    let qty=[];
    arr.forEach(( id, key ) => {
        // console.log(key);
        if(!unique.includes(id) & qty.includes !=0) {
            unique.push(id);
            qty[id]=1;
        } else{
            unique.forEach( key2 => {
                if(unique[key2] == key )
                {
                    qty[id]++;
                }
            });
        }
        console.log(unique);
        console.log(qty);
       x.forEach(prod =>{
        // console.log(typeof unique[0]);
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
                            <h4>Rs ${prod.price}</h4>
                        </div>
                        <div class="func"> 
                            <h5>${qty[id]}</h5>
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