const express = require('express')
const mongoose = require('./db/schema')
const cors = require('cors')
const parser = require('body-parser')

const app = express()

const Schema = require ('./db/schema')

const Subject = Schema.Subject
const Lesson = Schema.Lesson
const Question = Schema.Question

app.use(cors())
app.use(parser.json())

app.get('/', (req, res) => {
  Subject.find()
    .then(subjects => {
      res.json(subjects)
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/subjects', (req, res) => {
  res.redirect('/')
})

app.get('/subjects/:id', (req, res) => {
  Subject.findById(req.params.id)
    .then(subject => {
      res.json(subject)
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/subjects/:subject_id/lesson/:id', (req, res) => {
  Lesson.findById(req.params.id)
    .then(lesson => {
      res.json(lesson)
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(process.env.PORT || 3001)
