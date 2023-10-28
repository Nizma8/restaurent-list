import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../Componets/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from '../redux/restaurantslice'

function Home() {
  const restaurant = useSelector((state)=>state.restaurantSlice.allRestaurants)
 const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(fetchRestaurants())
 },[])
  return (

    <>
        <>
      <Row className='mt-5 justify-content-center'>
        {restaurant.length > 0 ? (
          restaurant.map((restaurant) => (
            <Col className='me-3 mb-3' sm={12} md={6} lg={4} xl={3} key={restaurant.id}>
              <RestCard restaurant={restaurant} />
            </Col>
          ))
        ) : (
          'null'
        )}
      </Row>
    </>
    </>
  )
}

export default Home