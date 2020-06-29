import React from 'react'
import { Link } from 'react-router-dom'
import { List, Row, Col, Skeleton,Dropdown, Button, Typography} from 'antd'
import {DownOutlined} from '@ant-design/icons'

import Title from '../Utils/Title'
import HorizontalCard from './HorizontalCard'

const {Text} = Typography

const categories = [
    {category : 'Web development'},
    {category : 'Machine Learning'},
    {category : 'Artifical Intelligence'},
    {category : 'Frontend'},
    {category : 'Backend'},
]

const Menu = ({handleCategory, makeInvisible}) =>(<List
    style={{background:'white'}}
    dataSource={categories}
    bordered
    header={<Text strong>Categories</Text>}
    renderItem={item => <List.Item key={item.category} onClick={handleCategory}>
        <Link onClick={e => e.preventDefault()}>{item.category}</Link>
    </List.Item>
}
/>)


class CategoryCard extends React.Component {

    state = {
        loading: true,
        currentSelected: 'Web Development',
        courses: [],
        visible: false
    }

    fetchCourse = async () => {
        let res = await fetch(`/api/courses?limit=5&category=${this.state.currentSelected}`);
        res = await res.json();
        this.setState({
            loading: false,
            courses: res.courses
        })
    }

    handleCategory  = (e) => {
        if(this.state.currentSelected !== e.target.innerText) {
            this.setState({
                currentSelected : e.target.innerText,
                loading: true,
                visible:false
            }, () => this.fetchCourse());
        }
    }

    handleVisible = (flag) => {
        this.setState({visible:flag})
    }

    componentDidMount() {
        this.fetchCourse();
    }

    render() {
        return (
            <div className='bg-light my-4 py-4'>
                <div className="container">
                    <Title title='Browse by category' />

                    <Row gutter={{xs:8, sm:16, lg:24}}>
                        <Col xs={24} sm={24} md={10}>
                            <div className='md-block'>
                                <Menu handleCategory={this.handleCategory}/>
                            </div>
                            <div className='md-hidden mb-3' style={{textAlign:'right'}}>
                                <Dropdown overlay={<Menu handleCategory={this.handleCategory} />}
                                    onVisibleChange={this.handleVisible}
                                    visible={this.state.visible}
                                    trigger={['click']}
                                >
                                    <Button type='default'>Categories <DownOutlined /></Button>
                                </Dropdown>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={14}>
                            <Row gutter={[0, 12]}>
                                {
                                    this.state.loading ? <Skeleton active/> :
                                    this.state.courses.map(course => (
                                        <Col span={24} key={course.title}>
                                            <Link to={`/detail/${course._id}`}>
                                                <HorizontalCard loading={this.state.loading} src={course.img} title={course.title} rating={course.rating} creator={course.instructor} />
                                            </Link>
                                        </Col>
                                        )   
                                    )
                                }
                            </Row>
                            <div className="text-center mt-4">
                                <Button type='primary'>
                                    <Link to={`/courses?q=${this.state.currentSelected}`}> View All</Link>
                                </Button>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}


export default CategoryCard