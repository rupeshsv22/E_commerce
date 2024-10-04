// Get elements by their IDs
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

// Add click event listener to the hamburger icon
if (bar){
bar.addEventListener('click',  ()=>{
    // Toggle the 'active' class on the navbar
    navbar.classList.add('active');
});
}

if (close){
close.addEventListener('click',  ()=>{
    // Toggle the 'active' class on the navbar
    navbar.classList.remove('active');
});
}
