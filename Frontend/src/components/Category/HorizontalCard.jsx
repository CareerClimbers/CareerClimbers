import React from 'react'

import {Rate} from 'antd'

export default function HorizontalCard({src, title, rating, creator}) {
    return (
        <div className='card mb-2'>
            <div className="card-body">
                <div className="row">
                    <div className="col-3">
                        <img src={src} alt={title} className='responsive-image'/>
                    </div>
                    <div className="col-8">
                        <div className="card-title">
                            {title}
                        </div>
                        <Rate value={rating} disabled allowHalf/>
                        <div className='small'>By {creator}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
