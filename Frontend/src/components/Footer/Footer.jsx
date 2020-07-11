import React from 'react'
import {Button, Row, Col} from 'antd'

const social_links = [
    {name : 'instagram', className : 'fa fa-instagram', link: '/', color: '#667EEA'},
    {name : 'facebook', className : 'fa fa-facebook', link: '/', color: '#4299E1'},
    {name : 'telegram', className : 'fa fa-paper-plane-o', link: '/', color: '#63B3ED'},
    {name : 'twitter', className : 'fa fa-twitter', link: '/', color: '#90CDF4'},
]

export default function Footer() {
    return (
        <>
            <Row className="py-5 join-telegram mt-4" justify='center' align='center'>
                <Col className='text-center mw-64'>
                    <p>
                        We have a great community on Telegram where we have bunch of free courses, certifications and other resources uploaded daily ! 
                    </p>
                    <Button type='primary' size='large' href='https://t.me/CareerClimbers' target='_blank'>
                        Join us on Telegram
                    </Button>
                </Col>
            </Row>
            
            <div className="bg-light footer">
                <Row className='row container mx-auto'>
                    <Col md={8} sm={24}>
                        <h4>About Us</h4>
                        <p className='mb-4'>
                            We are trying to help students to excel in their career by providing useful resources.
                        </p>
                        <h4>Contact Us</h4>
                        <p>
                            <i className="fa fa-envelope-o"></i> contactus@gmail.com<br/>
                            <i className="fa fa-phone"></i> +91 810-4451-553
                        </p>
                    </Col>
                    <Col className='copywright' md={8} sm={24}>
                        <img src={require('../../assets/image/logo.png')} alt='Career Climber' className='responsive-image w-128'/>
                        <p>
                            Copywright 2020, Career Climber
                        </p>
                    </Col>

                    <Col md={8} sm={24}>
                        <h4>Social Links</h4>
                        {social_links.map(el => (
                            <a href={el.link} key={el.name} className='social-icon' style={{'--background': el.color }}>
                                <i className={el.className}></i>
                            </a>
                        ))}
                    </Col>
                    
                </Row>
            </div>
        </>
    )
}
