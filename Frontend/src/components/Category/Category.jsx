import React from 'react'
import {Link} from 'react-router-dom'
const categories = [
    {category : 'Web development', count : 158, link : '/course/web'},
    {category : 'Web development', count : 158, link : '/course/web'},
    {category : 'Web development', count : 158, link : '/course/web'},
    {category : 'Web development', count : 158, link : '/course/web'},
    {category : 'Web development', count : 158, link : '/course/web'},
]

export default function Category() {
    return (
        <div className="category">
            <div>
                Categories
            </div>
            {
                categories.map(category => (
                    <div >
                        <Link to={category.link}>
                            <div className='d-flex justify-content-between bb'>
                                {category.category}
                                <span className="badge badge-primary">
                                    {category.count}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
