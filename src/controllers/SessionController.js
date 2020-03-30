const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const WHO = await connection('WHO')
            .where('id', id)
            .select('name')
            .first();
        
        if(!WHO) {
            return response.status(400).json({ error: 'No Ong found with this ID' });
        }

        return response.json(WHO);
    }
}