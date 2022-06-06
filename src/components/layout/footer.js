import * as React from "react"
import "./layout.css"
import { Link } from "gatsby"

const Footer=()=>{
    return(<>
         <div className="row mx-5">
           <div className="col-sm-6">
             <h3>
               MDL <b>BEAST</b>
             </h3>
             <p className="footer-left-para">
               {" "}
               MDLBEAST is an entertainment company rooted in music
               <br /> culture. Anchored in the Middle East and shared globally;
               <br /> we showcase local, regional and international talent
               <br /> through immersive experiences and content.{" "}
             </p>
           </div>
           <div className="col-sm-6">
             <div className="row">
               <div className="col-sm-6 mb-4">
                 <h3>EVENT</h3>
                 <Link className="footer-right-a" to="/app/dashboard">
                   SOUNDSTORM
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Tickets
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Lineup
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Experience
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Plan your JOURNEY
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   FAQ
                 </Link>
               </div>
               <div className="col-sm-6 mb-4">
                 <h3>LEGAL</h3>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Privacy Policy
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Terms and Conditions
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Ticketing Platform
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Code of Conduct
                 </Link>
                 <Link className="footer-right-a" to="/app/dashboard">
                   Respect & Reset (R&R)
                 </Link>
               </div>
             </div>
           </div>
         </div>
    </>)
}

export default Footer