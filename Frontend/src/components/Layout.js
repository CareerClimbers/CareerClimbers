import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import CourseDetail from './CourseDetail/CourseDetail'
import Footer from './Footer/Footer'
import Courses from './Courses/Courses'
import ScrollToTop from './Utils/ScrollToTop'

const routes = [
    {path : '/', Component: <Home/>, name : 'home'},
    {path : '/detail/:course_id', Component: <CourseDetail/>, name : 'course_detail'},
    {path : '/courses', Component: <Courses/>, name : 'courses'}
]


export default () => {
    return (
        <>
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
                </Switch>
                <Footer/>
                   
            </Router>
        </>
    )
}
