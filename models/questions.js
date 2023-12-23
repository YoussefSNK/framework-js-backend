class Questions {
    #id;
    #question;
    #reponse;
    #theme;
    #nbpoints;


    constructor(questionToCreate) {
        this.#id = questionToCreate.id;
        this.#question = questionToCreate.question;
        this.#reponse = questionToCreate.reponse;
        this.#theme = questionToCreate.theme;
        this.#nbpoints = questionToCreate.nbpoints;
    }

    get id() {
        return this.#id;}

    get question() {
        return this.#question;}

    set question(value) {
        this.#question = value;}

    get reponse() {
        return this.#reponse;}

    get theme(){
        return this.#theme;}
    
    get nbpoints() {
        return this.#nbpoints;}

    toJSON(key) {
        console.log(key);
        return {id: this.#id, question: this.#question};
    }
}

module.exports = Questions;