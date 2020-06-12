const router = require("express").Router();

const db = require("../data/db-connection.js")

router.post("/", (req, res)=>{
  db("projects")
    .insert(req.body)
    .then(added => {
      res.status(201).json(added) // Remove this line when adding commented code below
      // db("projects")
      //   .select("*")
      //   .where({"projects.id": added})
      //   .then(project => res.status(201).json(project))
      //   .catch(err => {
      //     console.log(err)
      //     res.status(500).json("An Error occurred when adding New Project to the database")
      //   })
    })
    .catch(err => { // Remove this .catch when adding commented code above
      console.log(err)
      res.status(500).json(`An Error occurred when adding New Project to the database`)
    })
})

router.get("/", (req, res)=>{
  db("projects")
    .select("*")
    .then(projects => res.status(200).json(projects))
    .catch(err => {
      console.log(err)
      res.status(500).json("An Error occurred when retrieving Projects list")
    })
})

router.get("/:id/resources", (req, res)=>{
  db("project_resources AS pr")
    .where({"pr.project_id": req.params.id})
    .select("r.name", "r.description")
    .join("resources AS r", "r.id", "pr.resource_id")
    .then(resources => res.status(200).json(resources))
    .catch(err => {
      console.log(err)
      res.status(500).json(`An Error occurred when retrieving a List of Resources for Project ID ${req.params.id} `)
    })
})

router.get("/:id/tasks", (req, res)=>{
  db("tasks AS t")
    .where({"t.project_id": req.params.id})
    .select(
      "p.name AS project_name",
      "t.id AS task_id",
      "t.description AS task_description",
      "t.notes AS task_notes",
      "t.completed AS task_completed"
    )
    .join("projects AS p", "p.id", "t.project_id")
    .then(tasks => res.status(200).json(tasks))
    .catch(err => {
      console.log(err)
      res.status(500).json(`An Error occurred when retrieving a List of Tasks for Project ID ${req.params.id} `)
    })
})




module.exports = router