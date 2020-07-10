import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import {Skeleton, Row, Col, Pagination, Empty} from 'antd'

import {loadCourses} from '../../redux/actions/courses'

import CourseCard from '../CourseCard/CourseCard'
import MobileCourseCard from '../Category/HorizontalCard'
import Title from '../Utils/Title'


const Courses = ({courses, loadCourses, loading, len}) => {
    const [isMobile, setisMobile] = useState(null);

    const trackMobile = () => {
        window.matchMedia("(max-width:768px)").matches
        ? setisMobile(true)
        : setisMobile(false);
    };

    let query = new URLSearchParams(useLocation().search).get('q');
    
    useEffect(() => {
        let g = {
            query: query || ''
        }
        loadCourses(g);
        window.scrollTo(0, 0);
        trackMobile();
        window.addEventListener("resize", trackMobile);
        return () => window.removeEventListener("resize", trackMobile);
    }, [loadCourses, query])

    const handlePage = (page) => {
        page -= 1;
        window.scrollTo(0, 0);
        let g = {
            query: query || '',
            page
        }
        loadCourses(g);
    }

    return (
        <div className='container main'>
            <Title title='Courses'/>
            <Skeleton loading={loading} active>
                {
                    !loading && courses.length === 0 ?
                    <Empty
                        description='Sorry no such course found !'
                        className='h-100'
                    />
                    :
                    <Row gutter={[24, 24]}> 
                        {!loading &&
                            courses.map(course => (
                                <Col key={course._id} xs={24} sm={24} lg={6} md={8}>
                                    <Link to={`/detail/${course._id}`}>
                                        {
                                            isMobile ?
                                            <MobileCourseCard src={course.img} title={course.title} rating={course.rating} creator={course.instructor}/>
                                            : 
                                            <CourseCard src={course.img} title={course.title} rating={course.rating} instructor={course.instructor}></CourseCard>
                                        }
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                }
            </Skeleton>
            
            <Pagination total={len} pageSize={12} defaultCurrent={1}  onChange = {handlePage}/>
        </div>
    )
}

const mapStateToProps = state => ({
    courses : state.courses.courses,
    currentPage: state.courses.currentPage,
    loading: state.courses.loading,
    len: state.courses.len
})

export default connect(mapStateToProps , {loadCourses})(Courses);