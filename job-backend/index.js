require('dotenv').config()
var express = require('express');
var cors = require('cors');
var app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@job-portal.i6bgssa.mongodb.net/?retryWrites=true&w=majority&appName=Job-Portal`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function startServer() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = client.db("JobPortal");
    const jobCollection = database.collection("Jobs");

    app.post("/post-job", async (req, res) => {
      const job = req.body;
      job.createAt = new Date();
      const result = await jobCollection.insertOne(job);
      try {
        if (result.insertedId)
          return res.send({ success: true, message: "Job posted successfully" });
      } catch {
        return res.send({ success: false, message: "Failed to post job" });
      }
    });

    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollection.find().toArray();
      res.send(jobs);
    });

    app.get("/my-jobs/:email",async(req,res)=>{
      const email=req.params.email;
      const jobs=await jobCollection.find({postedBy:email}).toArray();
      res.send(jobs);
    })

    app.get("/delete-job/:id",async(req,res)=>{
      const id=req.params.id;
      const result=await jobCollection.deleteOne({_id:ObjectId(id)});
      if(result.deletedCount===1){
        res.send({success:true,message:"Job deleted successfully"});
        }else{
          res.send({success:false,message:"Failed to delete job"});

    }})
  

    app.get('/', (req, res) => {
      res.send("Hello World");
    });

    app.listen(port, function () {
      console.log(`App Listening to ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

startServer();