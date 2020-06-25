import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Spin} from 'antd'

import {loadCourses} from '../../redux/actions/courses'

import Category from './Category'
import HorizontalCard from './HorizontalCard'
import Title from '../Utils/Title'

const CategoryCard = ({courses, loading, loadCourses}) => {

    useEffect(() => {
        loadCourses();
    }, [])

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
                        { loading ? <Spin/> :
                        courses.map(course => <Link key={course.title} to={`/detail/${course._id}`}><HorizontalCard src={course.img} title={course.title} rating={course.rating} creator={course.instructor} /></Link>)}
                        <div className="text-center mt-4">
                            <Link className='text-uppercase btn-sm btn btn-primary' to='/courses'> View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    loading: state.courses.loading,
    courses: state.courses.courses
})

export default connect(mapStateToProps, {loadCourses})(CategoryCard)