import { TRANSLATION_DB } from './db.js';

export class UI {
    constructor() {
        this.srcYearEl = document.getElementById('src-year');
        this.srcLocEl = document.getElementById('src-loc');
        this.tgtYearEl = document.getElementById('tgt-year');
        this.tgtLocEl = document.getElementById('tgt-loc');
        
        this.boxSource = document.getElementById('box-source');
        this.boxTarget = document.getElementById('box-target');

        this.catalogSourceLabel = document.getElementById('catalog-source-label');
        this.catalogGrid = document.getElementById('catalog-grid');

        this.placeholder = document.getElementById('display-placeholder');
        this.card = document.getElementById('translation-card');

        this.cardSrcYear = document.getElementById('card-src-year');
        this.cardTgtYear = document.getElementById('card-tgt-year');
        this.cardSrcTerm = document.getElementById('card-src-term');
        this.cardTgtTerm = document.getElementById('card-tgt-term');
        this.cardType = document.getElementById('card-type');
        this.cardExplanationContainer = document.getElementById('card-explanation-container');
        this.cardExplanation = document.getElementById('card-explanation-text');
        this.cardStatus = document.getElementById('card-status');

        this.memoryList = document.getElementById('memory-list');
    }

    updateDirectionUI(sourceYear) {
        if (sourceYear === 1969) {
            this.srcYearEl.textContent = "1969";
            this.srcLocEl.textContent = "CAMBRIDGE (Borges mayor)";
            this.tgtYearEl.textContent = "1914";
            this.tgtLocEl.textContent = "GINEBRA (Borges joven)";
            this.boxSource.setAttribute('data-year', '1969');
            this.boxTarget.setAttribute('data-year', '1914');
            this.catalogSourceLabel.textContent = "1969 — CAMBRIDGE";
        } else {
            this.srcYearEl.textContent = "1914";
            this.srcLocEl.textContent = "GINEBRA (Borges joven)";
            this.tgtYearEl.textContent = "1969";
            this.tgtLocEl.textContent = "CAMBRIDGE (Borges mayor)";
            this.boxSource.setAttribute('data-year', '1914');
            this.boxTarget.setAttribute('data-year', '1969');
            this.catalogSourceLabel.textContent = "1914 — GINEBRA";
        }

        // Reset visual de ficha
        this.placeholder.classList.remove('hidden');
        this.card.classList.add('hidden');
    }

    renderCatalog(sourceYear, onSelectCallback) {
        this.catalogGrid.innerHTML = "";

        const availableEntries = TRANSLATION_DB.filter(entry => entry.sourceYear === sourceYear);

        availableEntries.forEach(entry => {
            const btn = document.createElement('button');
            btn.className = 'catalog-card-btn';
            btn.textContent = entry.term;

            btn.addEventListener('click', () => {
                document.querySelectorAll('.catalog-card-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                onSelectCallback(entry);
            });

            this.catalogGrid.appendChild(btn);
        });
    }

    renderCard(result, sourceYear, targetYear) {
        this.placeholder.classList.add('hidden');
        this.card.classList.remove('hidden');

        this.cardSrcYear.textContent = sourceYear;
        this.cardTgtYear.textContent = targetYear;
        this.cardSrcTerm.textContent = result.term.toUpperCase();
        this.cardTgtTerm.textContent = result.translation;
        this.cardType.textContent = result.type;

        if (result.explanation && result.explanation.trim() !== "") {
            this.cardExplanationContainer.classList.remove('hidden');
            this.cardExplanation.textContent = result.explanation;
        } else {
            this.cardExplanationContainer.classList.add('hidden');
            this.cardExplanation.textContent = "";
        }

        this.cardStatus.textContent = "FICHA DE TRADUCCIÓN // SECUENCIA OK";
    }

    addMemoryItem(entry) {
        if (!this.memoryList) return;

        const emptyMsg = this.memoryList.querySelector('.empty-memory');
        if (emptyMsg) emptyMsg.remove();

        const item = document.createElement('div');
        item.className = 'memory-item';

        item.innerHTML = `
            <span><strong>${entry.term.toUpperCase()}</strong> (${entry.sourceYear} → ${entry.targetYear})</span>
            <span>${entry.translation} [${entry.type}]</span>
        `;

        this.memoryList.prepend(item);
    }
}
