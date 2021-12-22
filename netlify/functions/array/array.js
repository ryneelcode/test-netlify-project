// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const getList = event.queryStringParameters.list;
    const list = getList.split(", ");
    const resultado = list.sort();


    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${resultado}` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
