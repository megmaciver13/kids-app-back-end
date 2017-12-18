const mongoose = require('./connection')

const QuestionSchema = new mongoose.Schema({
  question: String,
  answers: [
    {
      image: String,
      text: String,
      isCorrect: Boolean
    },
    {
      image: String,
      text: String,
      isCorrect: Boolean
    },
    {
      image: String,
      text: String,
      isCorrect: Boolean
    }
  ]
})

const LessonSchema = new mongoose.Schema({
  name: String,
  lessonImage: String,
  questions: [QuestionSchema]
})

const SubjectSchema = new mongoose.Schema({
  name: String,
  subjectImage: String,
  lessons: [LessonSchema]
})

const Question = mongoose.model('Question', QuestionSchema)
const Lesson = mongoose.model('Lesson', LessonSchema)
const Subject = mongoose.model('Subject', SubjectSchema)

module.exports = {
  Question: Question,
  Lesson: Lesson,
  Subject: Subject
}
