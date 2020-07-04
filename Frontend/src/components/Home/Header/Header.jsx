import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Space} from 'antd'

export default function Header() {
    return (
        <div className='header d-flex align-items-center justify-content-center flex-column mx-auto container'>
            <div className="content text-center">
                <h1>
                    Boost your profile with amazing projects and technologies !
                </h1>
                <h2>Curated list of courses that can help you to be a better developer.</h2>
                <Space>
                    <Link to='/courses'>
                        <Button type='primary' href='/courses'>View Courses</Button>
                    </Link>
                    <Button type='default' href='#category'>Join Us on Telegram</Button>
                </Space>
            </div>
        </div>
    )
}
