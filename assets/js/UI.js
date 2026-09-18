export class UI {
    constructor() {
        // Elementos DOM
        this.srcYearEl = document.getElementById('src-year');
        this.srcLocEl = document.getElementById('src-loc');
        this.tgtYearEl = document.getElementById('tgt-year');
        this.tgtLocEl = document.getElementById('tgt-loc');
        
        this.boxSource = document.getElementById('box-source');
        this.boxTarget = document.getElementById('box-target');

        this.placeholder = document.getElementById('display-placeholder');
        this.card = document.getElementById('translation-card');

        // Campos de la ficha
        this.cardSrcYear = document.getElementById('card-src-year');
        this.cardTgtYear = document.getElementById('card-tgt-year');
        this.cardSrcTerm = document.getElementById('card-src-term');
        this.cardTgtTerm = document.getElementById('card-tgt-term');
        this.cardType = document.getElementById('card-type');
        this.cardEquivalence = document.getElementById('card-equivalence');
        this.cardDistance = document.getElementById('card-distance');
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
        } else {
            this.srcYearEl.textContent = "1914";
            this.srcLocEl.textContent = "GINEBRA (Borges joven)";
            this.tgtYearEl.textContent = "1969";
            this.tgtLocEl.textContent = "CAMBRIDGE (Borges mayor)";
            this.boxSource.setAttribute('data-year', '1914');
            this.boxTarget.setAttribute('data-year', '1969');
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
            this.cardEquivalence.textContent = result.equivalence;
            this.cardDistance.textContent = `DISTANCIA: ${result.distance || "55 AÑOS"}`;
            this.cardExplanation.textContent = result.explanation;

            if (result.isAnomaly) {
                this.card.classList.add('anomaly-active');
                this.cardStatus.textContent = "ALERTA // ANOMALÍA TEMPORAL EN LA SEMIOSFERA";
            } else {
                this.card.classList.remove('anomaly-active');
                this.cardStatus.textContent = "FICHA DE TRADUCCIÓN // SECUENCIA OK";
            }
        } else {
            // Fallback para búsqueda libre no registrada
            this.card.classList.remove('anomaly-active');
            this.cardTgtTerm.textContent = "NO EXISTE UN EQUIVALENTE EXACTO";
            this.cardType.textContent = "TRADUCCIÓN TENTATIVA";
            this.cardEquivalence.textContent = "DESCONOCIDA / FUERA DE BASE";
            this.cardDistance.textContent = "DISTANCIA: 55 AÑOS";
            this.cardExplanation.textContent = `El término "${query}" no posee un registro específico en la semiosfera de ${sourceYear}. La traducción intenta proyectar una aproximación general, pero el concepto excede los códigos culturales disponibles.`;
            this.cardStatus.textContent = "REGISTRO TENTATIVO // SIN EQUIVALENCIA RIGUROSA";
        }
    }

    addMemoryItem(query, result, sourceYear, targetYear) {
        const emptyMsg = this.memoryList.querySelector('.empty-memory');
        if (emptyMsg) emptyMsg.remove();

        const item = document.createElement('div');
        item.className = 'memory-item';
        
        const targetText = result ? result.translation : "SIN EQUIVALENTE";
        const typeText = result ? result.type : "TENTATIVA";

        item.innerHTML = `
            <span><strong>${query.toUpperCase()}</strong> (${sourceYear} → ${targetYear})</span>
            <span>${targetText} [${typeText}]</span>
        `;

        this.memoryList.prepend(item);
    }
}
