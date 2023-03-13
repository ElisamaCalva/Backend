/*import  express, {Response, Request} from 'express';
import { validationResult } from 'express-validator/src/validation-result';
import { confirmPassword, validarNombre } from './src/utils/validation';


const app = express ()
const port =       3000

app.use(express.json())

app.post('/nombre', validarNombre(), (req:Request, res:Response)=>{
    let errors = validationResult(req)

    if(!errors.isEmpty()){
        console.log(errors.array())

        return res.json({
            errors :errors.array()
        })
    }
    
    

    res.send('hola')
})

app.post('/signin',confirmPassword(),(req:Request,res:Response)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())

        return res.json({
            errors :errors.array()
        })
    }
    
    

    res.send('cuenta creada')
})
app.listen(port,()=>{
    console.log(`Server running:http:localhost:${port}`);
})*/