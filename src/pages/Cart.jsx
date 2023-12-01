import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { emptyCary, removeFromCart } from '../redux/slices/cartSlice';



function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [total,setTotal] = useState(0)

  const getTotal = ()=>{
    if (cartArray.length>0) {
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])


  const handleCart = ()=>{
    alert('Thank you .... Your order placed successfully')
    dispatch(emptyCary())
    navigate('/')
  }


  return (
      <div style={{marginTop:'150px'}}>
      { cartArray?.length>0?
        <div className='row w-100'>
          <div className='col-lg-6 m-5'>
            <table className='table border shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                cartArray?.map((item,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{item.title.slice(0,20)}...</td>
                  <td><img src={item.thumbnail} height={'100px'}  alt="" /></td>
                  <td>₹ {item.price}</td>
                  <td><Button onClick={()=>dispatch(removeFromCart(item.id))} variant="danger rounded-2 border-0"><i class="fa-solid fa-trash"></i></Button></td>
                </tr>
                ))
                }
              </tbody>  
            </table>
          </div>
          
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <div className='border shadow p-5 m-3'>
              <h2 className='text-primary'>Cart Summary</h2>
                <h4>Total number of products : <span className='fw-bolder fs-3 text-primary'>{cartArray.length}</span> </h4>
                <h4>Total Price : ₹ <span className='fw-bolder fs-3 text-primary'>{total}</span></h4>
                <button onClick={handleCart} className='btn btn-success rounded-2 mt-3 w-100'>Checkout</button>
            </div>
          </div>

        </div>
        :
        <div className='d-flex flex-column align-items-center justify-content-center' style={{height:'100vh'}}>
          <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" height={'300px'} />
          <p className='text-danger mt-3'>Your cart is empty</p>
          <Button className='btn btn-success rounded-2 mt-3'><Link to={'/'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-arrow-left me-3'></i>Back to home</Link></Button>
        </div>
        }
      </div>
  )
}

export default Cart