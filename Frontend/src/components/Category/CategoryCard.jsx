import React from 'react'
import {Link} from 'react-router-dom'

import Category from './Category'
import HorizontalCard from './HorizontalCard'
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
    creator: 'Bogdun stashchuk',}
]

export default () => {
    return (
        <div className='bg-light my-4 py-4'>
            <div className="container">
                <Title title='Browse by Category'/>
                <div className="row mt-4">
                    <div className="col-md-4 ">
                        <div className='md-block'>
                            <Category/>
                        </div>
                        <div className='md-hidden mb-3 d-flex justify-content-between mobile-category'>
                            <h4>Categories</h4>
                            <div class="dropdown">

                            <a class="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Category
                            </a>

                            <div class="dropdown-menu small" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="/">Web Development</a>
                                <a class="dropdown-item" href="/">Machine Learning</a>
                                <a class="dropdown-item" href="/">Deep Learning</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {courses.map(course => <Link key={course.title} to={`/detail/${course.title}`}><HorizontalCard src={course.src} title={course.title} rating={course.rating} creator={course.creator} /></Link>)}
                        <div className="text-center mt-4">
                            <button className='text-uppercase btn-sm btn btn-primary'> View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
