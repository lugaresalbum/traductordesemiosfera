import { UI } from './UI.js';

class App {
    constructor() {
        this.sourceYear = 1969;
        this.targetYear = 1914;
        this.ui = new UI();

        this.init();
    }

    init() {
        this.ui.updateDirectionUI(this.sourceYear);
        this.loadCatalog();
        this.initEvents();
    }

    loadCatalog() {
        this.ui.renderCatalog(this.sourceYear, (selectedEntry) => {
            this.handleTranslation(selectedEntry);
        });
    }

    initEvents() {
        // Pantalla Intro -> App
        document.getElementById('btn-enter').addEventListener('click', () => {
            document.getElementById('screen-intro').classList.remove('active');
            document.getElementById('screen-app').classList.add('active');
        });

        // Navegación de Pestañas
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
            this.loadCatalog();
        });
    }

    handleTranslation(entry) {
        this.ui.renderCard(entry, this.sourceYear, this.targetYear);
        this.ui.addMemoryItem(entry);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
