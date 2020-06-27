const router = require('express').Router()
const Courses = require('../models/Courses.model');

const axios = require('axios')
const cheerio = require('cheerio')

const clean = require('../utils/clean');
const Course = require('../models/Courses.model');


/*
    METHOD:   GET <LIST>
    ENDPOINT: api/courses
*/
router.get('/courses', async (req, res) => {
    try {
        let courses = {}
        
        /* FILTER LOGIC & SORT LOGIC */
        let courses_limit = parseInt(req.query['limit']) || 16
        
        let query = req.query['q'] || req.query['category'] || req.query['instructor'] || "";
        
        let sort = {}

        if(req.query['filter'] == 'popular')
            sort['students'] = -1
        
        if(req.query['filter'] == 'rating')
            sort['rating'] = -1

        courses = await Courses.fuzzySearch(query)
        .sort(sort)
        .select('title rating img instructor')

        
        /* PAGINATION LOGIC */
        let page = parseInt(req.query['page']) || 0;
        let pageCount = Math.ceil(courses.length / courses_limit) - 1;
        let currentPage = page;
        let hasNext = page < pageCount;
        let hasPrev = page > 0;

        let pagination = {
            currentPage,
            hasNext,
            hasPrev
        }
        
        let start = currentPage * courses_limit;
        let end = (currentPage + 1) * courses_limit ;
        courses = courses.slice(start , end);
        
        res.json({courses, ...pagination})
        
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


/*
    METHOD:   POST <MULTIPLE COURSE> 
    ENDPOINT: api/course/multiple/create/
*/
router.post('/course/multiple/create', async (req, res) => {
    var { links } = req.body;
    var promises = []
    for(link of links) {
        promises.push(await axios.post('http://localhost:5000/api/course/create', {link}))
    }
    try {
        var response = await Promise.all(promises)
        return res.json({'msg':'Created successfully'})
    } catch(err) {
        return res.json(err)
    }
})


/*
    METHOD:   GET <SIMILAR COURSE> 
    ENDPOINT: api/course/similar/:id
*/
router.get('/courses/similar/:id', async (req, res) => {
    var id = req.params.id;
    var course = await Courses.findById(id)
    var courses = await Courses.fuzzySearch({tag : { $all : course.tag}, _id: {$ne:course._id}})
    res.json({courses})
})


module.exports =  router