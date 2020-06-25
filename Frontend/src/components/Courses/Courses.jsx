import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import {Spin} from 'antd'

import {loadCourses} from '../../redux/actions/courses'

import CourseCard from '../CourseCard/CourseCard'
import Title from '../Utils/Title'


const Courses = ({courses, loadCourses, loading}) => {
    let query = new URLSearchParams(useLocation().search).get('q');
    
    useEffect(() => {
        let g = {
            query: query || ''
        }
        loadCourses(g);
    }, [loadCourses, query])

    return (
        <div className='container main'>
            <Title title='Courses'/>
            <div className="row"> 
                {loading ? <Spin size='large'/> : (
                    courses.map(course => (
                        <div className='col-md-4 col-lg-3 col-12 my-2' key={course._id}>
                            <Link to={`/detail/${course._id}`}>
                                <CourseCard src={course.img} title={course.title} rating={course.rating} instructor={course.instructor}/>
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