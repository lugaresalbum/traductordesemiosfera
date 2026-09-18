document.addEventListener('DOMContentLoaded', () => {
    const btnSwap = document.getElementById('btn-swap');
    
    if (btnSwap) {
        btnSwap.addEventListener('click', swapSemiospheres);
    }
});

/**
 * Invierte las semiosferas de origen y destino, 
 * actualizando los textos y alternando las estampillas de Borges.
 */
function swapSemiospheres() {
    // Intercambio de textos de año y ubicación
    const srcYear = document.getElementById('src-year');
    const tgtYear = document.getElementById('tgt-year');
    const srcLoc = document.getElementById('src-loc');
    const tgtLoc = document.getElementById('tgt-loc');

    const tempYear = srcYear.textContent;
    srcYear.textContent = tgtYear.textContent;
    tgtYear.textContent = tempYear;

    const tempLoc = srcLoc.textContent;
    srcLoc.textContent = tgtLoc.textContent;
    tgtLoc.textContent = tempLoc;

    // Intercambio de imágenes y etiquetas de las estampillas
    const stampSrcImg = document.querySelector('#stamp-src img');
    const stampTgtImg = document.querySelector('#stamp-tgt img');
    const stampSrcLabel = document.querySelector('#stamp-src .stamp-label');
    const stampTgtLabel = document.querySelector('#stamp-tgt .stamp-label');

    // Cambiar las rutas de las fotos
    const tempImgSrc = stampSrcImg.src;
    stampSrcImg.src = stampTgtImg.src;
    stampTgtImg.src = tempImgSrc;

    // Cambiar el texto de la viñeta inferior
    const tempLabel = stampSrcLabel.textContent;
    stampSrcLabel.textContent = stampTgtLabel.textContent;
    stampTgtLabel.textContent = tempLabel;
}
