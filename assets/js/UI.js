export class UI {
    constructor() {
        this.srcYearEl = document.getElementById('src-year');
        this.srcLocEl = document.getElementById('src-loc');
        this.tgtYearEl = document.getElementById('tgt-year');
        this.tgtLocEl = document.getElementById('tgt-loc');
        
        this.boxSource = document.getElementById('box-source');
        this.boxTarget = document.getElementById('box-target');

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

        this.tagRiver = document.getElementById('tag-river');
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
            
            if (this.tagRiver) {
                this.tagRiver.textContent = "Río Charles";
                this.tagRiver.setAttribute('data-term', 'Río Charles');
            }
        } else {
            this.srcYearEl.textContent = "1914";
            this.srcLocEl.textContent = "GINEBRA (Borges joven)";
            this.tgtYearEl.textContent = "1969";
            this.tgtLocEl.textContent = "CAMBRIDGE (Borges mayor)";
            this.boxSource.setAttribute('data-year', '1914');
            this.boxTarget.setAttribute('data-year', '1969');
            
            if (this.tagRiver) {
                this.tagRiver.textContent = "Río Ródano";
                this.tagRiver.setAttribute('data-term', 'Río Ródano');
            }
        }
    }

    renderCard(result, query, sourceYear, targetYear) {
        this.placeholder.classList.add('hidden');
        this.card.classList.remove('hidden');

        this.cardSrcYear.textContent = sourceYear;
        this.cardTgtYear.textContent = targetYear;
        this.cardSrcTerm.textContent = query.toUpperCase();

        if (result) {
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
        } else {
            this.cardTgtTerm.textContent = "NO EXISTE UN EQUIVALENTE REGISTRADO";
            this.cardType.textContent = "NIVEL DE PRECISIÓN: NULO";
            this.cardExplanationContainer.classList.add('hidden');
            this.cardExplanation.textContent = "";
            this.cardStatus.textContent = "REGISTRO TENTATIVO // SIN EQUIVALENCIA";
        }
    }

    addMemoryItem(query, result, sourceYear, targetYear) {
        if (!this.memoryList) return;

        const emptyMsg = this.memoryList.querySelector('.empty-memory');
        if (emptyMsg) emptyMsg.remove();

        const item = document.createElement('div');
        item.className = 'memory-item';
        
        const targetText = result ? result.translation : "SIN EQUIVALENTE";
        const typeText = result ? result.type : "PRECISIÓN: NULA";

        item.innerHTML = `
            <span><strong>${query.toUpperCase()}</strong> (${sourceYear} → ${targetYear})</span>
            <span>${targetText} [${typeText}]</span>
        `;

        this.memoryList.prepend(item);
    }
}
