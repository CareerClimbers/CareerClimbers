import React from 'react'
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
                    <Button type='primary' href='/courses'>View Courses</Button>
                    <Button type='default' >Browse By Category</Button>
                </Space>
            </div>
        </div>
    )
}
