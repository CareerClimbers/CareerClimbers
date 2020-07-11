import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {Button, Input, Typography, Dropdown, Menu} from 'antd'
import {DownOutlined} from '@ant-design/icons'

const {Search} = Input
const {Text} = Typography

const categories = ['Web Development', 'Frontend', 'Backend', 'Machine Learning']


export default withRouter((props) => {

    const [collapsed, handleCollapse] = useState(true)

    const handleSearch = (v, e) => {
        props.history.push(`/courses?q=${v}`)
    } 

    const handleCollapsed = () => {
        console.log('collapse tooglel')
        handleCollapse(!collapsed)
    }


    const menu = (props) => (
        <Menu>
            <Menu.ItemGroup title="Categories">
                {
                    categories.map(text => (
                        <Menu.Item key={text} onClick={handleCollapsed}>
                            <Link to={`/courses?q=${text}`}>{text}</Link>
                        </Menu.Item>
                    ))
                }
            </Menu.ItemGroup>
        </Menu>
    ) 

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img src={require('../../assets/image/logo.png')} alt='Career Climber' className='responsive-image w-18'/>
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" onClick={handleCollapsed} data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`navbar-collapse ${collapsed ? 'collapse' : 'collapse show'}`} id="navbarText">

                        <Search placeholder='Search Courses...' size='large' enterButton className='search mx-auto' 
                        onSearch={(v,e) => {handleSearch(v,e); handleCollapsed()}} allowClear/>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Dropdown overlay={menu}>
                                    <span className="nav-link">
                                        Categories <DownOutlined/>
                                    </span>
                                </Dropdown>
                            </li>
                            <li className="nav-item" onClick={handleCollapsed}>
                                <Link className="nav-link" ><Text strong>Courses</Text></Link>
                            </li>
                            <li className="nav-item" onClick={handleCollapsed}>
                                <Button type='primary' size='large' href='https://t.me/CareerClimbers' target='_blank'>Join on Telegram</Button>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
})
