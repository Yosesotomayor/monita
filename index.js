const YESBTN = document.querySelector('#YESBTN');

YESBTN.addEventListener('click',()=>{
    alert('Te amo moisinga <3');
});

const NOBTN = document.querySelector('#NOBTN');


NOBTN.addEventListener('mouseover', ()=>{
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NOBTN.style.setProperty('top', randomY + '%')
    NOBTN.style.setProperty('left', randomX + '%')
    NOBTN.style.setProperty('transform', 'translate(-${randomX}%, -${randomY}%)');
});