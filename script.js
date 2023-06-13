import data from './product.json' assert {type: 'json'};
sessionStorage.setItem("products", JSON.stringify(data));


// NAVBAR HAMBURGER MENU
const navBar = document.getElementById('navbar');
const hamBurMenu = document.getElementById('bar');
const closeBtn = document.getElementById('close');

hamBurMenu.addEventListener('click', ()=>{
    navBar.classList.toggle('active');
});

closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('active');
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
                    let searchVal = search(ele.target.id);
                    console.log(searchVal);
                    let vall= searchVal[0];
                    let indes = searchVal[1];
                    
                    console.log(indes);
                    console.log(vall)
                       if(vall == 0)
                       {
                        qtob.push({id:ele.target.id,qty:1});
                       }
                       else{
                        qtob[indes].qty+= 1;
                       }
                }
                badge.innerText = quantity.length;
                sessionStorage.setItem("counter",JSON.stringify(quantity));
                sessionStorage.setItem("quantity", JSON.stringify(qtob));
                badge.style.display = "block";
        });
    });
};cart();

const search = index => {
    let val=0,val2=0;
    qtob.forEach((value, ide) => {
        if(index == value.id){
            val = 1;
            val2 = ide;
        }
    });
    return [val, val2];
};


const shpCart = document.getElementById('shop');
const checkout = document.getElementById('shoppingCart');

shpCart.addEventListener('click',()=>{
    let items = sessionStorage.getItem("products");
    let productItems = JSON.parse(items);

    let z =sessionStorage.getItem("quantity");
    let qty1 = JSON.parse(z);

    qty1.forEach( val => {
        productItems.forEach(prod =>{
            if(val.id == prod.id )
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
                            <h5>${val.qty}</h5>
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
});

