//serviços

const notasModel = require("../models/notasModel");

exports.getAllNotas = async () => {
    return await notasModel.find();
    
};



exports.createNotasDBService = (notaDet) => {
    return new Promise(function check(resolve,reject) {
        const notasmodelData = new notasModel();
        notasmodelData.title = notaDet.title;
        notasmodelData.content = notaDet.content;

        notasmodelData.save(function result(error,result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
            
        });
        
    }) 
};




