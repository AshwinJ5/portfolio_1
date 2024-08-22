import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <>
         <MDBFooter  className='text-center  pt-5'>
      <div className='text-center p-3 bg-body-tertiary' style={{ backgroundColor: '#c3073f',color:'white',fontFamily:'"Rakkas", serif' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a  style={{fontFamily:' "Croissant One", serif',color:'#003366'}} href='/'>
          Ashwin Joseph 
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer