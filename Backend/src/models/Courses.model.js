const mongoose = require('mongoose')
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching')


const CourseSchema = new mongoose.Schema({
  img:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  link:{
    type:String,
    required:true
  },
  tag: String,
  description: String,
  duration: String,
  instructor: String,
  students: Number,
  rating: Number,
})


CourseSchema.plugin(mongoose_fuzzy_searching, { fields : [
  'name',
  'tag',
  'instructor'
]})

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course
