const express = require('express')
const mongoose = require('./db/schema')
const cors = require('cors')
const parser = require('body-parser')

const app = express()

const Question = mongoose.model('Question')
const Lesson = mongoose.model('Lesson')
const Subject = mongoose.model('Subject')

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

app.listen(3001, () => {
  console.log('App listening on port 3001.')
})
