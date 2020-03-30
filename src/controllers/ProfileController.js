const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const WHO_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('WHO_id', WHO_id)
        .select('*');

        return response.json(incident);
    }
}