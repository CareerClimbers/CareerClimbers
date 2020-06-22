import React from 'react'

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
                        <div className="rating small" style={{"--rating":rating, "--star-size":15}}></div>({rating})
                        <div className='small'>By {creator}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
