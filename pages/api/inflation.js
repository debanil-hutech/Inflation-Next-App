import dbConnect from "../../lib/dbConnect.js";
import Inflations from '../../models/infation.model';

const Inflation = async (req,res) =>{
    await dbConnect();
    const { method, body } = req;
    console.log('Inflation',method);
    let data = {
        method: '',
        result: {}
      }
    switch(method){
        case 'GET':
            data.method='GET';
            data.result = await Inflations.find();[]
        break;
    }
    console.log(data);
    res.status(200).send(data);
}

export default Inflation;
