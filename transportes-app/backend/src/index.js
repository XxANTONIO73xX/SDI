require('dotenv').config();
require('./database'); 
const { swaggerDocs: V1SwaggerDocs } = require("./swagger");
const app = require('./app');




async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
    V1SwaggerDocs(app, app.get('port'));
}
main()