const { config } = require('dotenv');
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

// Permitindo acesso para as variáveis de ambiente
config();

// Bootstrap da aplicação
server.listen(port, () => {
  console.log(`🚀 Servidor iniciado na porta ${port}`);
});
