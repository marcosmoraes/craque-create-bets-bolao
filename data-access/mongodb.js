const mongoose = require('mongoose');
const { Bolao } = require('../model/create-bolao-model');

let cachedDbConnection = null;

const connectToDatabase = async (username, password, database) => {
    if (cachedDbConnection) {
        console.log('Usando conexão de banco de dados existente.');
        return cachedDbConnection;
    }
    try {
        const dbConnection = await mongoose.connect(`mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.slvyghg.mongodb.net/${database}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexão com o MongoDB estabelecida com sucesso!');
        cachedDbConnection = dbConnection;
        return dbConnection;
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
};

const findBolaoByBubbleId = async (BubbleId) => {
    try {
        return await Bolao.findOne({ bubbleId: BubbleId });
    } catch (error) {
        console.error('Erro ao buscar Bolao:', error);
    }
};


module.exports = {
    connectToDatabase,
    findBolaoByBubbleId
};
