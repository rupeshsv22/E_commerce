 const bar= document.getElementById('bar');
 const nav= document.getElementById('navbar');

// for navbar
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}