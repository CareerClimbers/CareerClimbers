const router = require('express').Router()
const Courses = require('../models/Courses.model');

const axios = require('axios')
const cheerio = require('cheerio')

const clean = require('../utils/clean')


/*
    METHOD:   GET <LIST>
    ENDPOINT: api/courses
*/
router.get('/courses', async (req, res) => {
    try {
        let courses = {}
        if(req.query['q']) {
            courses = await Courses.fuzzySearch(req.query['q']).select('title rating img instructor');
        } else if(req.query['filter']) {

        } 
        else {
            courses = await Courses.find({}).select('title rating img instructor');
        }
        res.json({courses});
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
    try {
        let course = await Courses.findById(_id);
        res.json(course)
    } catch(e) {
        let err = "Course doesn't exist or has been removed!";
        res.json(err);
    }
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


/*
    METHOD:   POST <ADD COURSE> 
    ENDPOINT: api/course/create
*/
router.post('/course/create',async (req, res) =>{
    let { link } = req.body;
    try {
        axios.get(link)
        .then(function (response) {
            const $ = cheerio.load(response.data);
            let title = clean($('[data-purpose="lead-title"]').text());
            let description;
            try {
                description = clean($('[data-purpose="collapse-description-text"]').children().last().html());
            }catch(e) {
                description = clean($('[data-purpose="safely-set-inner-html:description:description"]').html());
            }

            let img = $('.introduction-asset img').attr('src') || $('[data-purpose="introduction-asset"] img').attr('src') || 'fallback';
            let duration = clean($('span[data-purpose="video-content-length"]').text());
            let rating = Number($('span[id*="rate-count-value--"]').first().text()) || Number($('span[data-purpose="rating-number"]').first().text());
            let instructor = clean($('a.instructor-links__link').first().text()) || $('[class*="instructor-links--info--"] a').text();
            let students = Number(clean($('div[data-purpose="enrollment"]').first().text()).split(' ')[0].split(',').join(''));
            let tag = []
            $('.topic-menu a').each((idx, el) => {
                tag.push($(el).text().trim());
            })

            let course = {
                link,
                title,
                description,
                duration,
                rating,
                img,
                instructor,
                students,
                tag
            }
            let instance = new Courses(course);
            // console.log(instance)
            instance.save(err => console.log(err));
            
            res.json(course)
        }).catch(e => res.json(e))
    } catch(e) {
        res.json(e)
    }
})

module.exports =  router