//async: nb bloquea el hilo de ejecución. Funcion async. Para respuesta de api por ejem (espera en backgroudg)
export async function GET(req: Request, res: Response) {
    console.log('API GET request')
    return Response.json({ message: 'Christopher Nuñez' });
}

//next en el servidor. React solo es una libreria para crear interfances con componentes.
//Las solicitudes