import { PrismaClient, tb_trabajadores } from '@prisma/client'
import { Request, Response } from 'express'

export const Controller_trabajadores = () => { }

const prisma = new PrismaClient()


// export async function main() {
const crear = async (req: Request, res: Response) => {
 try {
  console.log("BODYYYYYY", req.body)
  const { nombre, apellidos, numero_trabajador, id_area, estatus } = req.body;
  const tb_trabajadoress = await prisma.tb_trabajadores.create({
 
  data: {

    nombre,
    apellidos,
    numero_trabajador,
    id_area,
    estatus
  },

})
res.status(200).json({
  menssage: "Creacion completa",
  success: true,
  data: tb_trabajadoress
})
} catch (error) {
  res.status(400).json({
    message: "Error al crear",
    error
  })
}
}

// Obtener todos los usuarios alumnos
const obtenerAllTrabajadores = async (req: Request, res: Response) => {
 
  try {
    const get1 = await prisma.tb_trabajadores.findMany()
    res.status(200).json({
      menssage: "Todos los registros de trabajadores",
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

// Obtener un usuario 
const obtener1Trabajador = async (req: Request, res: Response) => {
  try {
    const id_Trabajador = Number(req.params.id_Trabajador);
    const Trabajador = await prisma.tb_trabajadores.findUnique({
      where: {
        id_Trabajador
      }
    });
    if (!Trabajador) {
      res.status(404).json({
        success: false,
        message: "Trabajador no encontrado",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: Trabajador,
    });
    
  } catch (error) {
    res.status(400).json({
      message: "Error al buscar",
      error
    })
  }
}

const actualizarTrabajador = async (req: Request, res: Response) => {
  try {
    const id_Trabajador1 = Number(req.params.id_Trabajador);
    const { nombre, apellidos, numero_trabajador, id_area, estatus } = req.body;
    const actTrab = await prisma.tb_trabajadores.update({
      where: {
        id_Trabajador: id_Trabajador1
      },
      data: {
        nombre,
        apellidos,
        numero_trabajador,
        id_area,
        estatus
      },
    })
  
    res.status(200).json({
      menssage: "Actualizacion Completa",
      success: true,
      data: actTrab
    })
    
  } catch (error) {
    res.status(400).json({
      message: "Error al actulizar trabajador",
      error
    })
  }

}


const eliminarTrabajador = async (req: Request, res: Response) => {
  try {
    const id_Trabajador = req.params.id_Trabajador;
    console.log(id_Trabajador)
    const delete1 = await prisma.tb_trabajadores.delete({
      where: {
        id_Trabajador: Number(id_Trabajador)
      },

    })

    res.status(200).json({
      message: "Eliminado Completado",
      success: true,
      data: id_Trabajador
    })
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar",
      error
    })
  }
}

const eliminarallTrabajador = async (req: Request, res: Response) => {
  try {
    const delete2 = await prisma.tb_trabajadores.deleteMany({
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


export { obtenerAllTrabajadores, obtener1Trabajador, crear, actualizarTrabajador, eliminarTrabajador, eliminarallTrabajador };