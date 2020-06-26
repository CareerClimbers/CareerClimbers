import React from 'react'
import { Link } from 'react-router-dom'
import { Spin, Table} from 'antd'

import HorizontalCard from './HorizontalCard'
import Title from '../Utils/Title'


const categories = [
    {category : 'Web development', link : '/course/web'},
    {category : 'Machine Learning', link : '/course/web'},
    {category : 'Artifical Intelligence', link : '/course/web'},
    {category : 'Frontend', link : '/course/web'},
    {category : 'Backend', link : '/course/web'},
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

                    <div className="row mt-4">
                        <div className="col-md-4 ">
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
                            <div className='md-hidden mb-3 d-flex justify-content-between mobile-category'>
                                <h4>Categories</h4>
                                <div className="dropdown">

                                    <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select Category
                                    </a>

                                    <div className="dropdown-menu small" aria-labelledby="dropdownMenuLink">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            {this.state.loading ? <Spin /> :
                                this.state.courses.map(course => <Link key={course.title} to={`/detail/${course._id}`}><HorizontalCard src={course.img} title={course.title} rating={course.rating} creator={course.instructor} /></Link>)}
                            <div className="text-center mt-4">
                                <Link className='text-uppercase btn-sm btn btn-primary' to={`/courses?q=${this.state.currentSelected}`}> View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CategoryCard