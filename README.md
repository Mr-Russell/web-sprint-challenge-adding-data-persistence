# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Entities

- [X] A `project` is what needs to be done. We want to store the following data about a `project`:

  - [X] a unique ID.
  - [X] a name. This column is required.
  - [X] a description.
  - [X] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

- [X] A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

  - [X] a unique ID.
  - [X] a name. This column is required.
  - [X] a description.
  - [X] The database should not allow resources with duplicate names.

- [X] A `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

  - [X] a unique ID.
  - [X] a description of what needs to be done. This column is required.
  - [X] a notes column to add additional information.
  - [X] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between `Relational Databases` and `SQL`.

  Relational Databases are a way to store many types of data that all relate to each other. SQL is a programming language that helps developers manage databases and the data within them, but it is not a database itself.


2. Why do tables need a `primary key`?

   It is important for all tables to have a primary key so that each individual entry can have a unique identifier. It is not uncommon for people to have the same name, but when their names are stored in a database, they should have an ID number (or string) that is unique to only them.


3. What is the name given to a table column that references the primary key on another table.

  This is known as a Foreign Key


4. What do we need in order to have a _many to many_ relationship between two tables.

  To mange data from multiple tables, it is important to have an Intermediary Table which uses Foreign Keys to reference the primary keys of the related tables. An online store will have to manage orders and products. An order will contain multiple products, and one product can appear in many different orders. In this case, it is important to have an intermediary table which tracks the different products in different orders


You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

- [X] Create a forked copy of this project
- [X] Add your team lead as collaborator on Github
- [X] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [X] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [X] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
  - [X] a `project` can have multiple `tasks`.
  - [X] a `task` belongs to only one `project`.
  - [X] a `project` can use multiple `resources`. Example of `resources` are: computer, conference room, microphone, delivery van.
  - [X] the same `resource` can be used in multiple `projects`.
  - [X] when adding `projects` the client must provide a name, the description is optional.
  - [X] when adding `resources` the client must provide a name, the description is optional.
  - [X] when adding a `task` the client must provide a description, the notes are optional.
  - [X] when adding a `task` the client must provide the `id` of an existing project.
  - [X] for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.

- [ ] Build an API with endpoints for:
  - [X] adding resources.
  - [X] retrieving a list of resources.
  - [X] adding projects.
  - [X] retrieving a list of projects.
  - [X] adding tasks.
  - [X] retrieving a list of tasks. **The list of tasks should include the project name and project description**.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [X] Add an endpoint to get a list of project resources.
- [X] Add an endpoint to get a list of project tasks.
- [ ] Add an endpoint to see all projects using a particular resource.
- [ ] Add support for assigning `resources` directly to `tasks` in addition to adding them to `projects`

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
