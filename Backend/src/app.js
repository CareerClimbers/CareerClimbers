const express = require('express')
const Courses = require('./models/courses');
const path = require('path')
const hbs = require('hbs')

const Store_details = require('./models/Courses.model')

const cheerio = require('cheerio');
const axios = require('axios');


require('./db/mongoose');


const app = express()

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
 // Static Directory to serve

app.use(express.static(publicDirectoryPath));

app.use(express.json())
app.use(require('cors')())



// ROUTES
app.use('/api', require('./routes/courses'))


app.post('/admin',async (req,response) =>{

  try {
    const link =new List(req.body)
    string=link.link
    var res = string.toString().split("?")

    axios.get(link.link).then(async function(response){
      const $ = cheerio.load(response.data)
      let title = $('h1.clp-lead__title').html();
      let image = $('.introduction-asset img').attr('src')

      var tag=[]
      $('.topic-menu__items').find('a').each(function (index,element){
        tag.push($(element).text())
      })

  //topic-menu__items topic-menu__item topic-menu__link

      const details = new Store_details({
        img:image,
        link:link.link,
        name:title,
        tag:tag[1],
        couponCode:res[1]
      });


      await details.save()
    })

    await link.save()

    //response.sendStatus(200).send(link)
    response.json(link)


  } catch (e){
    //res.sendStatus(400)
    response.sendStatus(400).send(e)
  }
})


app.get('', async (req,res,next) =>{
  try {
    const details = await Store_details.find({})

    let my_list = {course:details}
    //console.log(my_list)

    res.render('index',my_list)
  } catch (e){
    res.status(500).send()
  }
})


app.post('/courses', async (req,res) =>{
  // console.log(req.body)
  // res.send('testing')
  const course = new Courses(req.body)

  try {
    await course.save()
    res.json(course)
  } catch (e){
    res.status(400).send(e)
  }
})


app.get('/additional_course', async (req,res,next) =>{

  try {
    const course =await Courses.find({})
    let list={cu:course}
    res.render('additional_course',list)
  } catch (e){
    res.status(500).send()
  }
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
  console.log(`Spinning up server on port ${PORT}`);
})