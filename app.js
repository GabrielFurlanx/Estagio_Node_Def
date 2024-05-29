const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

//const db = require('./models/db');

const indices = require('./models/indices');

const valoresTabela = require('./models/valoresTabela');
const inputs = require('./models/inputs');



// Criar o middleware para receber os dados no corpo da requisição via json
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));




// Fazer com que o telaCalculo funcione o html, css e js
app.use('/calculo', express.static(path.join(__dirname, 'view', 'telaCalculo')));
app.use('/css', express.static(path.join(__dirname, 'view', 'telaCalculo', 'css')));
app.use('/javascript', express.static(path.join(__dirname, 'view', 'telaCalculo', 'javascript')));


app.get('/calculo', (req, res) => {
    const filePath = path.join(__dirname, 'view', 'telaCalculo', 'html', 'calculo.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Erro ao enviar o arquivo:', err);
            res.status(500).send('Erro ao enviar o arquivo');
        }
    });
});






















app.post('/valores', async (req, res) => {
  try {
    // Receber os dados do cliente
    const data = req.body;

    // Verificar se o índice é nulo ou vazio
    if (data.indice0 === null || data.indice0 === '') {
      console.log('Índice nulo ou vazio recebido, não será cadastrado no banco de dados.');
      return res.status(400).json({ error: 'Índice nulo ou vazio recebido, não será cadastrado no banco de dados.' });
    }

  
    const dadosParaInserir = {
            val1: parseFloat(data.inputValor1),
            val2: parseFloat(data.inputValor2),
            val3: parseFloat(data.inputValor3),
            val4: parseFloat(data.inputValor4),
            indice_0 : data.indice0,
            val1_1: parseFloat(data.inputValor1_1),
            val2_1: parseFloat(data.inputValor2_1),
            val3_1: parseFloat(data.inputValor3_1),
            val4_1: parseFloat(data.inputValor4_1),
            indice_1 : data.indice1,
            val1_2: parseFloat(data.inputValor1_2),
            val2_2: parseFloat(data.inputValor2_2),
            val3_2: parseFloat(data.inputValor3_2),
            val4_2: parseFloat(data.inputValor4_2),
            indice_2 : data.indice2,
            val1_3: parseFloat(data.inputValor1_3),
            val2_3: parseFloat(data.inputValor2_3),
            val3_3: parseFloat(data.inputValor3_3),
            val4_3: parseFloat(data.inputValor4_4),
            indice_3 : data.indice3,
            val1_4: parseFloat(data.inputValor1_4),
            val2_4: parseFloat(data.inputValor2_4),
            val3_4: parseFloat(data.inputValor3_4),
            val4_4: parseFloat(data.inputValor4_4),
            indice_4 : data.indice4,
            val1_5: parseFloat(data.inputValor1_5),
            val2_5: parseFloat(data.inputValor2_5),
            val3_5: parseFloat(data.inputValor3_5),
            val4_5: parseFloat(data.inputValor4_5),
            indice_5 : data.indice5,
            val1_6: parseFloat(data.inputValor1_6),
            val2_6: parseFloat(data.inputValor2_6),
            val3_6: parseFloat(data.inputValor3_6),
            val4_6: parseFloat(data.inputValor4_6),
            indice_6 : data.indice6,
            val1_7: parseFloat(data.inputValor1_7),
            val2_7: parseFloat(data.inputValor2_7),
            val3_7: parseFloat(data.inputValor3_7),
            val4_7: parseFloat(data.inputValor4_7),
            indice_7 : data.indice7,
            val1_8: parseFloat(data.inputValor1_8),
            val2_8: parseFloat(data.inputValor2_8),
            val3_8: parseFloat(data.inputValor3_8),
            val4_8: parseFloat(data.inputValor4_8),
            indice_8 : data.indice8,
            val1_9: parseFloat(data.inputValor1_9),
            val2_9: parseFloat(data.inputValor2_9),
            val3_9: parseFloat(data.inputValor3_9),
            val4_9: parseFloat(data.inputValor4_9),
            indice_9 : data.indice9,
            val1_10: parseFloat(data.inputValor1_10),
            val2_10: parseFloat(data.inputValor2_10),
            val3_10: parseFloat(data.inputValor3_10),
            val4_10: parseFloat(data.inputValor4_10),
            indice_10 : data.indice10,
            val1_11: parseFloat(data.inputValor1_11),
            val2_11: parseFloat(data.inputValor2_11),
            val3_11: parseFloat(data.inputValor3_11),
            val4_11: parseFloat(data.inputValor4_11),
            indice_11 : data.indice11,
            val1_12: parseFloat(data.inputValor1_12),
            val2_12: parseFloat(data.inputValor2_12),
            val3_12: parseFloat(data.inputValor3_12),
            val4_12: parseFloat(data.inputValor4_12),
            indice_12 : data.indice12,
            val1_13: parseFloat(data.inputValor1_13),
            val2_13: parseFloat(data.inputValor2_13),
            val3_13: parseFloat(data.inputValor3_13),
            val4_13: parseFloat(data.inputValor4_13),
            indice_13 : data.indice13,
            val1_14: parseFloat(data.inputValor1_14),
            val2_14: parseFloat(data.inputValor2_14),
            val3_14: parseFloat(data.inputValor3_14),
            val4_14: parseFloat(data.inputValor4_14),
            indice_14 : data.indice14,
            ipa_Final : data.ipaFinal,
            pp_Final : data.ppFinal,

    };

 // Registrar os dados recebidos no console
 console.log('Dados recebidos:', dadosParaInserir);

 // Inserir os dados na tabela do banco de dados
 const novoRegistro = await valoresTabela.create(dadosParaInserir);

 // Responder ao cliente com os dados inseridos na tabela
 res.json({
   message: 'Dados recebidos e inseridos com sucesso!',
   registro: novoRegistro
 });
} catch (error) {
 console.error('Erro ao processar os dados:', error);
 res.status(500).json({ error: 'Erro ao processar os dados' });
}
});




/*

app.post('/valores', async (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(req.body);
});

*/





app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000: http://localhost:3000');
});