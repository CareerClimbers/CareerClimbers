import React from 'react'
import {Rate, Card, Typography} from 'antd'

const {Meta} = Card;
const {Text} = Typography

export default ({src, title, rating, instructor}) => {
    return (
        <Card
            cover={
                <img src={src} alt={title}></img>
            }
        >
            <Meta
                title={title}
                description={
                <>
                    <Rate disabled allowHalf defaultValue={rating}/><br/>
                    <Text strong>By {instructor}</Text>
                </>
                }
            />
        </Card>
    )
}
