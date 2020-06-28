import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import {Skeleton, Row, Col} from 'antd'

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
            <Skeleton loading={loading} active>
                <Row gutter={[24, 24]}> 
                    {!loading &&
                        courses.map(course => (
                            <Col key={course._id} xs={24} sm={24} lg={6} md={8}>
                                <Link to={`/detail/${course._id}`}>
                                    <CourseCard src={course.img} title={course.title} rating={course.rating} instructor={course.instructor}/>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Skeleton>
        </div>
    )
}

const mapStateToProps = state => ({
    courses : state.courses.courses,
    loading: state.courses.loading
})

export default connect(mapStateToProps , {loadCourses})(Courses);