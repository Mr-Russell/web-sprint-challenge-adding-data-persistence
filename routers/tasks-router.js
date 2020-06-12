const router = require("express").Router();

const db = require("../data/db-connection.js")


router.post("/", (req, res)=>{
  db("tasks")
    .insert(req.body)
    .then(added => {
      res.status(201).json(added) // Remove this line when adding commented code below
      // db("tasks")
      //   .select("*")
      //   .where({"tasks.id": added})
      //   .then(task => res.status(201).json(task))
      //   .catch(err => {
      //     console.log(err)
      //     res.status(500).json("An Error occurred when adding New Task to the database")
      //   })
    })
    .catch(err => { // Remove this .catch when adding commented code above
      console.log(err)
      res.status(500).json(`An Error occurred when adding New Task to the database`)
    })
})

router.get("/", (req, res)=>{
  db("tasks")
    .select(
      "projects.name AS project_name",
      "projects.description AS project_description",
      "tasks.id AS task_id",
      "tasks.description AS task_description",
      "tasks.notes",
      "tasks.completed"
    )
    .join("projects", "projects.id", "tasks.project_id")
    .then(tasks => res.status(200).json(tasks))
})


module.exports = router