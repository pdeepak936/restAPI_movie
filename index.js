const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/list_movies",(req,res) => {
  res.sendFile(__dirname + "/" + "movies.json"), 'utf8', (err,data)=>{
    res.json(data);
  }
})

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`node server is running on port ${port}`);
});
