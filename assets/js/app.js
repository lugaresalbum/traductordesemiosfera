import { TRANSLATION_DB } from './db.js';
import { UI } from './UI.js';

class App {
    constructor() {
        this.sourceYear = 1969;
        this.targetYear = 1914;
        this.ui = new UI();

        this.initEvents();
    }

    initEvents() {
        // Transición Portada -> App
        document.getElementById('btn-enter').addEventListener('click', () => {
            document.getElementById('screen-intro').classList.remove('active');
            document.getElementById('screen-app').classList.add('active');
        });

        // Navegación Pestañas
        document.querySelectorAll('.nav-link').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

                e.target.classList.add('active');
                document.getElementById(e.target.dataset.target).classList.add('active');
            });
        });

        // Invertir Semiosferas (Swap)
        document.getElementById('btn-swap').addEventListener('click', () => {
            const temp = this.sourceYear;
            this.sourceYear = this.targetYear;
            this.targetYear = temp;

            this.ui.updateDirectionUI(this.sourceYear);
        });

        // Botón Traducir
        document.getElementById('btn-translate').addEventListener('click', () => {
            this.handleTranslation();
        });

        // Enter en Input
        document.getElementById('term-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleTranslation();
        });

        // Tags Rápidos
        document.querySelectorAll('.tag-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const term = e.target.dataset.term;
                document.getElementById('term-input').value = term;
                this.handleTranslation();
            });
        });
    }

    handleTranslation() {
        const inputEl = document.getElementById('term-input');
        const query = inputEl.value.trim().toLowerCase();

        if (!query) return;

        // Búsqueda en la Base de Datos
        const result = TRANSLATION_DB.find(entry => {
            const matchTerm = entry.term.toLowerCase() === query || 
                              (entry.aliases && entry.aliases.some(a => a.toLowerCase() === query));
            const matchYears = entry.sourceYear === this.sourceYear && entry.targetYear === this.targetYear;
            
            return matchTerm && matchYears;
        });

        // Renderizado
        this.ui.renderCard(result, query, this.sourceYear, this.targetYear);
        this.ui.addMemoryItem(query, result, this.sourceYear, this.targetYear);
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
