import React from 'react'

import Header from './Header/Header'
import CourseCarousel from '../CourseCarousel/CourseCarousel'
import CategoryCard from '../Category/CategoryCard'

export default function Home() {
    return (
        <>
            <Header/>
            <CourseCarousel title="Popular Courses" subtitle='top rated'/>
            <CategoryCard/>
            <CourseCarousel title="Popular Courses" subtitle='top rated'/>
        </>
    )
}
