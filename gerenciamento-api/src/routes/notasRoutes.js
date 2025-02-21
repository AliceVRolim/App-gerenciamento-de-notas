const express = require('express');
const router = express.Router();

const { getAllNotas,createNotas} = require ('../controllers/notascController'); 


router.route("/").get(getAllNotas);

router.route("/inserir").post(createNotas);






  
module.exports = router;