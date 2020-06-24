import React from 'react'
import {Rate} from 'antd'

export default ({src, title, rating}) => {
    return (
        <div className='card'>
            <img src={src} alt={title}/>
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>
                <Rate disabled allowHalf defaultValue={rating}/>
            </div>
        </div>
    )
}
