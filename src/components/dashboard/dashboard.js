import * as React from "react"
import "./dashboard.css"
import { StaticImage } from "gatsby-plugin-image"
import EventCard from "../event/eventCard"
import "../event/event.css"
import { DashboardServices } from "../../services/dashboard.services"
import EventCategories from "../event/eventCategory"

const Dashboard = () => {
  const [eventList, setEventList] = React.useState([])
  const [stormCategory, setStormCatgory]=React.useState({})
  const [soundStorm, setSoundStrom]=React.useState()

  const getEventData = async (queryParam="") => {
    let response= await DashboardServices.getEvents(queryParam)
    let filtertedEventList
    if (response?.status === 200) {
      filtertedEventList=response.body.filter((e)=>e.Name)
      setEventList([...filtertedEventList])
    }
  }

  const getEventCategories = async () => {
    let response= await DashboardServices.getEventCategories()
    if (response?.status === 200) {
      setStormCatgory(...response.body[0].video)
      setSoundStrom([...response.body[1].video, ...response.body[2].video])

    }
  }
  React.useEffect( () => {
     getEventData()
     getEventCategories()

    return () => {}
  }, [])

  const handleYearChange = async e => {
    if(e.target.value!=="")
    await getEventData({param:"_Year", value:e.target.value})
    else
    await getEventData()
  }

  const languageChange = async e => {
    await getEventData({param:"_locale", value:e.target.value})
  }
  return (
    <>
        <section>
          <div className="soundstrom-container">
            <select className="language-option" onChange={languageChange}>
              <option disabled>Languages</option>
              <option value="en">English</option>
              <option value="hi-IN">Hindi</option>
              <option value="ar-BH">Arabic</option>
              <option value="fr-BE">French</option>
            </select>
            <h2 className="all-heading">SOUNDSTORM IN NUMBERS</h2>
            <div className="row mt-5 mx-5">
              <div className="col-sm-4 text-center">
                <h2 className="soundstrom-subheading">
                  200+ <small className="small-text">ARTISTS</small>
                </h2>
              </div>
              <div className="col-sm-4 text-center">
                <h2 className="soundstrom-subheading">
                  8 <small className="small-text">STAGES</small>
                </h2>
              </div>

              <div className="col-sm-4 text-center">
                <h2 className="soundstrom-subheading">
                  4 <small className="small-text">DAYS OF LIVE MUSIC</small>
                </h2>
              </div>
            </div>
          </div>
          <div className="review-container">
            <h2 className="all-heading"> REVIEWS FROM SOUNDSTORM 2019</h2>
            <div className="row  mt-5 m-0 p-0">
              <div className="col-sm-4 text-center">
                <p>
                  We've never seen something at this scale, with these stages,
                  with this level of a attendance. I felt like it was something
                  great.
                </p>
              </div>
              <div className="col-sm-4 text-center">
                <p>
                  We've never seen something at this scale, with these stages,
                  with this level of a attendance. I felt like it was something
                  great.
                </p>
              </div>

              <div className="col-sm-4 text-center">
                <p>
                  We've never seen something at this scale, with these stages,
                  with this level of a attendance. I felt like it was something
                  great.
                </p>
              </div>
            </div>
          </div>
          <div className="explore-container">
            <div className="container m-0 p-0 mx-auto">
              <h2 className="explore-heading">
                EXPLORE EXPERIENCES AT SOUNDSTORM 2021
              </h2>
              <div className="row mt-5">
                <div className="col-sm-6">
                  <h2 className="explore-para">
                    From world famous artists to street performances to private
                    party boxes - Soundstorm has it all and more!
                  </h2>
                  <div className="row explore-btn-container">
                    <button className="col-sm-4  btn btn-secondary">
                      PLAN MY JOURNEY
                    </button>
                    <button className="col-sm-4 btn btn-primary">
                      EXPLORE EXPERIENCES
                    </button>
                  </div>
                </div>
                <div className="col-sm-6">
                  <StaticImage
                    src="../../images/explore.png"
                    alt="explore image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="events-container">
            <div className="container">
              <div className="year-filter">
                <select onChange={handleYearChange}>
                  <option value="">Years</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>
      <div className="row">
              {eventList &&
                eventList.map((e, i) => {
                  return (
                    <React.Fragment key={i}>
                      <EventCard index={i} details={e} />
                    </React.Fragment>
                  )
                })}
                </div>
                </div>
          </div>
            <EventCategories strom={stormCategory} soundStrom={soundStorm}/>

        </section>
    </>
  )
}

export default Dashboard
