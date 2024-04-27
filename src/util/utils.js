export const getResponseModelFromSectionModel = (sectionModel)=> {
    let o = {};
    sectionModel.forEach((section)=>{
        let co = {};
        section.questions.forEach((question)=>{
            co[`q${question.questionId}`] = "";
        })
        o[`section${section.sectionId}`] = co;
    });
    return o;
};

export const getFormattedAnswers =(formModel,sectionModel) => {

    let answers = [];
    Object.keys(formModel).forEach((key)=>{
        let sectionKey = key.slice(7);

        Object.keys(formModel[key]).forEach((questionKey)=>{
            let questionId = questionKey.slice(1);
            if(+formModel[key][questionKey]>=3){

                let questions = sectionModel.filter(x=>x.sectionId===+sectionKey)[0].questions;
                let question = questions.filter(y=>y.questionId===questionId)[0].question;
                answers.push(question);
            }
        })
    })
    return answers.join("\n");
}