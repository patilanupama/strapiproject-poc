import * as React from "react"
import "./event.css"

const EventCategories=({strom, soundStrom})=>{
    return(<>
    
    <div className="storm-container">
        <div className="container m-0 p-0 mx-auto">
          <div className="row mt-5">
            <div className="col-sm-6">
              <h3>A storm is brewing</h3>
              <p>
                It’s coming Shaking, inspiring and moving us to one beat This
                rhythm is in our DNA It’s our sound, our place This is
                Soundstorm And the storm is you
              </p>
            </div>
            <div className="col-sm-6">
              <video
                controls
                className="col-sm-10"
                src={`${process.env.SERVICE_URL}${strom.url}`}
              >
              <track src={strom?.name} kind="subtitles" srcLang="en" label="English"></track>
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="best-sound-container">
        <div className="container m-0 p-0 mx-auto">
          <h2 className="all-heading"> BEST OF SOUNDSTROME 2019</h2>
          <div className="row mt-5">
              {soundStrom && soundStrom.map((e,i)=>{
                  return(
                    <div key={i} className="col-sm-6">
                    <video
                      controls
                      className="col-sm-10"
                      src={`${process.env.SERVICE_URL}${e.url}`}
                    >
                      <track src={e?.name} kind="subtitles" srcLang="en" label="English"></track>
                    </video>
                    </div>
                  )
              })}
          </div>
        </div>
      </div>
    </>)
}

export default EventCategories