import React from 'react'
import {Link} from 'react-router-dom'

import {Table} from 'antd'

const categories = [
    {category : 'Web development', link : '/course/web'},
    {category : 'Machine Learning', link : '/course/web'},
    {category : 'Artifical Intelligence', link : '/course/web'},
    {category : 'Frontend', link : '/course/web'},
    {category : 'Backend', link : '/course/web'},
]

const columns = [
    {
        title: 'Category',
        dataIndex: 'category',
        render: text => <a href="/">{text}</a>
    },
]

export default function Category() {
    return (
        <Table
            dataSource={categories}
            columns={columns}
            bordered
            pagination={false}
            showHeader={false}
            title={() => 'Categories'}
        />
    )
}
