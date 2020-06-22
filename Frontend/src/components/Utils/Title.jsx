import React from 'react'

export default ({title, subtitle}) => {
    return (
        <div className='title'>
         <h4>{subtitle}</h4>
         <h3>{title}</h3>   
        </div>
    )
}
