document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Botón para entrar desde la pantalla de inicio
    const btnEnter = document.getElementById('btn-enter');
    const heroScreen = document.getElementById('hero-screen');
    const mainApp = document.getElementById('main-app');

    if (btnEnter) {
        btnEnter.addEventListener('click', () => {
            heroScreen.style.display = 'none';
            mainApp.style.display = 'block';
        });
    }

    // 2. Control de Pestañas (Navegación)
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            navButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 3. Botón para intercambiar Semiosferas
    const btnSwap = document.getElementById('btn-swap');
    if (btnSwap) {
        btnSwap.addEventListener('click', swapSemiospheres);
    }
});

function swapSemiospheres() {
    const srcYear = document.getElementById('src-year');
    const tgtYear = document.getElementById('tgt-year');
    const srcLoc = document.getElementById('src-loc');
    const tgtLoc = document.getElementById('tgt-loc');

    // Intercambiar textos
    const tempYear = srcYear.textContent;
    srcYear.textContent = tgtYear.textContent;
    tgtYear.textContent = tempYear;

    const tempLoc = srcLoc.textContent;
    srcLoc.textContent = tgtLoc.textContent;
    tgtLoc.textContent = tempLoc;

    // Intercambiar imágenes de las estampillas
    const stampSrcImg = document.querySelector('#stamp-src img');
    const stampTgtImg = document.querySelector('#stamp-tgt img');
    const stampSrcLabel = document.querySelector('#stamp-src .stamp-label');
    const stampTgtLabel = document.querySelector('#stamp-tgt .stamp-label');

    const tempImgSrc = stampSrcImg.src;
    stampSrcImg.src = stampTgtImg.src;
    stampTgtImg.src = tempImgSrc;

    const tempLabel = stampSrcLabel.textContent;
    stampSrcLabel.textContent = stampTgtLabel.textContent;
    stampTgtLabel.textContent = tempLabel;
}
