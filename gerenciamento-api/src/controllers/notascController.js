const notasService = require("../services/notasService");

exports.getAllNotas = async (req, resp) => {
    try {
        const notas = await notasService.getAllNotas();
        resp.json({data: notas, status: "success" });
    } catch (err) {

        resp.status(500).json({error: err.mensage});
        
    }
    
};



exports.createNotas = async (req, resp) => {
    try {
        const nota = await notasService.createNotasDBService(req.body);
        resp.json({status: "success", message: "Nota criada" });
    } catch (err) {
        resp.status(500).json({error: err.mensage});
        
    }
    
};

