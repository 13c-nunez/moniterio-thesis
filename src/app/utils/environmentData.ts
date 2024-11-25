import {sql} from '@vercel/postgres'

//Interfaz para definir la estructura de un objeto
// Definido con"export" para poder usarlo en otro archivo
export interface dataReceived {
    Temperatura: number;
    Humedad: number;
    V_Viento: number;
    C_Co2: number;
    Altura: number;
    Posicion: string;
    ID_ESP32: number;
}

//Toda funcion asincrona necesita un await
export async function getEnvironmentData() {
    const { rows } = await sql `SELECT * FROM registros`;
    console.log(rows);
    return rows;
}

export async function insertEnvironmentData(dataReceived: dataReceived) {
    const { Temperatura, Humedad, V_Viento, C_Co2, Altura, Posicion, ID_ESP32} = dataReceived; //Destructura la interfaz
    let wasCreatedData = false;
    try {
        await sql`INSERT INTO registros (Temperatura, Humedad, V_Viento, C_Co2, Altura, Posicion, ID_ESP32) VALUES (
            ${Temperatura}, 
            ${Humedad}, 
            ${V_Viento}, 
            ${C_Co2}, 
            ${Altura}, 
            ${Posicion}, 
            ${ID_ESP32}
        )`;
        wasCreatedData = true;
    }
    catch (error) {
        console.log(error);
    }
    return wasCreatedData;
}