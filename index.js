const container = document.querySelector('.container');
const registerlink = document.querySelector('.reglink');
const loginlink = document.querySelector('.loginlink');

registerlink.addEventListener('click',()=>{
    container.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    container.classList.remove('active');
});