function init() {

    // on récupère dans le dom l'élement id app
    const root = document.querySelector('#app');

    // on crée un nouvel élement canvas
    const canvas = document.createElement('canvas');

    // on initialise le canvas pour en faire un espace en pixel et en 2D
    const ctx = canvas.getContext('2d');

    // on adapte la taille du canvas à la fenêtre
    // TODO: responsive
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    // on dessine le ciel (grand rectangle bleu de la taille du canvas) que l'on place aux coordonnées 0 0
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // on dessine le sol (même principe mais c'est la moitié de la hauteur du canvas
    ctx.fillStyle = 'green';
    ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height / 2);

    // on dessine le soleil avec un cercle
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height/4, 40, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();

    root.appendChild(canvas);
}

init();