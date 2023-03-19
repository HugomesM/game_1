const player = document.querySelector('.player');
const game = document.getElementById('game');
const car = document.querySelector('.car');
game.addEventListener('click',()=>{
    if(!player.classList.contains('jump')){ player.classList.add('jump');}
    setTimeout(()=> {
        player.classList.remove('jump');
    }, 1000);
});

const loop = setInterval(()=>{
    const left = car.offsetLeft;
    const bottom = +window.getComputedStyle(player).bottom.replace('px','');
    if (left < 25 && left > 0 && bottom < 25){
        car.style.animation = 'none';
        car.style.display = 'none';
        alert('voce perdeu');
    }
}, 10);