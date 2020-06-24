const mongoose = require('mongoose')
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching')


const CourseSchema = new mongoose.Schema({
  img:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  link:{
    type:String,
    required:true,
    unique: true
  },
  tag: [{type:String}],
  description: String,
  duration: String,
  instructor: String,
  students: Number,
  rating: Number,
})


CourseSchema.plugin(mongoose_fuzzy_searching, { fields : [
  'title',
  'tag',
  'instructor'
]})

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course
