import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import parse from 'html-react-parser'

import {Rate, Skeleton, Tag, Button, Typography, Row, Col, Space} from 'antd'
import {ArrowRightOutlined, ClockCircleOutlined, UserOutlined, TeamOutlined} from '@ant-design/icons'

import CourseCarousel from '../CourseCarousel/CourseCarousel'


const {Paragraph, Title} = Typography


export default function CourseDetail() {

    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(true)
    let {course_id} = useParams();

    useEffect(()=> {
        let endpoint = `/api/course/${course_id}`
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
        
                <div className='container main'>
                    <Skeleton loading={loading} size='large' active>
                    <Row gutter={[32,32]}>
                        <Col sm={24} md={10} xs={24}>
                            <img 
                            src={course.img} 
                            alt={course.title}
                            className='responsive-image'
                            style={{margin:'0 auto'}}
                            />
                        </Col>
                        <Col sm={24} md={14}>
                            
                            <Title level={3}>
                                {course.title}
                            </Title>

                            <Row gutter={[8, 8]}>
                                <Col md={12} sm={24} xs={24}>
                                    <Rate disabled allowHalf defaultValue={course.rating}/>
                                </Col>
                                <Col md={12} sm={24} xs={24}>
                                    <ClockCircleOutlined /> {course.duration}
                                </Col>
                            </Row>

                            <Row gutter={[8, 8]}>
                                <Col md={12} sm={24} xs={24}>
                                    <TeamOutlined />  {course.students} have Enrolled
                                </Col>
                                <Col md={12} sm={24} xs={24}>
                                    <UserOutlined/> Created by {course.instructor}
                                </Col>
                            </Row>

                            <Space direction='vertical' size={24}>
                                <div >
                                    { !loading && course.tag.map(tag => <Tag color='blue' key={tag} checked='true'>{tag}</Tag>)}
                                </div>
                                <Button href={course.link} type='primary' target='_blank' size='large'>
                                    Enroll Now  <ArrowRightOutlined />
                                </Button>
                            </Space>
                        </Col>
                    </Row>

                    <Title level={4}>Description</Title>
                        
                    <Paragraph ellipsis={{ rows: 10, expandable: true, symbol: 'more' }} 
                    >
                        {parse(`${course.description}`)}
                    </Paragraph>
                    
                    </Skeleton>
                    <CourseCarousel title='Similar Courses' url={`/similar/${course._id}`}/>
                </div>
           
        </>
    )
}
