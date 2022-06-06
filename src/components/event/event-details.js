import * as React from "react"
import { Card } from "react-bootstrap"
import "./event.css"
import { DashboardServices } from "../../services/dashboard.services"

const EventCardDetails=(props)=>{
    const [eventDetail, setEventDetail] = React.useState({})
    let response
    const getEventData = async id => {
      response = await DashboardServices.getEventDetails(id)
      if (response.status === 200) {
        setEventDetail(response.body)
      }

    }
    React.useEffect( () => {
       getEventData(props.id)
      return () => {}
    }, [])
    return(<>
        <div className="event-details-container">
          <div className="container-fluid py-5">
            <Card className="card-container">
              <div className="card-img">
                <img
                  className="image"
                  src={`${process.env.SERVICE_URL}${eventDetail?.Name?.url}`}
                  alt="Event"
                />
              </div>
              <Card.Body className="my-3">
                <p>{eventDetail?.details}</p>
              </Card.Body>
            </Card>
          </div>
        </div>
         </>)
}

export default EventCardDetails