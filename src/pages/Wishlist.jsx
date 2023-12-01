import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {

  const WishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(WishlistArray);

  const dispatch = useDispatch()

  const handleWishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <>
      <Row className='m-5 pt-5 d-flex align-items-center justify-content-center'>
        {
          WishlistArray?.length>0?
          WishlistArray?.map((item)=>(
            <Col className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}}/>
                <Card.Body>
                  <Card.Title className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
                  <Card.Text><p>{item.description.slice(0,50)}...</p></Card.Text>
                  <p className='fw-bolder'>₹ {item.price}</p>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="danger rounded-2 border-0"><i class="fa-solid fa-trash"></i></Button>
                    <Button onClick={()=>handleWishlist(item)} variant="success rounded-2 border-0"><i class="fa-solid fa-cart-plus"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) 
          :
        <div className='d-flex flex-column align-items-center justify-content-center' style={{height:'100vh'}}>
          <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" height={'300px'} />
          <p className='text-danger mt-3'>Your Wishlist is empty</p>
          <Button className='btn btn-success rounded-2 mt-3'><Link to={'/'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-arrow-left me-3'></i>Back to home</Link></Button>
        </div>
        }
      </Row>
    </>
  )
}

export default Wishlist