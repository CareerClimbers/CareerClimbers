import React from 'react'

export default ({open}) => {
    return (
        <div id='sidebar' className={`sidebar ${open ? '' : 'active'}`}>
            Sidebar
        </div>
    )
}
