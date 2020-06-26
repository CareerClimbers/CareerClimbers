import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'

import {Spin} from 'antd'

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


export default ({title, subtitle, url}) => {

    const [courses, setCourse] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch(`http://localhost:5000/api/courses${url}`)
      .then(res => res.json())
      .then(res => {
        setCourse(res.courses)
        setLoading(false)
      })
      .catch(err => console.log(err))
    }, [url])

    return (
        <div className='course-carousel container'>
            <div className="container">
            <Title title={title} subtitle={subtitle}/>
            {
              loading ? <Spin/> :(
                <Slider {...settings}>
                    {courses.map(course => 
                    <div className='px-2' key={course.title}>
                        <Link to={`/detail/${course.title}`} >
                            <CourseCard src={course.img} title={course.title} rating={course.rating} instructor={course.instructor}/>
                        </Link>
                    </div>
                    )}
                </Slider>
              )
            }
            </div>
        </div>
    )
}
