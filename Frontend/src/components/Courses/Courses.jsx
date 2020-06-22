import React from 'react'
import {Link} from 'react-router-dom'

import CourseCard from '../CourseCard/CourseCard'
import Title from '../Utils/Title'

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
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
    {src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    creator: 'Bogdun stashchuk',},
]

export default () => {
    return (
        <div className='container main'>
            <Title title='Courses'/>
            <div className="row">
                {courses.map(course => (
                    <div className='col-md-4 col-lg-3 col-12 my-2'>
                        <Link to={`/detail/${course.title}`}>
                            <CourseCard src={course.src} title={course.title} rating={course.rating} creator={course.creator}/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
