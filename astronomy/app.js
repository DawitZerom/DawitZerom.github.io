const express = require("express");
const app = express();
const path = require('path');
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(
  express.static(
    "C:/Users/student/Documents/GitHub/DawitZerom.github.io/AstronomyPicture1/public"
  )
);

app.get("/", (req, res, next) => {
    console.log('first get');
  res.sendFile(
    "C:/Users/student/Documents/GitHub/DawitZerom.github.io/AstronomyPicture1/public/astronomy.html"
  );
 
});
app.post("/submit", (req, res) => {
  console.log(req.query);
});

app.listen(8080, () => {
  console.log("server running on port 8070");
});
