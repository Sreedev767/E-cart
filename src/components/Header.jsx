import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {

  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);

  const Cart = useSelector((state)=>state.cartReducer)
  console.log(Cart);

  return (
    <>
      <Navbar expand="lg" className='bg-primary fixed-top' >
        <Container>
          <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:'none', color:'white',fontSize:'35px'}}>E-KART</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0 rounded-3'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
              <Nav.Link href="#home"><Link className='d-flex align-items-center justify-content-left' to={'/wishlist'} style={{textDecoration:'none',color:'white',fontSize:'16px'}}><i class="fa-regular fa-heart me-2"></i> wishlist<Badge bg="secondary" className='rounded-5 border-0 ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
              <Nav.Link href="#link"><Link className='d-flex align-items-center justify-content-left' to={'/cart'} style={{textDecoration:'none',color:'white',fontSize:'16px'}}><i class="fa-solid fa-cart-shopping me-2"></i> cart<Badge bg="secondary" className='rounded-5 border-0 ms-2'>{Cart.length}</Badge></Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header