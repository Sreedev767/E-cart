import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 bg-primary flex-column' style={{color:'white'}}>
      <div className='row d-flex align-items-top justify-content-evenly ms-4 me-4 mt-4 mb-5'>
        
        <div className="col-md-3">
          <h4 className='mb-3 mt-4' style={{overflow:'hidden',fontSize:'30px'}}>
            <i class="fa-solid fa-cart-shopping me-4"></i> 
            E-Cart
          </h4>
          <h6 style={{textAlign:'left', overflow:'hidden'}}>Vero voluptas ullam consequatur labore molestiae aliquid, quisquam rem temporibus molestias voluptatibus esse iste. Perspiciatis, ea quas! Aliquam error optio perspiciatis recusandae?</h6>
        </div>

        <div className="col-md-2 d-flex flex-column ">
          <h4 className='mb-3 mt-4' style={{overflow:'hidden'}}>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'16px'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white',fontSize:'16px'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white',fontSize:'16px'}}>Wishlist</Link>
        </div>

        <div className="col-md-2 d-flex flex-column ">
        <h4 className='mb-3 mt-4' style={{overflow:'hidden'}}>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white',fontSize:'16px'}}>React</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white',fontSize:'16px'}}>Bootswatch</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white',fontSize:'16px'}}>React Bootstrap</Link>
        </div>

        <div className="col-md-4">
          <h4 className='mb-3 mt-4' style={{overflow:'hidden'}}>Contact Us</h4>
          <div className='d-flex align-items-center justify-content-center'>
            <input type="text" placeholder='Enter your Email id' className='form-control rounded-5 border-0 p-2 ps-2'/>
            <button className='btn btn-success ms-2 rounded-5 border-0 d-flex align-items-center justify-content-center'>Subscribe</button>
          </div>
          <div className='d-flex align-items-center justify-content-evenly mt-5'>
            <Link to={''}><i class="fa-brands fa-instagram "style={{textDecoration:'none',color:'white',fontSize:'35px'}}></i></Link>
            <Link to={''}><i class="fa-brands fa-twitter " style={{textDecoration:'none',color:'white',fontSize:'35px'}}></i></Link>
            <Link to={''}><i class="fa-brands fa-linkedin " style={{textDecoration:'none',color:'white',fontSize:'35px'}}></i></Link>
            <Link to={''}><i class="fa-brands fa-facebook " style={{textDecoration:'none',color:'white',fontSize:'35px'}}></i></Link>
          </div>
        </div>
      </div>
      <p className='text-center'>Copyright © 2023 E-Cart. Build with React.</p>
    </div>
  )
}

export default Footer