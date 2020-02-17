const app    = require("./app")
const PORT   = 3000
const routes = require("./routes")

const cors       = require("cors")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", routes)

app.listen(PORT, () => console.log(`** Server running on port ${PORT} **`))