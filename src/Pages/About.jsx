import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './about.css'
import resume from '../Images/Resume.pdf'


function About() {
  return (
    <>
    <Row className='w-100 '>
        <Col style={{fontFamily:'"Croissant One", serif', fontSize:'20px'}} className='p-5 text-light fw-bold w-100' >
          <p style={{color:'#b6a19e'}} >Hello there! I'm Ashwin Joseph, a passionate front-end developer eager to embark on a journey of crafting exceptional digital experiences. As a recent graduate in B-tech in Mechanical engineering, I've dived headfirst into the world of web development, honing my skills in HTML, CSS, and JavaScript.</p>

          <p style={{color:'#b6a19e'}} >My fascination with technology began when I first tinkered with building simple web pages during my college days. Since then, I've been captivated by the ever-evolving landscape of web development, constantly seeking to expand my knowledge and expertise.</p>

          <p style={{color:'#b6a19e'}} >During my academic journey, I've had the opportunity to work on several exciting projects, each providing valuable insights and refining my problem-solving skills. From responsive layouts to interactive web applications, I've embraced every challenge as an opportunity to grow and learn.</p>

          <p style={{color:'#b6a19e'}} >Beyond coding, I'm deeply passionate about staying updated with the latest industry trends and best practices. I thrive in collaborative environments where ideas flow freely, and innovation is encouraged.</p>




        </Col>
        

    </Row>

<Row style={{ fontFamily:'"Croissant One", serif', fontSize:'20px'}} className='w-100'>
<Col lg={1}></Col>
  <Col lg={5}  className='m-3'>
    <p style={{color:'#9a1750'}} className='fw-bold'>Birthday:<span className='fw-normal text-dark'> 05/09/1998</span></p> 
    <hr  className='w-75 text-light'/>
    <p style={{color:'#9a1750'}}  className='fw-bold'>Degree:<span className='fw-normal text-dark'> B-Tech in Mechanical Engineering</span></p> 
    <hr  className='w-75 text-light'/> 
    <p style={{color:'#9a1750'}}  className='fw-bold'>Town:<span className='fw-normal text-dark'> Kottayam</span></p> 
    <hr  className='w-75 text-light'/>
  </Col>
  <Col lg={5} className='m-3' >
    <p style={{color:'#9a1750'}}  className='fw-bold'>Age:<span className='fw-normal text-dark'> 25</span></p> 
    <hr  className='w-75 text-light'/>

    <p style={{color:'#9a1750'}}  className='fw-bold'>Mobile:<span className='fw-normal text-dark'> +91-8606089808</span></p> 
    <hr  className='w-75 text-light'/>

    <p style={{color:'#9a1750'}}  className='fw-bold'>Freelance:<span className='fw-normal text-dark'> Available!</span></p> 
    <hr  className='w-75 text-light'/>

</Col>
  <Col lg={4}></Col>
</Row>



    <Row className='my-5 w-100'>
      <center>
      <div style={{fontFamily:'"Croissant One", serif',color:'#9a1750'}} className='h6 fw-bolder p-3'>CONNECT ME WITH :</div>
      <div className='w-100'>
      <MDBBtn
            floating
            className=' mx-3'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/profile.php?id=100005228958736'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className=' mx-3'
            style={{ backgroundColor: 'black' }}
            href='https://twitter.com/AshwinJ49426441'
            role='button'
          >
            <MDBIcon fab icon='x-twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className=' mx-3'
            style={{ backgroundColor: '#dd4b39' }}
            href='mailto:ashwinjoseph03@gmail.com'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='mx-3'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/mr_a_j_5/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-3'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/ashwin-joseph-737602298/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-3'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/AshwinJ5'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
          </div>
          </center>
          <center>
            <a href={resume} download='Ashwin Joseph CV'>
            <Button className='btn text-light my-5 me-2 rounded-pill' style={{backgroundColor:'#c3073f'}}> DOWNLOAD CV</Button></a>
            <Link to={'/contact-me'}><Button className='btn text-light my-5 ms-2 rounded-pill' style={{backgroundColor:'#c3073f'}}> HIRE ME</Button></Link>
          </center>
    </Row>
    
    </>
  )
}

export default About