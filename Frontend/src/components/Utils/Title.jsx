import React from 'react'
import {Typography} from 'antd'

const {Title, Text} = Typography

export default ({title, subtitle}) => {
    return (
        <>
            <Title level={4}>
                <Text style={{textTransform:"uppercase"}}>{subtitle}</Text>
            </Title>
            <Title level={3} style={{marginTop:0}}>{title}</Title>   
        </>
    )
}
