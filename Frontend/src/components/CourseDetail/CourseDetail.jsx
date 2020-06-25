import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {Rate, Spin} from 'antd'

import CourseCarousel from '../CourseCarousel/CourseCarousel'



export default function CourseDetail() {

    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(true)
    let {course_id} = useParams()

    useEffect(()=> {
        let endpoint = `http://localhost:5000/api/course/${course_id}`
        console.log(endpoint)
        fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            setCourse(res)
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [course_id])

    return (
        <>
        {
            loading ? <Spin size='large'/> : (
                <div className='container main'>
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <img 
                            src={course.img} 
                            alt={course.title}
                            className='responsive-image'
                            />
                        </div>
                        <div className="col-md-7">
                            <h2>
                                {course.title}
                            </h2>
                            <div className='row my-2'>
                                <div className="col-6 d-flex align-center">
                                    <Rate disabled allowHalf defaultValue={course.rating}/>
                                </div>
                                <div className="col-6">
                                    <i className="fa fa-clock-o"></i> {course.duration}
                                </div>
                            </div>

                            <div className='row my-2'>
                                <div className="col-6 d-flex align-items-center">
                                    <i className="fa fa-users"></i> ( {course.students} ) have Enrolled
                                </div>
                                <div className="col-6">
                                    Created by {course.instructor}
                                </div>
                            </div>

                            <div className='my-2'>
                                {course.tag.map(tag => <span className="badge badge-pill badge-secondary" key={tag}>{tag}</span>)}
                            </div>

                            <div className='mt-4'>
                                <a href={course.link} className='btn btn-primary' target='_blank' rel="noreferrer noopener">
                                    Enroll Now  <i className="fa fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="description mt-4">
                        <h4>Description</h4>
                        <div className='description text-gray' dangerouslySetInnerHTML={{ __html: course.description }}></div>
                    </div>

                    <CourseCarousel title='Similar Courses'/>
                </div>
            )
        }
        </>
    )
}
