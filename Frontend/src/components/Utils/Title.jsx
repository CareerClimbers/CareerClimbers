import React from 'react'
import {Typography} from 'antd'

const {Title, Text} = Typography

export default ({title, subtitle}) => {
    return (
        <>
            <Text style={{textTransform:"uppercase"}} strong>{subtitle}</Text>
            <Title level={3} style={{marginTop:0}}>{title}</Title>   
        </>
    )
}
