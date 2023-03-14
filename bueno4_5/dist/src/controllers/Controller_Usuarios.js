"use strict";
/*import { PrismaClient, tb_usuarios } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const tb_usuarios = await prisma.tb_usuarios.create({
     data: {

        id: 1,
        id_rol: 2,
        usuario: '',
        contrase_a: '',
        id_trabajador: 3,
        estatus: true,

     },
    })
 
   }
   
   main()
     .then(async () => {
       await prisma.$disconnect()
     })
     .catch(async (e) => {
       console.error(e)
       await prisma.$disconnect()
       process.exit(1)
})

/*export const Usuarios = () => { }

function Editar() {
    
}

function Eliminar() {
    
}

function Actualizar() {
    
}*/
