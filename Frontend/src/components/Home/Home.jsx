import React from 'react'

import Header from './Header/Header'
import CourseCarousel from '../CourseCarousel/CourseCarousel'
import CategoryCard from '../Category/CategoryCard'

export default function Home() {
    return (
        <>
            <Header/>
            <CourseCarousel title="Popular Courses" subtitle='highly enrolled' url='?filter=popular&limit=8'/>
            <CategoryCard/>
            <CourseCarousel title="Top Rated" subtitle='highly rated' url='?filter=rating&limit=8'/>
        </>
    )
}
