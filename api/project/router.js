// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.get()
    .then(project => {
        project.forEach(one => {
            if (one.project_completed === 0) {
                one.project_completed = false
            } else {
                one.project_completed = true
            }
        })
        res.status(200).json(project)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Projects.insert(req.body)
        .then(project => {
            if (project.project_completed === 0) {
                project.project_completed = false
            } else {
                project.project_completed = true
            }
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router;