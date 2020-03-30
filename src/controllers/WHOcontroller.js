const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const WHO = await connection('WHO').select('*');
    
        return response.json(WHO);
    },


    async create(requets, response) {
        const {name, email, whatsapp, city, uf} = request.body; //const data = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //gerar id
    
        await connection('WHO').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        //console.log(params);
        //console.log(data);
    
        return response.json({ id });
    }
};