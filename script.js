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


// const badge = document.getElementById('cart-badge');
// const btn = document.getElementById('cart-btn');
// let count=0;

// btn.addEventListener('click', ()=>{
//     count++;
//     // badge.style.display= "inline";
//     badge.innerHTML = count;
// });

let shirts = [
    {
        id: 1,
        name: 'T-shirt',
        brand: 'adidas',
        ratings: 5,
        price: 1200,
        imageUrl: 'imgs/products/f1.jpg'
    },
    {
        id: 2,
        name: 'T-shirt',
        brand: 'Puma',
        ratings: 5,
        price: 600,
        imageUrl: 'imgs/products/f2.jpg'
    },
    {
        id: 3,
        name: 'T-shirt',
        brand: 'Puma',
        ratings: 5,
        price: 160,
        imageUrl: 'imgs/products/f3.jpg'
    },
    {
        id: 4,
        name: 'T-shirt',
        brand: 'Puma',
        ratings: 5,
        price: 900,
        imageUrl: 'imgs/products/f4.jpg'
    },
];


function initShoppingItems() {
    // for(let item of shirts) {
    //     let itemElem = document.createElement("div");
    //     itemElem.classList.add('pro');
        
    //     let itemImg = document.createElement("span");
    //     itemImg.innerText = item.brand;

    //     itemElem.appendChild(itemImg);

    //     let shirtElement = `
    //     <img src="${item.imageUrl}" alt="">
    //     <div class="des">
    //         <span>${item.brand}</span>
    //         <h5>${item.name}</h5>
    //         <div class="star">
    //             <i class="fas ${item.ratings >= 1 ? 'fa-star' : 'fa-gray'}"></i>
    //             <i class="fas ${item.ratings >= 2 ? 'fa-star' : 'fa-gray'}"></i>
    //             <i class="fas ${item.ratings >= 3 ? 'fa-star' : 'fa-gray'}"></i>
    //             <i class="fas ${item.ratings >= 4 ? 'fa-star' : 'fa-gray'}"></i>
    //             <i class="fas ${item.ratings == 5 ? 'fa-star' : 'fa-gray'}"></i>
    //         </div>
    //         <h4>Rs ${item.price}</h4>
    //     </div>
    //     <a href="#" onClick=addShirtToCart(${item.id})><i class="fa-sharp fa-solid fa-cart-shopping cart"></i></a>
    // `;
    // console.log(itemElem)
    // itemElem.append(shirtElement);
    // document.getElementById('product1').appendChild(itemElem);
    // }
    
    const card = document.getElementsByClassName('pro-container');

    for(let item of shirts){
        let cardElement = `
        <div class="pro">
            <img src="${item.imageUrl}" alt="">
            <div class="des">
                <span>${item.brand}</span>
                <h5>${item.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            <h4>${item.price}</h4>
            </div>
            <a class="cart-btn"><i class="fa-sharp fa-solid fa-cart-shopping cart"></i></a>
        </div>`;

        card.innerHTML = cardElement;
        console.log(card.innerHTML);
    }
}

initShoppingItems();





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