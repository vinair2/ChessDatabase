const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });




const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true });

let results;
let eco = "A00";
let cursor = null;
let cursorWin = null;
let cursorLoss = null;
let cursorDraw = null;
let gamesCount = 0;
let lossCount = 0;
let winCount = 0;
let drawCount = 0;
let isConnected = false;
let dbTotal = 4613006;
let dbTotalWin = 2144136;
let dbTotalLoss =1915952;
let dbTotalDraw = 552918;

async function run() {
  try {
    await client.connect();
    const db = client.db("LiChessEliteGamesDB");
    const gamesCollection = db.collection("EliteGamesMasterList");
    console.log("Server connect and running");
    



    const result = await db.command({dbStats: 1,});
  } catch (error) {
    console.error(error);
    process.exit(1);
  } 
}
run();

app.post("/update",async (req, res) => {
  
  try {
    const eco = req.body.value;

    const gamesCollection = client.db("LiChessEliteGamesDB").collection("EliteGamesMasterList");
    const cursor = gamesCollection.find({eco: eco});
    const results = await cursor.toArray();
    const gamesCount = results.length;

    const cursorWin = gamesCollection.find({eco: eco, result: "1-0" });
    const resultsWin = await cursorWin.toArray();
    const winCount = resultsWin.length;

    const cursorLoss = gamesCollection.find({eco: eco, result: "0-1" });
    const resultsLoss = await cursorLoss.toArray();
    const lossCount = resultsLoss.length;

    const cursorDraw = gamesCollection.find({eco: eco, result: "1/2-1/2" });
    const resultsDraw = await cursorDraw.toArray();
    const drawCount = resultsDraw.length;
    console.log(gamesCount + " " + winCount + " " + lossCount + " " + drawCount);

    res.send({ gamesCount, winCount, lossCount, drawCount });
  } catch (error) {
    console.error(error);
  }
  
});
















app.listen(3000, () => {
  console.log("server started on port 3000");
});

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

app.post("/", (req, res) => {
    res.send({dbTotal, dbTotalWin, dbTotalLoss, dbTotalDraw});
});



//OLD CODE


//mongoose.connect('mongodb://127.0.0.1:27017/');



/*
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/", true);
xhr.onreadystatechange = function () {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    document.getElementById("data").innerHTML = this.responseText;
  }
};
xhr.send();
*/







/*
<h1 id="data"> Data Will Apppear Here: </h1>
<script>
   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        document.getElementById("numOfGames").innerHTML += this.responseText
        console.log(xhr.responseText)
        console.log(xhr)
    }
}
xhr.open('GET', "http://localhost:3000/", true)
xhr.send();
</script>
*/



/*


<script>
   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        document.getElementById("numOfGames").innerHTML += this.responseText
        console.log(xhr.responseText)
        console.log(xhr)
    }
}
xhr.open('GET', "http://localhost:3000/", true)
xhr.send();
</script>

*/


/*
fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(data => console.log(data))
    
*/


/*
  let calls = 1;
  app.get('/'+ calls, function(req, res){
   
    
   } );*/


   /*

<script>
    $(document).ready(function() {
  $('#dbEcoData').change(function() {
    let data = $(this).val();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/',
      data: JSON.stringify({eco: data}),
      contentType: 'application/json',
      success: function(response) {
        console.log(response);
      }
    });
  });
});
</script>

   */