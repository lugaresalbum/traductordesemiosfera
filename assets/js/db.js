export const TRANSLATION_DB = [
    // 1. RÍO CHARLES <-> RÍO RÓDANO
    {
        term: "río charles",
        aliases: ["rio charles", "charles"],
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Río Ródano",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "río ródano",
        aliases: ["rio rodano", "ródano", "rodano"],
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Río Charles",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },

    // 2. DÓLAR <-> ESCUDO DE PLATA SUIZO
    {
        term: "dólar",
        aliases: ["dolar", "billete", "1974"],
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Escudo de plata suizo",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "Borges anciano y Borges Joven intercambian elementos para corroborar la mutua existencia. El dólar, como un texto que irrumpe desde el futuro provoca en el joven Borges horror y desconcierto, por eso lo rompe en pedazos. El objeto introduce en su semiosfera un elemento que no puede ser traducido ni comprendido según sus propias reglas de sentido.",
        isAnomaly: true
    },
    {
        term: "escudo de plata suizo",
        aliases: ["escudo suizo", "escudo de plata", "moneda suiza", "franco"],
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Dólar",
        type: "NIVEL DE PRECISIÓN: BAJO",
        explanation: "Borges anciano y Borges Joven intercambian elementos para corroborar la mutua existencia. El dólar, como un texto que irrumpe desde el futuro provoca en el joven Borges horror y desconcierto, por eso lo rompe en pedazos. El objeto introduce en su semiosfera un elemento que no puede ser traducido ni comprendido según sus propias reglas de sentido.",
        isAnomaly: true
    },

    // 3. BORGES ANCIANO <-> BORGES JOVEN
    {
        term: "borges anciano",
        aliases: ["borges mayor", "borges viejo", "anciano"],
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Borges joven",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "borges joven",
        aliases: ["joven borges", "joven"],
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Borges anciano",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },

    // 4. CAMBRIDGE <-> GINEBRA
    {
        term: "cambridge",
        sourceYear: 1969,
        targetYear: 1914,
        translation: "Ginebra",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    },
    {
        term: "ginebra",
        sourceYear: 1914,
        targetYear: 1969,
        translation: "Cambridge",
        type: "NIVEL DE PRECISIÓN: ALTO",
        explanation: null
    }
];
