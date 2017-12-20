const express = require('express')
const mongoose = require('./db/schema')
const cors = require('cors')
const parser = require('body-parser')

const app = express()

const Schema = require('./db/schema')

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
  Subject.findOne({ _id: req.params.subject_id })
    .then(subject => {
      let lesson = subject.lessons.find((lesson) => {
        return lesson._id == req.params.id
      })
      console.log(lesson)
      res.json(lesson)
    })
    .catch(err => {
      console.log(err)
    })
})

app.post('/subjects/:id', (req, res) => {
  Subject.findById(req.params.id)
    .then(subject => {
      subject.lessons.push({name: req.body.name, lessonImage: req.body.lessonImage, questions: []})
      subject.save()
        .then(subject => {
          res.json('new lesson added!')
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

app.post('/subjects/:subject_id/lesson/:id', (req, res) => {
  Subject.findById(req.params.subject_id)
    .then(subject => {
      console.log(subject)
      let lesson = subject.lessons.find(lesson => {
        return lesson._id == req.params.id
      })
      console.log(lesson)
      let newAnswer1 = {image: req.body.image1, text: req.body.text1, isCorrect: req.body.isCorrect1}
      let newAnswer2 = {image: req.body.image2, text: req.body.text2, isCorrect: req.body.isCorrect2}
      let newAnswer3 = {image: req.body.image3, text: req.body.text3, isCorrect: req.body.isCorrect3}
      lesson.questions.push({question: req.body.question, answers: [newAnswer1, newAnswer2, newAnswer3]})
      subject.save((err, subject) => {
        if (err) {
          console.log(err)
        } else {
          res.json(subject)
        }
      })
      res.json(lesson)
    })
    .catch(err => console.log(err))
})

app.listen(process.env.PORT || 3001)
