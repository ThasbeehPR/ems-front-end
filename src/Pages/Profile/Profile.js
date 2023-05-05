import React from 'react'
import './Profile.css'
import { Card, Row } from 'react-bootstrap'

function Profile() {
  return (
    <>
    <div className="container">
      <Card className='shadow col-lg-6 mx-auto mt-5'>
        <Card.Body>
          <Row>
            <div className="col">
              <div className="profile_img d-flex justify-content-center">
              <img className='border p-1 rounded-circle' width={'200px'} height={'200px'} src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="proPic" />
              </div>
            </div>
          </Row>
            <div className="text-center">
              <h3>Max Miller</h3>
              <h4><i class="fa-solid fa-envelope text-primary"></i> :- <span>max@gmail.com</span></h4>
              <h4><i class="fa-solid fa-mobile-button text-dark"></i> :- <span>7034491243</span></h4>
              <h4><i class="fa-solid fa-venus-mars text-info"></i> :- <span>male</span></h4>
              <h4><i class="fa-solid fa-location-dot text-danger"></i> :- <span>London</span></h4>
              <h4><i class="fa-solid fa-chart-column text-success"></i> :- <span>Active</span></h4>

            </div>

        </Card.Body>


      </Card>
    </div>
    </>
  )
}

export default Profile