import React from 'react'
import './pro.css'
import img1 from '../Images/001.jpg'
import img2 from '../Images/002.jpg'
import img3 from '../Images/003.jpg'
import img4 from '../Images/004.jpg'
import img5 from '../Images/999.png'
import img6 from '../Images/006.png'
import img7 from '../Images/007.png'
import img8 from '../Images/008.png'


function Projects() {
  return (
    <>
    <center>
    <div style={{color: '#c3073f'}} className='pt-5 h2 fw-bolder w-100' >My Projects </div></center>
      <div  className="cont p-5 w-100  ">
        <div className="boxe p-2">
          <div className="imgBx ">
            <img src={img1}/>
          </div>
          <a target='_blank'  href="https://flipkart-ashwin-j.netlify.app/">
            <div className="content">
            <div>
              <h2  style={{fontFamily:'"Croissant One", serif'}}  >Website Cloning</h2>
              <p  style={{fontFamily:'"Croissant One", serif'}} >This project involves replicating the structure, design, and functionality of an existing website.
              </p>        
            </div>
          </div>
          </a>          
        </div>
        <div className="boxe p-2">
          <div className="imgBx">
            <img src={img2}/>
          </div>
          <a target='_blank'  href="https://ashwin-j-expense-calculator.netlify.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >Expense Calculator</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >An online tool designed to help individuals and businesses estimate the costs associated with developing a webpage.
              </p>             
            </div>
          </div>
          </a>        
        </div>
        <div className="boxe  p-2">
          <div className="imgBx">
          <img src={img3}/>
          </div>
          <a target='_blank'  href="https://ashwin-j-bmi-cal.netlify.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >BMI Calculator</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >My BMI calculator webpage project aims to provide users with a simple yet effective tool for calculating Body Mass Index (BMI).
              </p>
            </div>
          </div>
          </a>          
        </div>
        <div className="boxe p-2">
          <div className="imgBx">           
          <img src={img4}/>
          </div>
          <a  target='_blank' href="https://vagabond-ashwin-j.netlify.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >Travel Website</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >For my latest project, I took on the challenge of cloning a travel blog website using HTML and CSS.
              </p>              
            </div>
          </div>
          </a>         
        </div>
      </div>


      <div  className="cont p-5 w-100  ">
        <div className="boxe p-2">
          <div className="imgBx ">
            <img src={img5}/>
          </div>
          <a  target='_blank' href="https://ashwin-movie-search-app.netlify.app/">
            <div className="content">
            <div>
              <h2  style={{fontFamily:'"Croissant One", serif'}}  >Movie Search App</h2>
              <p  style={{fontFamily:'"Croissant One", serif'}} >My Movie Search App project aims to create a user-friendly website where users can search for information about movies using JavaScript programming language.
              </p>            
            </div>
          </div>
          </a>          
        </div>
        <div className="boxe  p-2">
          <div className="imgBx">
          <img src={img7}/>
          </div>
          <a target='_blank'  href="https://feane-ashwin-j.netlify.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >Restaurant Website</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >This project involves creating a replica of an existing restaurant website using HTML for structure, CSS for styling, and Bootstrap for responsive design components.
              </p>
            </div>
          </div>
          </a>          
        </div>
        <div className="boxe p-2">
          <div className="imgBx">
            <img src={img6}/>
          </div>
          <a target='_blank' href="https://counterapp-myfile.netlify.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >Counter App</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >It is a simple web application whose primary function is to allow users to increment or decrement a counter value with the click of a button. 
              </p>             
            </div>
          </div>
          </a>        
        </div>
        <div className="boxe p-2">
          <div className="imgBx">           
          <img src={img8}/>
          </div>
          <a target='_blank'  href="https://quotes-ashwin-j.netlify.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >Random Quote Website</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >The primary functionality is to display a random quote  when a user clicks a button.
              </p>              
            </div>
          </div>
          </a>         
        </div>
      </div>
    </>
  )
}

export default Projects