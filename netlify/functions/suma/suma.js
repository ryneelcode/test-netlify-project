// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const numero1 = parseInt(event.queryStringParameters.numero1);
    const numero2 = parseInt(event.queryStringParameters.numero2);
    const suma = numero1 + numero2;    
  
    return {
      statusCode: 200,
      body: JSON.stringify({ suma: `la Suma de ${numero1} y ${numero2} es : ${suma}` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
