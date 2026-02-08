document.addEventListener('DOMContentLoaded', () => {

    const envelope = document.getElementById('envelope');
    const letter = document.querySelector('.letter');

    /* =========================
       Envelope Toggle (SMART)
    ========================== */
    envelope.addEventListener('click', (e) => {
        // If the tap originated inside the letter, DO NOTHING
        if (e.target.closest('.letter')) return;

        envelope.classList.toggle('open');
    });

    /* =========================
       Heart Canvas Animation
    ========================== */
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const hearts = [];

    class Heart {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * window.innerWidth;
            this.y = window.innerHeight + 40;
            this.size = Math.random() * 10 + 6;
            this.speed = Math.random() * 1.2 + 0.5;
            this.opacity = Math.random() * 0.4 + 0.3;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#ff4d6d';

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(
                this.x - this.size / 2, this.y - this.size / 2,
                this.x - this.size, this.y + this.size / 3,
                this.x, this.y + this.size
            );
            ctx.bezierCurveTo(
                this.x + this.size, this.y + this.size / 3,
                this.x + this.size / 2, this.y - this.size / 2,
                this.x, this.y
            );
            ctx.fill();
            ctx.restore();
        }

        update() {
            this.y -= this.speed;
            if (this.y < -40) this.reset();
        }
    }

    for (let i = 0; i < 30; i++) {
        hearts.push(new Heart());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hearts.forEach(h => {
            h.update();
            h.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
});
