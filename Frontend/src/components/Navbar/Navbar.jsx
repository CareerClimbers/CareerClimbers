import React from 'react'
import {Link, withRouter} from 'react-router-dom'

import {Button, Input, Typography, Dropdown, Menu} from 'antd'
import {DownOutlined} from '@ant-design/icons'

const {Search} = Input
const {Text} = Typography

const categories = ['Web Development', 'Frontend', 'Backend', 'Machine Learning']

const menu = (
    <Menu>
        <Menu.ItemGroup title="Categories">
            {
                categories.map(text => (
                    <Menu.Item>
                        <Link to={`/courses?q=${text}`}>{text}</Link>
                    </Menu.Item>
                ))
            }
        </Menu.ItemGroup>
    </Menu>
) 

export default withRouter((props) => {
    
    const handleSearch = (v, e) => {
        props.history.push(`/courses?q=${v}`)
    } 

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img src={require('../../assets/image/logo.png')} alt='Career Climber' className='responsive-image w-18'/>
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">

                        <Search placeholder='Search Courses...' size='large' enterButton className='search mx-auto' onSearch={handleSearch} allowClear/>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Dropdown overlay={menu}>
                                    <span className="nav-link">
                                        Categories <DownOutlined/>
                                    </span>
                                </Dropdown>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/courses"><Text strong>Courses</Text></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/"><Button type='primary' size='large'>Join on Telegram</Button></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
})
