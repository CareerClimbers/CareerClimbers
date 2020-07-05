import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import {BackTop} from 'antd'
import {ArrowUpOutlined} from '@ant-design/icons'

import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import CourseDetail from './CourseDetail/CourseDetail'
import Footer from './Footer/Footer'
import Courses from './Courses/Courses'
import PageNotFound from './NotFound/PageNotFound'
import ScrollToTop from './Utils/ScrollToTop'


const routes = [
    {path : '/', Component: <Home/>, name : 'home'},
    {path : '/detail/:course_id', Component: <CourseDetail/>, name : 'course_detail'},
    {path : '/courses', Component: <Courses/>, name : 'courses'}
]


const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    border: '1px solid gray',
    color: 'gray',
    textAlign: 'center',
    fontSize: 14,
    borderRadius: '50%'
};


export default () => {
    return (
        <Router>
            <ScrollToTop/>
            <Navbar />
            <Switch>
                {
                    routes.map(route => (
                        <Route path={route.path} exact key={route.name}>
                            {route.Component}
                        </Route>
                    ))
                }
                <Route path="/">
                    <PageNotFound/>
                </Route>
            </Switch>
            <BackTop style={style}><ArrowUpOutlined/></BackTop>
            <Footer/>
                
        </Router>
    )
}
