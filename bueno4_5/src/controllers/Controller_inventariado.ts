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


// Obtener todos los usuarios alumnos
const obtenerAllInventario = async (req: Request, res: Response) => {
 
  try {
    const get1 = await prisma.tb_inventariado.findMany()
    res.status(200).json({
      menssage: "Se obtubo todo el inventario",
      success: true,
      data: get1
    })
    
  } catch (error) {
    res.status(400).json({
      message: "Error al buscar",
      error
    })
  }
}

// Obtener todos los usuarios alumnos
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

const actualizarInventario = async (req: Request, res: Response) => {
  try {
    const Actualizar1 = Number(req.params.id_Recurso);
    const { numero_serie, descripcion, marca, color, observaciones, numero_etiqueta, estatus, tipo } = req.body;
    const actTrab = await prisma.tb_inventariado.update({
      where: {
        id_Recurso: Actualizar1
      },
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
      menssage: "Actualizacion Completa",
      success: true,
      data: actTrab
    })
    
  } catch (error) {
    res.status(400).json({
      message: "Error al actulizar",
      error
    })
  }

}

//Error
const eliminarUnObjeto = async (req: Request, res: Response) => {
  try {
    const eliminarObjeto = req.params.id_Recurso;
    console.log(eliminarObjeto)
    const delete1 = await prisma.tb_inventariado.delete({
      where: {
        id_Recurso: Number(id_Recurso)
      },

    })

    res.status(200).json({
      message: "Eliminado Completado",
      success: true,
      data: id_Recurso
    })
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar",
      error
    })
  }
}


const eliminarallInventario = async (req: Request, res: Response) => {
  try {
    const delete2 = await prisma.tb_inventariado.deleteMany({
    })
    
    res.status(200).json({
      message: "Datos eliminados",
    })
    
    
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar",
      error
    })
    
  }

}

export {crear,obtenerAllInventario, obtener1objeto, actualizarInventario, eliminarUnObjeto, eliminarallInventario}
