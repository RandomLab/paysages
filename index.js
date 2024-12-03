function init() {

    const root = document.querySelector('#app');

    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'green';
    ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height / 2);

    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height/4, 40, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();

    root.appendChild(canvas);
}

init();