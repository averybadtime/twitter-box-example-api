const express = require("express")
const Router = express.Router()
const Twit = require("twit")

Router.post("/post", (req, res) => {
  const { config, tweet } = req.body
  const T = new Twit(config)
  const update = new Array(tweet.quantity).fill().map((x, i) => {
    return x = T.post("statuses/update", { status: `${i + 1}. ${tweet.content}` })
  })
  Promise.all(update)
    .then(response => res.send({ response }))
    .catch(error => res.send({ error }).status(500))
})

module.exports = Router