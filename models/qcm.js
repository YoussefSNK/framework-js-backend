class Qcm {
    #id;
    #name;
    #theme;
    #author;
    #nbpoints;
    #listquestions;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#name = qcmToCreate.name;
        this.#theme = qcmToCreate.theme;
        this.#author = qcmToCreate.author;
        this.#nbpoints = qcmToCreate.nbpoints;
        this.#listquestions = qcmToCreate.listquestions;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get theme() {
        return this.#theme;
    }

    get author() {
        return this.#author;
    }

    get nbpoints() {
        return this.#nbpoints;
    }

    get listquestions() {
        return this.#listquestions;
    }

    //obligé de passer par ça car ça marche pas autrement
    addPoints(points) {
        if (typeof points === 'number' && !isNaN(points)) {
            this.#nbpoints += points;
        } else {
            console.error('Marche pas car pas valide');
        }
    }

    toString() { // similaire à __str__
        return `Qcm { id: ${this.#id}, name: ${this.#name}, theme: ${this.#theme}, author: ${this.#author}, nbpoints: ${this.#nbpoints}, listquestions: ${JSON.stringify(this.#listquestions)} }`;
    }
}

module.exports = Qcm;
