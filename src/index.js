/*const express = require('express');

const app = express();

app.get('/', (request,response) => {
    //return response.send('Hello World');
    return response.json({
        evento: "Semana Omnistack 11.0",
        Vagabundo: "Matheus Santos",

    });
});

app.listen(3333); */


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
*Rota
*/
/*Métodos HTTP:
*
*GET : Busca/listar uma informação do back-end 
*POST : Cria uma informação no back-end 
*PUT : Altera uma informação do back-end 
*DELETE : Deleta uma informação
*/

/*
*
*Tipos de parametros:
*
*Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
*Route Params: Parametros utilizados para identificar recursos
*Request Body: O corpo da requisição usado para criar ou alterar recursos
*/


