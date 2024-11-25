import { dataReceived, getEnvironmentData, insertEnvironmentData } from "../utils/environmentData";

//async: nb bloquea el hilo de ejecución. Funcion async. Para respuesta de api por ejem (espera en backgroudg)
export async function GET() {
    console.log('API GET request');
    const data = await getEnvironmentData();
    return Response.json(data);
}

export async function POST(req: Request) {
    console.log('*** API POST request 1***');
    const newData: dataReceived = await req.json();
    console.log('*** API POST request 2***');
    console.log(req.body);
    try {
        await insertEnvironmentData(newData)
    }
    catch (error) {
        console.log(error);
        return Response.json({ error: error });
    }
    return Response.json({ message: 'Data inserted'});
}
//next en el servidor. React solo es una libreria para crear interfances con componentes.
//Las solicitudes