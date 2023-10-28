import React from 'react'
import Card from 'react-bootstrap/Card';

function RestCard({restaurant}) {
  return (
    <>

<Card >
      <Card.Img style={{height:'250px' }} variant="top" src={restaurant?.photograph} className='rounded p-2 shadow' />
      <Card.Body>
        <Card.Title>{restaurant?.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default RestCard