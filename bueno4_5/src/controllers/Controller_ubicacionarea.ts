import { PrismaClient, tb_ubicacionarea} from '@prisma/client'
const prisma = new PrismaClient()
import { Request, Response } from 'express'

export const Controller_ubicacionarea = () => { }



// export async function main() {
  const crear = async (req: Request, res: Response) => {
    try {
     console.log("BODYYYYYY", req.body)
     const {  nombre, observaciones  } = req.body;
     const crearUno = await prisma.tb_ubicacionarea.create({
    
     data: {
   
      nombre, 
      observaciones 

     },
   
   })
   res.status(200).json({
     menssage: "Creacion completa",
     success: true,
     data: crearUno
   })
   } catch (error) {
     res.status(400).json({
       message: "Error al crear",
       error
     })
   }
   }

export { crear }
