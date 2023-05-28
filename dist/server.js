"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const Connection_1 = require("./Models/Connection");
const PORT = process.env.PORT || 3001;
(0, Connection_1.default)()
    .then(() => {
    app_1.default.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}, e conectado ao banco de dados!`));
})
    .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
});
//# sourceMappingURL=server.js.map