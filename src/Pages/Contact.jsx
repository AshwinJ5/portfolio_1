import { MDBInput } from 'mdb-react-ui-kit'
import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

function Contact() {
  return (
    <>
        <Row style={{marginBottom:'350px'}} className='my-5 w-100'>
            <Col></Col>
            <Col lg={5} className='m-3 text-center p-5 '>
            <h1 className='mb-4' style={{color:'#b6a19e', fontFamily:' "Croissant One", serif'}}>I love making new connections.</h1>
            <h2 style={{color:'#b6a19e', fontFamily:' "Croissant One", serif'}}>So, if you just want to say hi, collaborate or have a project in mind, I'm happy to hear from you.</h2>
            </Col>
            <Col lg={5} className='m-3'>
            
                <Form className='mx-5'>
                <MDBInput label='Name' className='bg-light my-5' id='form1' type='text' />
                <MDBInput label='Email' className='bg-light my-5' id='form1' type='text' />
                <MDBInput label='Website (if you have one)' className='bg-light my-5' id='form1' type='text' />
                <MDBInput label='Your Message' className='bg-light my-5' id='form1' type='textarea' />        
                <center><Button style={{backgroundColor:'#f1004e',color:'white'}} className='text-center  my-5 rounded-pill'>Submit</Button></center>

                </Form>
            </Col>
            <Col></Col>

        </Row> 
<center >
    <h5 className='my-5'>OR</h5>
</center>

<center>
    <h5 className='my-5'><i class="fa-regular fa-envelope fa-beat"></i> Email me - <a style={{textDecoration:'none',color:'black'}} href="mailto:ashwinjoseph03@gmail.com">ashwinjoseph03@gmail.com</a></h5>
</center>
    </>
  )
}

export default Contact