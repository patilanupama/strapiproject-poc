import * as React from "react"
import {
  lineupContainer,
  para,
  imageContainer,
  aboutContainer,
  wrapper,
  image,
} from "./about.module.css"
import { AboutServices } from "./../../services/about.services"

const About = () => {
  const [data, setData] = React.useState({})

  const getData = async () => {
    let response = await AboutServices.AboutUs()
    if (response.status === 200) {
      setData(response.body)
    }
  }

  React.useEffect(() => {
    getData()
    return () => {}
  }, [])

  return (
    <>
      <div className={aboutContainer}>
        <div className={wrapper}>
          <h1 className="mb-4 pb-4">About us</h1>
          {Object.keys(data).length > 0 && (
            <div className={lineupContainer}>
              <div className={imageContainer}>
                <img
                  className={image}
                  src={`${process.env.SERVICE_URL}${data?.FeatureImages[0]?.url}`}
                  alt="Car"
                />
              </div>
              <p className={para}>{data?.content}</p>
              <div className={imageContainer}>
                <img
                  className={image}
                  src={`${process.env.SERVICE_URL}${data?.FeatureImages[1]?.url}`}
                  alt="race"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default About
