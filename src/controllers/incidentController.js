const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();
        console.log(count);

        const incidents = await connection('incidents')
            .join('WHO', 'WHO_id', '=', 'incidents.WHO_id')
            .limit(5)
            .offset( (page - 1) * 5)
            .select([
                'incidents.*', 
                'WHO.name',
                'WHO.email', 
                'WHO.whatsapp', 
                'WHO.city',
                'WHO.uf'
            ]);
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const WHO_id = request.headers.authorization;

        //const result = await connection('incidents').insert({
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            WHO_id,
        });
        //const id = result[0]
        return response.json({ id });
    },
    
    async delete(request, response) {
        const { id } = request.params;
        const WHO_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('WHO_id')
        .first();

        if (incident.WHO_id != WHO_id) {
            return response.status(401).json({ error: 'Operation not permitted'});

        } 
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};