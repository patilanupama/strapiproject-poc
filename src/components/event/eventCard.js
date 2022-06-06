import * as React from "react"
import { navigate } from "@reach/router"
import { Button, Card } from "react-bootstrap"
import "./event.css"

const EventCard = ({ details, index }) => {
  const handleClick = item => {
    navigate(`/app/event-details/${item.id}`)
  }
  return (
    <>
        <Card key={index} className="card-wrapper my-2 p-0">
          <div className="card-img card-image">
            <img
              className="image"
              alt="Card"
              src={`${process.env.SERVICE_URL}${details?.Name?.url}`}
            />
          </div>
          <Card.Body>
            <p className="card-description">{details.description}</p>
            <span>${details.price}</span>
            <br />
            <Button
              onClick={() => handleClick(details)}
              className="btn btn-info btn-sm card-btn mx-4 mt-3"
            >
              {details.view}
            </Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default EventCard
