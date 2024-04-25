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