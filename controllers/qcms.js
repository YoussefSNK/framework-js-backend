const { qcms, addQcm, Question } = require('../models/inmemory');



const displayQcms = (req, res) => {
    for (let qcm of qcms) {
        //console.log(`${qcm.nbpoints}: ${typeof(qcm.nbpoints)}`);
    }
    res.render('qcms', {qcms: qcms});
};

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === id);
    res.render('qcm', { qcm });
}

const displayQcmJson = (req, res) => {
    res.json({qcms});
}

const displayFormQcm = (req, res) => {
    res.render('newqcm');
};



const createNewForm = (req, res) => {
    console.log(req.body);
    addQcm({
        name: req.body.name,
        subject: req.body.subject,
        nbpoints: req.body.nbpoints
    });
    res.redirect('/qcms');
};

const showAddQuestionForm = (req, res) => {
    const qcmId = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === qcmId);
    res.render('newquestion', { qcm });
  };








const processAddQuestionForm = (req, res) => {
    const qcmId = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === qcmId);

    const newQuestionData = {
      id: qcm.listquestions.length+1,
      question: req.body.question,
      reponse: req.body.reponse.split(',').map((answer) => answer.trim()),
      theme: qcm.theme,
      nbpoints: Number(req.body.nbpoints), //Number() = int() de python
    };

    qcm.listquestions.push(new Question(newQuestionData));
    qcm.nbpoints += newQuestionData.nbpoints;

    res.redirect(`/qcms/${qcmId}`);
  };



module.exports = {processAddQuestionForm, showAddQuestionForm, displayQcms, displayFormQcm, createNewForm, displayQcmJson, displayQcmDetailed};