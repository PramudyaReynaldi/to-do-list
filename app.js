const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.get("/", (req, res) => {
   res.send("index");
});

app.listen(PORT, () => {
   console.log(`Sedang berjalan di http://localhost:${PORT}`);
});
