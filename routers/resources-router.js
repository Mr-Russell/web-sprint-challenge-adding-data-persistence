const router = require("express").Router();

const db = require("../data/db-connection.js")


router.post("/", (req, res)=>{
  db('resources')
    .insert(req.body)
    .then(added => {
      res.status(201).json(added) // Remove this line when adding commented code below
      // db('resources')
      //   .select("*")
      //   .where({"resources.id": added})
      //   .first()
      //   .then(resource => res.status(201).json(resource))
      //   .catch(err =>{
      //     console.log(err)
      //     res.status(500).json(`An Error occurred when adding ${req.body.name} to the Resources list`)
      //   })
    })
    .catch(err => { // Remove this .catch when adding commented code above
      console.log(err)
      res.status(500).json(`An Error occurred when adding item to the Resources list`)
    })
})

router.get("/", (req, res)=>{
  db("resources")
    .select("*")
    .then(resources => res.status(200).json(resources))
    .catch(err => {
      console.log(err)
      res.status(500).json("An Error occurred when retrieving the list of Resources")
    })
})


module.exports = router