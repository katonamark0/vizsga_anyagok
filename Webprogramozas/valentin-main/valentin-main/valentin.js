const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const jumpHeart = document.getElementById('jumpHeart');

noBtn.addEventListener('click', () => {
    const padding = 20;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding * 2) + padding;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding * 2) + padding;


    noBtn.style.position = 'absolute';
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener('click', () => {

    
    createHeart();

    
    if (jumpHeart) {
        jumpHeart.classList.remove('jump');
        void jumpHeart.offsetWidth;
        jumpHeart.classList.add('jump');
    }

    
    setTimeout(() => {
        window.location.href = "igen.html";
    }, 600);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
}

yesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    createHeart();

    if (jumpHeart) {
        jumpHeart.classList.remove('jump');
        void jumpHeart.offsetWidth;
        jumpHeart.classList.add('jump');
    }

    setTimeout(() => {
        window.location.href = "./meglepodes.html";
    }, 600);
});
