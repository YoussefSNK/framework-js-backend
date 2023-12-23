const Qcm = require('./qcm');
const Question = require('./questions');

const qcms = [
    new Qcm({ id: 0, author: 'Youssef', nbpoints: 0, name: 'Test de connaissances mathématiques simples', theme: 'Maths', listquestions: [] }),
    new Qcm({ id: 1, author: 'Youssef', nbpoints: 0, name: 'Framework Frontend', theme: 'Angular', listquestions: [] }),
    new Qcm({ id: 2, author: 'Youssef', nbpoints: 0, name: 'Framework Backend', theme: 'Express', listquestions: [] }),
];


const questions = [
    new Question({
        id: 0,
        question: '5 x 4',
        reponse: ["20", "54", "9", "2"],
        theme: "Maths",
        nbpoints: 2
    }),
    new Question({
        id: 1,
        question: '12 ÷ 3',
        reponse: ["4", "9", "3", "6"],
        theme: "Maths",
        nbpoints: 2
    }),
    new Question({
        id: 2,
        question: 'Quelle année a été créé Angular',
        reponse: ["2016", "2017", "2018", "2019"],
        theme: "Angular",
        nbpoints: 2
    }),
    new Question({
        id: 3,
        question: 'Quel est le synonyme d\'Express',
        reponse: ["Rapide", "Cloporte", "Rigolo", "Acharné"],
        theme: "Express",
        nbpoints: 2
    }),
    new Question({
        id: 4,
        question: 'Qui est derrière Express',
        reponse: ["TJ Holowaychuck", "Toby Fox", "Jack Ma", "T-Series"],
        theme: "Express",
        nbpoints: 2
    }),
    new Question({
        id: 5,
        question: 'Qu\'est-ce que middleware dans Express',
        reponse: ["Une fonction qui manipule la requête et la réponse", "Une base de données", "Un système de routage", "Une bibliothèque frontend"],
        theme: "Express",
        nbpoints: 3
    }),
    new Question({
        id: 6,
        question: '8 * 7',
        reponse: ["56", "64", "49", "72"],
        theme: "Maths",
        nbpoints: 2
    }),

    new Question({
        id: 7,
        question: 'racine carrée de 144',
        reponse: ["12", "10", "14", "16"],
        theme: "Maths",
        nbpoints: 5
    }),
    new Question({
        id: 8,
        question: 'Qui est le présentateur de Pékin Express',
        reponse: ["Stéphane Rotenberg", "Louis Mercier", "Bill Gates", "Central Cee"],
        theme: "Express",
        nbpoints: 5
    }),
    new Question({
        id: 9,
        question: 'Qui a créé Angular',
        reponse: ["Google", "Microsoft", "Mike Rosoft", "L'Epsi"],
        theme: "Angular",
        nbpoints: 6
    }),

    new Question({
        id: 10,
        question: 'En quel langage a été codé Angular',
        reponse: ["TypeScript", "JavaScript", "Java", "Python"],
        theme: "Angular",
        nbpoints: 2
    }),

    new Question({
        id: 11,
        question: 'Quand Angular a-t-il été initialement publié',
        reponse: ["2010", "2012", "2015", "2018"],
        theme: "Angular",
        nbpoints: 3
    }),
    ];


//change dynamiquement nbpoints des qcm et ajoute aussi dynamiquement les questions aux qcm selon leurs thèmes
for (let i = 0; i < qcms.length; i++) {
    for (let j = 0; j < questions.length; j++) {
        if (qcms[i].theme === questions[j].theme) {
            qcms[i].listquestions.push(questions[j]);
            qcms[i].addPoints(questions[j].nbpoints);
        }
    }
}




const remplirQcm = (rawObject) => {
    const qcmEnCours = qcms[qcms.length - 1]; // Récupère le dernier QCM créé (en cours de création)
    
    questions.forEach((question) => {
        // Ajoute la question au QCM en cours
        if (question.theme === rawObject.theme) {
            qcmEnCours.listquestions.push(question);
            qcmEnCours.nbpoints += question.nbpoints;
        }
    });
}

const addQcm = (rawObject) => {
    let maxId = 0;
    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });

    const qcm = new Qcm(
        {
            id: maxId + 1,
            author: rawObject.author,
            name: rawObject.name,
            theme: rawObject.theme,
            nbpoints: Number(rawObject.nbpoints),
            listquestions: [] // Initialise la liste des questions du QCM
        });

    qcms.push(qcm);
}
module.exports = { qcms, addQcm, Question };