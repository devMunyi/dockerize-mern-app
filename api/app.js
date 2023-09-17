const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json([
        {
            "id":"1",
            "title":"Book Review: The Name of the Wind"
          },
          {
            "id":"2",
            "title":"Game Review: Pokemon Brillian Diamond"
          },
          {
            "id":"3",
            "title":"Show Review: Alice in Borderland"
          }
    ])
})

const port = 4000;
app.listen(port, () => {
    console.log(`Server ready on port ${port}...`)
})