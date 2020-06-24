import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {loadCourses} from '../../redux/actions/courses'

import CourseCard from '../CourseCard/CourseCard'
import Title from '../Utils/Title'


const Courses = ({courses, loadCourses, loading}) => {

    
    useEffect(() => {
        loadCourses();
    }, [])

    return (
        <div className='container main'>
            <Title title='Courses'/>
            <div className="row"> 
                {loading ? <>Loading...</> : (
                    courses.map(course => (
                        <div className='col-md-4 col-lg-3 col-12 my-2'>
                            <Link to={`/detail/${course.title}`}>
                                <CourseCard src={course.img} title={course.title} rating={course.rating}/>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    courses : state.courses.courses,
    loading: state.courses.loading
})

export default connect(mapStateToProps , {loadCourses})(Courses);