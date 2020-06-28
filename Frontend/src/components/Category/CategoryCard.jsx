import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Row, Col, Skeleton, Button} from 'antd'

import HorizontalCard from './HorizontalCard'
import Title from '../Utils/Title'


const categories = [
    {category : 'Web development'},
    {category : 'Machine Learning'},
    {category : 'Artifical Intelligence'},
    {category : 'Frontend'},
    {category : 'Backend'},
]

const columns = [
    {
        dataIndex: 'category',
        render: text => <Link href="/">{text}</Link>
    },
]

class CategoryCard extends React.Component {

    state = {
        loading: true,
        currentSelected: 'Web Development',
        courses: []
    }

    fetchCourse = async () => {
        let res = await fetch(`http://localhost:5000/api/courses?limit=5&category=${this.state.currentSelected}`);
        res = await res.json();
        this.setState({
            loading: false,
            courses: res.courses
        })
    }

    componentDidMount() {
        this.fetchCourse();
    }

    render() {
        return (
            <div className='bg-light my-4 py-4'>
                <div className="container">
                    <Title title='Browse by Category' />

                    <Row gutter={{xs:8, sm:16, lg:24}}>
                        <Col xs={24} sm={24} md={10}>
                            <div className='md-block'>
                                <Table
                                    dataSource={categories}
                                    columns={columns}
                                    bordered
                                    pagination={false}
                                    showHeader={false}
                                    title={() => 'Categories'}
                                />
                            </div>
                            <div className='md-hidden mb-3'>
                                <Button>Web Development</Button>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={14}>
                            <Row gutter={[0, 12]}>
                                {
                                    this.state.loading ? <Skeleton active/> :
                                    this.state.courses.map(course => (
                                        <Col span={24}>
                                            <Link key={course.title} to={`/detail/${course._id}`}>
                                                <HorizontalCard loading={this.state.loading} src={course.img} title={course.title} rating={course.rating} creator={course.instructor} />
                                            </Link>
                                        </Col>
                                        )   
                                    )
                                }
                            </Row>
                            <div className="text-center mt-4">
                                <Link className='text-uppercase btn-sm btn btn-primary' to={`/courses?q=${this.state.currentSelected}`}> View All</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default CategoryCard