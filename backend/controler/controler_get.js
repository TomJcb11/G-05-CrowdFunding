const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
      await client.connect();
      console.log("Connecté à MongoDB !");
    } catch (err) {
      console.error("Erreur de connexion à MongoDB :", err);
    }
}

async function getTestCollectionData(req, res) {
    try {
      // Connexion à la base de données MongoDB
      await connectToDatabase();
  
      // Récupération de la collection "test"
      const testCollection = client.db('test').collection('test');
  
      // Récupération des documents dans la collection
      const docs = await testCollection.find({}).toArray();
  
      console.log(docs);

      res.json(docs);
  
      return docs;
    } catch (err) {
      console.error(err);
      throw err;
    }

  };


module.exports = {
    getTestCollectionData
};