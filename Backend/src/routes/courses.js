const router = require('express').Router()
const Store_details = require('../models/detail');
const CourseList = require('../models/list_to_store')
const Courses = require('../models/courses')
const util = require('util')

const axios = require('axios')
const cheerio = require('cheerio')

function clean(s){ 
    return s.replace(/[\n\r\t]/g, ''); 
}


/*
    METHOD:   GET <LIST>
    ENDPOINT: api/courses
*/
router.get('/courses', async (req, res) => {
    try {
        let courses = {}
        if(req.query['q']) {
            
        } else {
            courses = await Store_details.find({});
        }
        res.json(courses);
    }catch(error) {
        res.json({'error': error})
    }
})


/*
    METHOD:   GET <DETAIL>
    ENDPOINT: api/courses/:id
*/
router.get('/course/:id', async (req, res) => {
    const _id = req.params.id
    const details = await Store_details.findById(_id)
   
    const url=details.link

    axios.get(url)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        let title = clean($('h1.clp-lead__title').text());
        //let description = $('div.clp-component-render div.description div.js-simple-collapse-inner').text();
        let description = clean($('[data-purpose="collapse-description-text"]').children().last().html());
        let image = details.img;
        let duration = clean($('span[data-purpose="video-content-length"]').text());
        let rating = $('span[id*="rate-count-value--"]').first().text();
        let instructor = clean($('a.instructor-links__link').first().text());
        let enrollment = clean($('div[data-purpose="enrollment"]').first().text());
        
        res.json({
            image,
            title,
            description,
            duration,
            url,
            rating,
            instructor,
            enrollment
        })
    })
    .catch( err => res.status(400).json(err))
})



/*
    METHOD:   DELETE 
    ENDPOINT: api/course/delete/:id
*/
router.delete('/course/delete/:id', async (req,res) =>{
    try{
        const course = await Courses.findByIdAndDelete(req.params.id)
        if(!course){
            return res.status(404).json({
                'msg': "No such course exists!"
            })
        }

        res.json({
            'msg': "Deleted Successfully",
            course
        })
    } catch (e){
        res.status(500).json(e)
    }
})


module.exports =  router