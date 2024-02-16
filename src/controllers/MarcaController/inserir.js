import MarcaService from "../../services/MarcaService/MarcaService.js";

export const inserir = async (req, res) => {
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

    let Carroid = await MarcaService.inserir(modelo, placa);
    json.result = {
        id: Carroid,
        modelo,
        placa
    };

    res.json(json);
}