const express = require('express')
const mongoose = require('./db/schema')
const cors = require('cors')
const parser = require('body-parser')

const app = express()

const Schema = require('./db/schema')

const Subject = Schema.Subject
const Lesson = Schema.Lesson
const Question = Schema.Question

app.use(cors()) // As a next step, consider configuring CORS to only allow access from origins you expect
app.use(parser.json())
// Consider using seperate files for controllers for better seperation of concerns
app.get('/', (req, res) => {
  Subject.find()
    .then(subjects => {
      res.json(subjects)
    })
    .catch(err => {
      console.log(err)// You can also use `res.status(500).send('Something broke!')` to send an html error code.
      // Checkout http://expressjs.com/en/guide/error-handling.html
    })
})

app.get('/subjects', (req, res) => {
  res.redirect('/')
})

app.get('/subjects/:subject_id', (req, res) => {
  Subject.findById(req.params.subject_id)
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
      res.json(lesson)
    })
    .catch(err => {
      console.log(err)
    })
})

app.post('/subjects/:subject_id/lesson', (req, res) => {
  Subject.findById(req.params.subject_id)
    .then(subject => {
      subject.lessons.push(req.body)
      subject.save()
        .then(subject => {
          res.json('new lesson added!')// Probably makes more sense just to use `res.send()` in these cases
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

app.put('/subjects/:subject_id/lesson/:id/questions', (req, res) => {
  Subject.findById(req.params.subject_id)
    .then(subject => {
      let lesson = subject.lessons.id(req.params.id)
      lesson.lessonImage = req.body.lessonImage
      lesson.name = req.body.name
      subject.save()
        .then(subject => {
          res.json(subject)
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

app.post('/subjects/:subject_id/lesson/:id/questions', (req, res) => {
  console.log(req.body)
  Subject.findById(req.params.subject_id)
    .then(subject => {
      let lesson = subject.lessons.find(lesson => {
        return lesson._id == req.params.id
      })
      lesson.questions.push(req.body)
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

app.delete('/subjects/:subject_id/lesson/:id', (req, res) => {
  Subject.findById(req.params.subject_id)
    .then(subject => {
      let lessonIndex = subject.lessons.findIndex(lesson => {
        return lesson._id == req.params.id
      })
      subject.lessons.splice(lessonIndex, 1)
      subject.save()
        .then(subject => {
          res.json('lesson deleted!')
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

// Really good job navigating through your nested data.

app.listen(process.env.PORT || 3001)
