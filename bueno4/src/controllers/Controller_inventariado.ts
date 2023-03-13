import { PrismaClient, tb_inventariado } from '@prisma/client'
import { Request, Response } from 'express'
export const Controller_Inventariado = () => {}

const prisma = new PrismaClient()



const crear = async (req: Request, res: Response) => {
  try {
  
   const { numero_serie, descripcion, marca, color, observaciones, numero_etiqueta, estatus, tipo } = req.body;
   const crear = await prisma.tb_inventariado.create({
  
   data: {
 
    numero_serie,
    descripcion, 
    marca,
    color,
    observaciones,
    numero_etiqueta,
    estatus,
    tipo
   },
 
 })
 res.status(200).json({
   menssage: "Creacion completa",
   success: true,
   data : crear
 })
 } catch (error) {
   res.status(400).json({
     message: "Error al crear",
     error
   })
 }
 }

 const obtener1objeto = async (req: Request, res: Response) => {
  try {
    const id_Recurso = Number(req.params.id_Recurso);
    const Objeto = await prisma.tb_inventariado.findUnique({
      where: {
        id_Recurso
      }
    });
    if (!Objeto) {
      res.status(404).json({
        success: false,
        message: "objeto no encontrado",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: Objeto,
    });
    
  } catch (error) {
    res.status(400).json({
      message: "Error al buscar",
      error
    })
  }
}

/*async function main() {
   const tb_inventariado = await prisma.tb_inventariado.create({
    data: {
   
        id:    1,  
        numero_serie: '', 
        descripcion: '',    
        marca:  '',         
        color: '',          
        observaciones: '',  
        numero_etiqueta: 2,
        tipo: 'EquipoComputo',
        estatus: false,       
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



/*export const Inventariado = () => { }

function Editar() {
    
}

function Eliminar() {
    
}

function Actualizar() {
    
}*/
export {crear,obtener1objeto}