import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {Skeleton, Carousel} from 'antd'
import {RightCircleOutlined, LeftCircleOutlined} from '@ant-design/icons'

import CourseCard from '../CourseCard/CourseCard'
import Title from '../Utils/Title'

const CustomNextArrow = (props) => {
  const {onClick} = props;
  return (
    <div
      onClick={onClick} 
      style={{display:'block'}}
      className='slick-arrow custom-next'
    >
      <RightCircleOutlined />
    </div>
  )
}

const CustomPrevArrow = (props) => {
  const {onClick} = props;
  return (
    <div
      onClick={onClick} 
      style={{display:'block'}}
      className='slick-arrow custom-prev'
    >
      <LeftCircleOutlined />
    </div>
  )
}

const settings = {
    slidesToShow: 4,
    dots: false,
    arrows: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    duration: 600,
    nextArrow: <CustomNextArrow/>,
    prevArrow: <CustomPrevArrow/>,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
}


export default ({title, subtitle, url}) => {

    const [courses, setCourse] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch(`/api/courses${url}`)
      .then(res => res.json())
      .then(res => {
        setCourse(res.courses)
        setLoading(false)
      })
      .catch(err => console.log(err))
    }, [url])

    return (
      <div className="container">
        <Title title={title} subtitle={subtitle}/>
        <div className='container'>
          {
            loading ? <Skeleton active/> :(
              <Carousel {...settings} effect='scrollx' >
                  {courses.map(course => 
                  <div key={course.title}>
                      <Link to={`/detail/${course._id}`} >
                          <CourseCard src={course.img} title={course.title} rating={course.rating} instructor={course.instructor}/>
                      </Link>
                  </div>
                  )}
              </Carousel>
            )
          }
        </div>
      </div>
    )
}
