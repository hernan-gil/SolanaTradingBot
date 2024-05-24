require ('dotenv').config();

const axios = require('axios');

async function getSolPrice() {
    try {
        const response = await axios.get(process.env.url);
        const solPrice = response.data.solana.usd;
        console.log(`El precio de Solana (SOL) es: $${solPrice} USD`);
    } catch (error) {
        console.error('Error al obtener el precio de Solana:', error);
    }
}

// Llamada a la función para obtener el precio
getSolPrice();
