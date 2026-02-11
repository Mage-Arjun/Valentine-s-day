function createHearts() {
    const container = document.body;
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random();
        container.appendChild(heart);
        
        animateHeart(heart);
    }
}

function animateHeart(el) {
    let pos = Math.random() * 100;
    setInterval(() => {
        pos -= 0.3; // Speed of floating upwards
        if (pos < -10) pos = 110;
        el.style.top = pos + 'vh';
    }, 50);
}

// Initialize hearts on load
window.onload = createHearts;