import {sql} from '@vercel/postgres'

export interface dataReceived {
    temperature: number;
    humidity: number;

}

export async function getEnvironmentData() {
    const { rows } = await sql `SELECT * FROM registros`;
    console.log(rows);
    return rows;
}

//INSERT INTO registros (Temperatura, Humedad, V_Viento, C_Co2, Altura, Posicion, ID_ESP32)

export async function insertEnvironmentData(dataReceived: dataReceived) {
    const { temperature, humidity } = dataReceived;
    let wasCreatedData = false;
    try {
        await sql`INSERT INTO registros (Temperatura, Humedad, V_Viento, C_Co2, Altura, Posicion, ID_ESP32) VALUES (${temperature}, ${humidity})`;
        wasCreatedData = true;
    }
    catch (error) {
        console.log(error);
    }
    return wasCreatedData;
}