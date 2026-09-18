// BASE DE DATOS COMPLETA
const TRANSLATION_DB = [
    {
        term: "Río Charles",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Río Ródano",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "Río Ródano",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Río Charles",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "Dólar",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Escudo de plata suizo",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "Borges anciano y Borges Joven intercambian elementos para corroborar la mutua existencia. El dólar, como un texto que irrumpe desde el futuro provoca en el joven Borges horror y desconcierto, por eso lo rompe en pedazos. El objeto introduce en su semiosfera un elemento que no puede ser traducido ni comprendido según sus propias reglas de sentido."
    },
    {
        term: "Escudo de plata suizo",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Dólar",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "Borges anciano y Borges Joven intercambian elementos para corroborar la mutua existencia. El dólar, como un texto que irrumpe desde el futuro provoca en el joven Borges horror y desconcierto, por eso lo rompe en pedazos. El objeto introduce en su semiosfera un elemento que no puede ser traducido ni comprendido según sus propias reglas de sentido."
    },
    {
        term: "Borges anciano",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Borges joven",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "Borges joven",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Borges anciano",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "Cambridge",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Ginebra",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "Ginebra",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Cambridge",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "Norah, casada con dos hijos",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Norah, soltera y sin hijos",
        type: "NIVEL DE PRECISIÓN: MEDIO",
        explanation: null
    },
    {
        term: "Norah, soltera y sin hijos",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Norah, casada con dos hijos",
        type: "NIVEL DE PRECISIÓN: MEDIO",
        explanation: null
    },
    {
        term: "Segunda Guerra Mundial finalizada",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Inicio de Primera Guerra",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "Borges anciano le comenta a Borges joven: \"hubo otra guerra, casi entre los mismos antagonistas\"."
    },
    {
        term: "Inicio de Primera Guerra",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Segunda Guerra Mundial finalizada",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "Borges anciano le comenta a Borges joven: \"hubo otra guerra, casi entre los mismos antagonistas\"."
    },
    {
        term: "Juan Domingo Perón",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Juan Manuel de Rosas",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "\"Buenos Aires, hacia 1946, engendró otro Rosas, bastante parecido a nuestro pariente. El 55, la provincia de Córdoba nos salvó, como antes Entre Ríos\"."
    },
    {
        term: "Juan Manuel de Rosas",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Juan Domingo Perón",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "\"Buenos Aires, hacia 1946, engendró otro Rosas, bastante parecido a nuestro pariente. El 55, la provincia de Córdoba nos salvó, como antes Entre Ríos\"."
    },
    {
        term: "Joseph Conrad",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Fyodor Dostoievski",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "Dos modelos narrativos y éticos distintos. Para el joven, Dostoievski es la cumbre de la psicología humana y la turbulencia del alma eslava; para el viejo, la nitidez en la delimitación de los personajes y el rigor formal se encuentran en autores como Conrad, alejándose de la exaltación juvenil por \"el maestro ruso\"."
    },
    {
        term: "Fyodor Dostoievski",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Joseph Conrad",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "Dos modelos narrativos y éticos distintos. Para el joven, Dostoievski es la cumbre de la psicología humana y la turbulencia del alma eslava; para el viejo, la nitidez en la delimitación de los personajes y el rigor formal se encuentran en autores como Conrad, alejándose de la exaltación juvenil por \"el maestro ruso\"."
    },
    {
        term: "Individuos",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Masa de oprimidos y parias",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: "Representan las dos concepciones acerca del sujeto de la historia."
    },
    {
        term: "Masa de oprimidos y parias",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Individuos",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: "Representan las dos concepciones acerca del sujeto de la historia."
    },
    {
        term: "Simón Jichlinski (médico en Carouge)",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Simón Jichlinski (amigo / estudiante en Ginebra)",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "Simón Jichlinski (amigo / estudiante en Ginebra)",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Simón Jichlinski (médico en Carouge)",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "Victor Hugo",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Walt Whitman",
        type: "NIVEL DE PRECISIÓN: MEDIO",
        explanation: "Funcionan como los referentes poéticos de la sensibilidad en cada etapa."
    },
    {
        term: "Walt Whitman",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Victor Hugo",
        type: "NIVEL DE PRECISIÓN: MEDIO",
        explanation: "Funcionan como los referentes poéticos de la sensibilidad en cada etapa."
    },
    {
        term: "Padre muerto",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Padre vivo",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: "Se hace patente la transformación de la figura paterna en la semiosfera familiar. En 1914, el padre es una presencia activa que, entre otras cosas, cuestiona e ironiza sobre la fe. En 1969, en cambio, es solo recuerdo."
    },
    {
        term: "Padre vivo",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Padre muerto",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: "Se hace patente la transformación de la figura paterna en la semiosfera familiar. En 1914, el padre es una presencia activa que, entre otras cosas, cuestiona e ironiza sobre la fe. En 1969, en cambio, es solo recuerdo."
    }
];

// LÓGICA DE APLICACIÓN
class AppController {
    constructor() {
        this.sourceYear = 1969;
        this.targetYear = 1914;

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

        this.init();
    }

    init() {
        this.updateDirectionUI();
        this.renderCatalog();
        this.initEvents();
    }

    updateDirectionUI() {
        if (this.sourceYear === 1969) {
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

        this.placeholder.classList.remove('hidden');
        this.card.classList.add('hidden');
    }

    renderCatalog() {
        this.catalogGrid.innerHTML = "";
        const availableEntries = TRANSLATION_DB.filter(entry => entry.sourceYear === this.sourceYear);

        availableEntries.forEach(entry => {
            const btn = document.createElement('button');
            btn.className = 'catalog-card-btn';
            btn.textContent = entry.term;

            btn.addEventListener('click', () => {
                document.querySelectorAll('.catalog-card-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.handleTranslation(entry);
            });

            this.catalogGrid.appendChild(btn);
        });
    }

    handleTranslation(entry) {
        this.placeholder.classList.add('hidden');
        this.card.classList.remove('hidden');

        this.cardSrcYear.textContent = this.sourceYear;
        this.cardTgtYear.textContent = this.targetYear;
        this.cardSrcTerm.textContent = entry.term.toUpperCase();
        this.cardTgtTerm.textContent = entry.translation;
        this.cardType.textContent = entry.type;

        if (entry.explanation && entry.explanation.trim() !== "") {
            this.cardExplanationContainer.classList.remove('hidden');
            this.cardExplanation.textContent = entry.explanation;
        } else {
            this.cardExplanationContainer.classList.add('hidden');
            this.cardExplanation.textContent = "";
        }

        this.cardStatus.textContent = "FICHA DE TRADUCCIÓN // SECUENCIA OK";
        this.addMemoryItem(entry);
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

    initEvents() {
        document.getElementById('btn-enter').addEventListener('click', () => {
            document.getElementById('screen-intro').classList.remove('active');
            document.getElementById('screen-app').classList.add('active');
        });

        document.querySelectorAll('.nav-link').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

                e.target.classList.add('active');
                document.getElementById(e.target.dataset.target).classList.add('active');
            });
        });

        document.getElementById('btn-swap').addEventListener('click', () => {
            const temp = this.sourceYear;
            this.sourceYear = this.targetYear;
            this.targetYear = temp;

            this.updateDirectionUI();
            this.renderCatalog();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AppController();
});
