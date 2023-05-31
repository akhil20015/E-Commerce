const nav = document.getElementById('navbar');
const bar = document.getElementById('bar')

// const verNavbar = ()=>{
//     nav.classList.add('active');
// }
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
else{
    nav.classList.remove('active');
}
