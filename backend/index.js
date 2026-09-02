require("dotenv").config();

const express=require("express")
const cors=require("cors")

const port=7100
const app=express()

app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const watchCollection = client.db("data").collection("watches")

    app.post("/upload", async(req, res) => {
        const item = req.body
        const result = await watchCollection.insertOne(item)
        res.send({
            message: `successfully item uploaded`,
            status: 201,
            result
        })
    })

    app.get("/watch", async(req, res) => {
        const cursor = watchCollection.find();
        const result = await  cursor.toArray();
        res.send(result);
    })

    app.get("/watch/:id",async(req,res)=>{
        const id = req.params.id;
        const query = {_id:new ObjectId(id)};
        const result=await watchCollection.findOne(query);
        res.send(result);
    })

    app.delete("/delwatch/:id", async(req,res) => {
        const id = req.params.id;
        const query = {_id:new ObjectId(id)};
        const result = await watchCollection.deleteOne(query);
        res.send(result);
    })
 
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen( port , ()=>{
     console.log("server is running on port " , port)
}
)

