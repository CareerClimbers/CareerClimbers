import React from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'

import CourseCard from '../CourseCard/CourseCard'
import Title from '../Utils/Title'

const settings = {
    slidesToShow: 4,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ],
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    duration: 600,
    arrows: true,
}

const courses = [
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
]




export default ({title, subtitle}) => {
    return (
        <div className='course-carousel container'>
            <div className="container">
            <Title title={title} subtitle={subtitle}/>
              <Slider {...settings}>
                  {courses.map(course => 
                  <div className='px-2' key={course.title}>
                      <Link to={`/detail/${course.title}`} >
                          <CourseCard src={course.src} title={course.title} rating={course.rating} creator={course.creator}/>
                      </Link>
                  </div>
                  )}
              </Slider>
            </div>
        </div>
    )
}
