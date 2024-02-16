import MarcaService from "../../services/MarcaService/MarcaService.js";

export const alterar = async (req, res) => {
    let json = { error: '', result: {} };
    let id = req.params.id;
    let marca = req.body.marca;

    console.log({ marca })


    if (!id || !marca) {
        console.log('não entrou')
        json.error = 'Campos não enviados';
        return res.json(json);
    }

    console.log('entrou')

    let {affectedRows} = await MarcaService.alterar(id, marca);
    json.result = {
        id,
        marca,affectedRows
    };

    res.json(json);

}