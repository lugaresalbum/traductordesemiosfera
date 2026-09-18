// VARIABLES DE ESTADO
let sourceYear = 1969;

// ELEMENTOS DEL DOM
document.addEventListener('DOMContentLoaded', () => {
    const btnEnter = document.getElementById('btn-enter');
    const screenIntro = document.getElementById('screen-intro');
    const appContainer = document.getElementById('app-container');
    
    const btnSwap = document.getElementById('btn-swap');
    const srcYearEl = document.getElementById('src-year');
    const srcLocEl = document.getElementById('src-loc');
    const tgtYearEl = document.getElementById('tgt-year');
    const tgtLocEl = document.getElementById('tgt-loc');
    const srcStamp = document.getElementById('src-stamp');
    const tgtStamp = document.getElementById('tgt-stamp');
    const catalogSourceLabel = document.getElementById('catalog-source-label');
    const catalogButtons = document.getElementById('catalog-buttons');

    const placeholder = document.getElementById('card-placeholder');
    const card = document.getElementById('translation-card');
    const cardSrcTerm = document.getElementById('card-src-term');
    const cardTgtTerm = document.getElementById('card-tgt-term');
    const cardPrecision = document.getElementById('card-precision');
    const cardExplanation = document.getElementById('card-explanation');
    const historyList = document.getElementById('history-list');

    // 1. INGRESO A LA APP
    if (btnEnter) {
        btnEnter.addEventListener('click', () => {
            screenIntro.style.display = 'none';
            appContainer.classList.remove('hidden');
            window.scrollTo(0, 0);
        });
    }

    // 2. NAVEGACIÓN ENTRE PESTAÑAS
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 3. CAMBIO DE DIRECCIÓN (INVERTIR SEMIOSFERAS)
    if (btnSwap) {
        btnSwap.addEventListener('click', () => {
            sourceYear = sourceYear === 1969 ? 1914 : 1969;
            updateDirectionUI();
            renderCatalog();
        });
    }

    function updateDirectionUI() {
        if (sourceYear === 1969) {
            srcYearEl.textContent = "1969";
            srcLocEl.textContent = "CAMBRIDGE (Borges mayor)";
            tgtYearEl.textContent = "1914";
            tgtLocEl.textContent = "GINEBRA (Borges joven)";
            catalogSourceLabel.textContent = "1969 — CAMBRIDGE";

            if (srcStamp) srcStamp.src = "borges-viejo.jpg";
            if (tgtStamp) tgtStamp.src = "borges-joven.jpg";
        } else {
            srcYearEl.textContent = "1914";
            srcLocEl.textContent = "GINEBRA (Borges joven)";
            tgtYearEl.textContent = "1969";
            tgtLocEl.textContent = "CAMBRIDGE (Borges mayor)";
            catalogSourceLabel.textContent = "1914 — GINEBRA";

            if (srcStamp) srcStamp.src = "borges-joven.jpg";
            if (tgtStamp) tgtStamp.src = "borges-viejo.jpg";
        }

        placeholder.classList.remove('hidden');
        card.classList.add('hidden');
    }

    // 4. RENDERIZAR CATÁLOGO DE TÉRMINOS
    function renderCatalog() {
        if (!window.dictionary) return;
        catalogButtons.innerHTML = '';

        const terms = Object.keys(window.dictionary);
        terms.forEach(term => {
            const btn = document.createElement('button');
            btn.className = 'btn-term';
            btn.textContent = term;
            btn.addEventListener('click', () => selectTerm(term));
            catalogButtons.appendChild(btn);
        });
    }

    // 5. SELECCIONAR UN TÉRMINO Y MOSTRAR TRADUCCIÓN
    function selectTerm(term) {
        if (!window.dictionary || !window.dictionary[term]) return;

        const data = window.dictionary[term];
        const isFrom1969 = sourceYear === 1969;

        const srcText = isFrom1969 ? data.term1969 : data.term1914;
        const tgtText = isFrom1969 ? data.term1914 : data.term1969;

        cardSrcTerm.textContent = srcText;
        cardTgtTerm.textContent = tgtText;
        cardPrecision.textContent = data.precision;
        cardExplanation.textContent = data.explanation;

        placeholder.classList.add('hidden');
        card.classList.remove('hidden');

        // Agregar al historial
        addHistory(srcText, tgtText);
    }

    // 6. HISTORIAL
    function addHistory(src, tgt) {
        const emptyMsg = historyList.querySelector('.empty-history');
        if (emptyMsg) emptyMsg.remove();

        const li = document.createElement('li');
        li.textContent = `[${sourceYear} → ${sourceYear === 1969 ? 1914 : 1969}] ${src} ➔ ${tgt}`;
        historyList.prepend(li);
    }

    // Inicializar catálogo al cargar
    renderCatalog();
});
