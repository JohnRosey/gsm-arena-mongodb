const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;
require('dotenv').config();
console.log('MongoDB URI:', process.env.MONGODB_URI);
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());
app.get('/api/search', async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("GSMARENA").collection("phones");
    // Add query logic based on req.query
    const results = await collection.find({}).toArray(); // Update with actual query
    res.json(results);
  } catch (e) {
    res.status(500).send('Error fetching data');
  } finally {
    await client.close();
  }
});
//afficher la liste des marques se trouvant dans la base de données dans la collection phones
app.get('/api/brands', async (req, res) => {
    try {
        await client.connect();
        const collection = client.db("GSMARENA").collection("phones");

        // Add query logic based on req.query
        const brands = await collection.distinct("brand"); 

        res.json(brands);
    } catch (e) {
        res.status(500).send('Error fetching data');
    } finally {
        await client.close();
    }
    });

app.use(cors({
    origin: 'http://localhost:4200'

  }));
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
