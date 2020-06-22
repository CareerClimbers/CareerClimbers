import React from 'react'

export default function Header() {
    return (
        <div className='header d-flex align-items-center justify-content-center flex-column mx-auto container'>
            <div className="content text-center">
                <h1>
                    Boost your profile with amazing projects and technologies !
                </h1>
                <h2>Curated list of courses that can help you to be a better developer.</h2>
                <input className='search-input' type="text" placeholder='Search for courses, certifications, etc...'/>
            </div>
        </div>
    )
}
