const axios = require('axios')
const cheerio = require('cheerio')

const clean = require('./clean')

module.exports = (link) => {
    try {
        axios.get(link)
        .then(function (res) {
            const $ = cheerio.load(res.data);
            let title = clean($('[data-purpose="lead-title"]').text());
            let description;
            try {
                description = clean($('[data-purpose="collapse-description-text"]').children().last().html());
            }catch(e) {
                description = clean($('[data-purpose="safely-set-inner-html:description:description"]').html());
            }

            let image = $('.introduction-asset img').attr('src') || $('[data-purpose="introduction-asset"] img').attr('src') || 'fallback';
            let duration = clean($('span[data-purpose="video-content-length"]').text());
            let rating = Number($('span[id*="rate-count-value--"]').first().text()) ;
            let instructor = clean($('a.instructor-links__link').first().text());
            let students = Number(clean($('div[data-purpose="enrollment"]').first().text()).split(' ')[0].split(',').join(''));

            let course = {
                title,
                description,
                duration,
                rating,
                image,
                instructor,
                students
            }
            console.log(course)
            return course
        }).catch(e => e)
    } catch(e) {
        return e;
    }
}
