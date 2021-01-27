var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */
router.get('/', function (req, res, next) {
    const uri = "mongodb+srv://dbanfi:dbanfi@cluster0.wbjdm.mongodb.net/dbname?retryWrites=true&w=majority"
    /*const uri = "mongodb+srv://dbanfi:dbanfi@cluster0.wbjdm.mongodb.net/test"*/

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("educazione_civica1").collection("access_to_rural_population"); 
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);
            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/rural_on_total', function (req, res, next) {
    const uri = "mongodb+srv://dbanfi:dbanfi@cluster0.wbjdm.mongodb.net/dbname?retryWrites=true&w=majority"
    /*const uri = "mongodb+srv://dbanfi:dbanfi@cluster0.wbjdm.mongodb.net/test"*/

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("educazione_civica1").collection("access_to_rural_population_on_total"); 
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);
            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/survived_to_age65', function (req, res, next) {
    const uri = "mongodb+srv://dbanfi:dbanfi@cluster0.wbjdm.mongodb.net/dbname?retryWrites=true&w=majority"
    /*const uri = "mongodb+srv://dbanfi:dbanfi@cluster0.wbjdm.mongodb.net/test"*/

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("educazione_civica1").collection("access_to_survival_at_age65"); 
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);
            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

module.exports = router;
