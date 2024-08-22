import React from 'react'
import './land.css'
import propic from '../Images/dp.jpg'
import { Col, Row } from 'react-bootstrap'


function Landing() {
  return (
    <><div class="typewriter w-100">    
    <h5 style={{fontWeight:'900',fontSize:'20px'}} className=' mx-2 my-5'>Hello, I'm <span style={{fontSize:'25px'}}> A</span>shwin  <span style={{fontSize:'25px'}}> J</span>oseph, 
    a Front-end Developer</h5></div>
       
<Row style={{marginBottom:'250px'} }className='w-100 ' >
  <Col className="p-4  text-center d-flex justify-content-between  w-100 ">

    {/* <div > */}

          {/* <div className="col-lg-5"> */}
          <p style={{color:'#b6a19e',fontFamily:'"Croissant One", serif',fontSize:'25px'}} className='w-100'> A passionate front-end developer, specializing in React. As a recent graduate eager to embark on my journey in the tech industry, I bring a fresh perspective and a hunger for learning to every project I undertake. I'm fond of creating applications designs and bring them to life using codes.<p style={{color:'#9a1750'}} className='text-center my-5'>
                    TECH STACK: <div>
                    <marquee scrollamount="15" width="75%">
                        <img className='mx-5' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="" width={30} />
                        <img className='mx-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" width={30} />
                        <img  className='mx-5' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" width={30} />
                        <a href="https://react.dev/"><img className='mx-5'  src="https://i.postimg.cc/L8fD8S7f/png-clipart-react-javascript-library-github-github-symmetry-web-application-thumbnail-removebg-previ.png" alt="" width={40} /></a>
                        <a href="https://getbootstrap.com/"><img className='mx-5'  src="https://i.postimg.cc/PJDJwdDs/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail-removebg-preview.png" alt="" width={40} /></a>
                        <img className='mx-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png" alt="" width={30} />
                        <img className='mx-5' src="https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png" alt="" width={30} />

                    </marquee>
                    </div>

                </p></p>
                
                </Col>
            {/* </div> */}
<Col lg={5} className="image-wrapper d-flex justify-content-between p-5  "> 
            
            {/* <div > */}

<a href="#" className="photos ">
    <img className='w-75 h-75' src={propic} />
  <div className="glow-wrap">
    <i className="glow"></i>
  </div>
</a>


          {/* </div> */}
          </Col>
          {/* </div> */}
          
  </Row>




    </>
  )
}

export default Landing