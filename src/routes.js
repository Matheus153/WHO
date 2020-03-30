const express = require('express');
//const crypto = require('crypto');//enviado para o controlador
const WHOcontroller = require('./controllers/WHOcontroller');
//const connection = require('./database/connection');//enviado para o controlador 
const Incidentscontroller = require('./controllers/incidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/WHO', WHOcontroller.index);
routes.post('/WHO', WHOcontroller.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', Incidentscontroller.index);
routes.post('/incidents', Incidentscontroller.create);
routes.delete('/incidents/:id', Incidentscontroller.delete);

module.exports = routes;






/*const {name, email, whatsapp, city, uf} = request.body; //const data = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); //gerar id

    await connection('WHO').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    
    return response.json({ id });*/ 

// (TUDO ACIMA FOI ENVIADO PARA O CONTROLADOR )