import React from 'react'

import {Rate, Card, Typography, Avatar} from 'antd'
import Meta from 'antd/lib/card/Meta'

const {Text} = Typography

export default function HorizontalCard({src, title, rating, creator, loading}) {
    return (
        <Card loading={loading}>
            <Meta
                avatar={<Avatar src={src} alt={title} shape='square' size={64}></Avatar>}
                title={title}
                description={
                    <small>
                        <Rate defaultValue={rating} disabled allowHalf/><br/>
                        <Text>By {creator}</Text>
                    </small>
                }
            />
        </Card>
    )
}
