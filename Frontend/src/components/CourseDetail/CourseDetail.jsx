import React from 'react'

import CourseCarousel from '../CourseCarousel/CourseCarousel'

const course = {
    src: 'https://img-a.udemycdn.com/course/240x135/2417990_830d_13.jpg',
    title: 'SSL Complete Guide 2020: HTTP to HTTPS',
    rating: 4.5,
    students: '21,709',
    duration: '10:54:45',
    creator: 'Bogdun stashchuk',
    tags: ['web development', 'full stack', 'frontend', 'backend'],
    description: `This course is all about securing websites with SSL/TLS certificates.
Become a master of HTTPS, Let's Encrypt, Cloudflare, NGINX and SSL/TLS Certificates.
This is the most complete practical SSL guide here on Udemy that includes tons of practical activities. All practice exercises are performed on a real domain and real hosting and finally you will get production ready solution with HTTPS setup and redirection of HTTP to HTTPS. You can have zero knowledge about computer networks, encryption, configuration of web servers. All will be taught from scratch, from simple setup to complex solution. If you want to get deep knowledge of SSL and HTTPS this course is for you!

We will start by exploring basics of symmetric encryption algorithms like AES,  asymmetric encryption RSA, hashing protocols MD5 and SHA.  Also I will explain you fundamentals of computer networks, TCP/IP stack and for that we will use Wireshark traffic analyzer.
You will learn what is the structure of the SSL/TLS certificate. Also you will understand why CAs (Certificate Authorities) are needed and how chain of trust is built.
In practice sections we will perform multiple practice activities:
Buy a domain and configure DNS settings
Use Certbot ACME client to automatically obtain free SSL certificate from Let's Encrypt
With help of OpenSSL generate RSA keys, self-signed certificates
Secure Wordpress with Apache using SSL/TLS certificates
Create CSR (Certificate Signing Request) by OpenSSL and submit CSR to CA server
Configure Cloudflare for your domain and setup different SSL modes of operations
Install and configure NGINX web server for SSL/TLS certificates
Migrate from HTTP to HTTPS
Redirect all traffic using HTTP 301 redirect from HTTP to HTTPS

With this course you will get lifetime-long access to 100 lectures and tens of practical exercises. After the course you will become a guru of SSL and TLS encryption and will be able easily obtain and install SSL certificates on your web servers.
You will also get 30-days money-back guarantee. No questions asked!
Don't wait and join the course now!

Who this course is for:
Owners of any websites
DevOps Engineers
Web developers
Network Engineers
JavaScript developers
`
}

export default function CourseDetail() {
    return (
        <div className='container main'>
            <div className="row mt-5">
                <div className="col-md-5">
                    <img 
                    src={course.src} 
                    alt={course.title}
                    className='responsive-image'
                    />
                </div>
                <div className="col-md-7">
                    <h2>
                        {course.title}
                    </h2>
                    <div className='row my-2'>
                        <div className="col-6 d-flex align-center">
                            <div className="rating" style={{"--rating":course.rating, '--star-size':'25px'}}></div>({course.rating})
                        </div>
                        <div className="col-6">
                            <i className="fa fa-clock-o"></i> {course.duration}
                        </div>
                    </div>

                    <div className='row my-2'>
                        <div className="col-6 d-flex align-items-center">
                            <i className="fa fa-users"></i> ( {course.students} ) have Enrolled
                        </div>
                        <div className="col-6">
                            Created by {course.creator}
                        </div>
                    </div>

                    <div className='my-2'>
                        {course.tags.map(tag => <span class="badge badge-pill badge-secondary">{tag}</span>)}
                    </div>

                    <div className='mt-4'>
                        <a href='/' className='btn btn-primary'>
                            Enroll Now  <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="description mt-4">
                <h4>Description</h4>
                <pre className='description text-gray'>
                    {course.description}
                </pre>
            </div>

            <CourseCarousel title='Similar Courses'/>
        </div>
    )
}
