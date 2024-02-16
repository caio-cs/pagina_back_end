import CarroService from '../services/CarroService.js';

export default {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        let carros = await CarroService.buscarTodos();

        for (let i in carros) {
            json.result.push({
                id: carros[i].id,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let carro = await CarroService.buscarUm(id)

        if (carro) {
            json.result = carro;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        console.log({ modelo, placa })


        if (!modelo || !placa) {
            console.log('não entrou')
            json.error = 'Campos não enviados';
            return res.json(json);
        }

        console.log('entrou')

        let Carroid = await CarroService.inserir(modelo, placa);
        json.result = {
            id: Carroid,
            modelo,
            placa
        };

        res.json(json);
    },
    alterar: async (req, res) => {
        let json = { error: '', result: {} };
        let modelo = req.body.modelo;
        let placa = req.body.placa;
        let id = req.params.id;

        console.log({ modelo, placa })


        if (!id && !modelo && !placa) {
            console.log('não entrou')
            json.error = 'Campos não enviados';
            return res.json(json);
        }

        console.log('entrou')

        let Carroid = await CarroService.alterar(id, modelo, placa);
        json.result = {
            id,
            modelo,
            placa
        };

        res.json(json);
    },
    excluir: async (req, res) => {
        let json = { error: '', result: {} };

        await CarroService.excluir(req.params.id);

        res.json(json);
    },

    
   
}
