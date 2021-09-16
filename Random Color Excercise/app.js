const button = document.querySelector('.btn');
const h1 = document.querySelector('h1');


button.addEventListener('click',function(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor =`rgb(${r},${g},${b})`;
    h1.innerText = newColor;
    document.body.style.backgroundColor=newColor;

})

