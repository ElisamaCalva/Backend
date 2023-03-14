/*import  {body}  from 'express-validator';

export const validarNombre =() =>{
    return[
             body('nombre')
        .trim()
        .not()
        .isEmpty()
        .isString()
        .withMessage('solo se acepta texto')
        .isLength({
            min:2
        })
        .withMessage('minimo 2 caracteres'),

            body('apaterno')
        .trim()
        .not()
        .isEmpty()
        .withMessage('solo se acepta texto')
        .isString()
        .isLength({
            min:2
        })
        .withMessage('solo se acepta texto'),

        body('amaterno')
        .trim()
        .not()
        .isEmpty()
        .isString()
        .withMessage('campo requerido')
        .isString()
        .isLength({
            min:2
        })
        .withMessage('minimo 2 caracteres'),

        body('telefono')
        .trim()
        .not()
        .isEmpty()
        .withMessage('campo requerido')
        .isInt()
        .isLength({
            min:10,
            max:12
        }),

        body('correo')
        .trim()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('campo requerido'),

        body('estatus')
        .trim()
        .not()
        .isEmpty()
        .isBoolean()
        .withMessage('campo requerido'),

        body('suscripcion')
        .trim()
        .not()
        .isEmpty()
        .withMessage('campo requerido')
        .isIn(['free','premium'])
        .withMessage('el plan solo puede ser free o  premium')
    ]
}
export const confirmPassword = () =>{
    return[
        body('newPassword')
        .trim()
        .notEmpty()
        .isLength({min:5})
        .withMessage('minimo 5'),
        body('confrimPassword')
        .trim()
        .custom((currentValue, {req})=>{
            console.log(currentValue)
            if(currentValue !== req.body.newPassword){
                throw new Error("Las contraseñas no coinciden");
                
            }
            return true
        })
        
    ]
}*/